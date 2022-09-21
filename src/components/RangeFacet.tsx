import * as React from "react";
import { PropsType } from "../containers/RangeFacetContainer";
import * as objAssign from "object-assign";
import { Store } from "azsearchstore";
import { defaultCss } from "../utils/css";
import { Range } from "rc-slider";
import * as Numeral from "numeral";

export type State = {};

class RangeFacet extends React.PureComponent<PropsType, State> {

    render() {
        const facet = this.props.facet as Store.RangeFacet;
        let css = objAssign({}, defaultCss, this.props.css);
        const { onRangeChange, afterRangeChange, beforeFirstRequest } = this.props;
        let lowerValue;
        let upperValue;
        let lowerLabel;
        let upperLabel;
        let minValue;
        let maxValue;

        if (!facet || beforeFirstRequest) {
            return <div></div>;
        }

        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

        switch (facet.dataType) {
            case "number":
                lowerValue = facet.filterLowerBound as number;
                upperValue = facet.filterUpperBound as number;
                lowerLabel = Numeral(facet.filterLowerBound).format("0,0");
                upperLabel = Numeral(facet.filterUpperBound).format("0,0");
                minValue = facet.min as number;
                maxValue = facet.max as number;
                break;
            case "date":
                let lowerDate = facet.filterLowerBound as Date;
                let upperDate = facet.filterUpperBound as Date;

                lowerDate.setHours(0, 0, 0, 0);
                upperDate.setHours(23, 59, 0, 0);
                lowerValue = lowerDate.toLocaleDateString("sv"); // "2020-02-23"
                upperValue = upperDate.toLocaleDateString("sv");
                lowerLabel = <span> {(facet.filterLowerBound as Date).toLocaleDateString("en-US")} </span>;
                upperLabel = <span> {(facet.filterUpperBound as Date).toLocaleDateString("en-US")} </span>;
                maxValue = new Date().toLocaleDateString("sv");
                break;
        }

        let onLowerChange = (e) => {
            let target = e.hasOwnProperty("target") ? e.target.value : e;
            let lower = Date.parse(target + "T00:00:00-08:00"); // adding timezones to deal with auto offsetting
            let upper = Date.parse(upperValue + "T00:00:00-08:00");
            lowerValue = target;
            onRangeChange(new Date(lower), new Date(upper));
            afterRangeChange();
        };
        let onUpperChange = (e) => {
            let target = e.hasOwnProperty("target") ? e.target.value : e;
            let upper = Date.parse(target + "T00:00:00-08:00");
            let lower = Date.parse(lowerValue  + "T00:00:00-08:00");
            upperValue = target;
            onRangeChange(new Date(lower), new Date(upper));
            afterRangeChange();
        };
        return (
            <div id="range-facet" className={css.searchFacets__rangeFacet}>
                <div className={css.searchFacets__facetHeaderContainer}>
                    <h4 className={css.searchFacets__facetHeader}>
                        <a data-toggle="collapse" className={css.searchFacets__facetHeaderLink}  >
                            <span className={css.searchFacets__facetHeaderIconOpen} aria-hidden="true"></span> {facet.key}
                        </a>
                    </h4>
                </div>
                <div className={css.searchFacets__facetControlContainer}>
                    <ul className={css.searchFacets__facetControlList}>
                        <li className={css.searchFacets__facetControl}>
                            <label htmlFor="start-date"></label>
                            <input id="start-date" type="date" className={css.searchFacets__facetControlCheckbox}
                            max={maxValue}
                            step={1}
                            value={lowerValue}
                            onKeyDown={(e) => e.preventDefault()}
                            onChange={event => onLowerChange(event)}
                            />
                            <span className={css.searchFacets__facetControlRangeLabelRange}> - </span>

                            <label htmlFor="end-date"></label>
                            <input id="end-date" type="date" className={css.searchFacets__facetControlCheckbox}
                            max={maxValue}
                            step={1}
                            onKeyDown={(e) => e.preventDefault()}
                            onChange={event => onUpperChange(event)}
                            value={upperValue}/>

                        </li>

                    </ul>
                </div>
            </div>
        );
    }
}

export default RangeFacet;
