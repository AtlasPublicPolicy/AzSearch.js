"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var objAssign = require("object-assign");
var css_1 = require("../utils/css");
var Numeral = require("numeral");
var RangeFacet = /** @class */ (function (_super) {
    __extends(RangeFacet, _super);
    function RangeFacet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RangeFacet.prototype.render = function () {
        var facet = this.props.facet;
        var css = objAssign({}, css_1.defaultCss, this.props.css);
        var _a = this.props, onRangeChange = _a.onRangeChange, afterRangeChange = _a.afterRangeChange, beforeFirstRequest = _a.beforeFirstRequest;
        var lowerValue;
        var upperValue;
        var lowerLabel;
        var upperLabel;
        var minValue;
        var maxValue;
        if (!facet || beforeFirstRequest) {
            return React.createElement("div", null);
        }
        var queryString = window.location.search;
        var urlParams = new URLSearchParams(queryString);
        switch (facet.dataType) {
            case "number":
                lowerValue = facet.filterLowerBound;
                upperValue = facet.filterUpperBound;
                lowerLabel = Numeral(facet.filterLowerBound).format("0,0");
                upperLabel = Numeral(facet.filterUpperBound).format("0,0");
                minValue = facet.min;
                maxValue = facet.max;
                break;
            case "date":
                var lowerDate = facet.filterLowerBound;
                var upperDate = facet.filterUpperBound;
                lowerDate.setHours(0, 0, 0, 0);
                upperDate.setHours(23, 59, 0, 0);
                lowerValue = lowerDate.toLocaleDateString("sv"); // "2020-02-23"
                upperValue = upperDate.toLocaleDateString("sv");
                lowerLabel = React.createElement("span", null,
                    " ",
                    facet.filterLowerBound.toLocaleDateString("en-US"),
                    " ");
                upperLabel = React.createElement("span", null,
                    " ",
                    facet.filterUpperBound.toLocaleDateString("en-US"),
                    " ");
                maxValue = new Date().toLocaleDateString("sv");
                break;
        }
        var onLowerChange = function (e) {
            var target = e.hasOwnProperty("target") ? e.target.value : e;
            var lower = Date.parse(target + "T00:00:00-08:00"); // adding timezones to deal with auto offsetting
            var upper = Date.parse(upperValue + "T00:00:00-08:00");
            lowerValue = target;
            onRangeChange(new Date(lower), new Date(upper));
            afterRangeChange();
        };
        var onUpperChange = function (e) {
            var target = e.hasOwnProperty("target") ? e.target.value : e;
            var upper = Date.parse(target + "T00:00:00-08:00");
            var lower = Date.parse(lowerValue + "T00:00:00-08:00");
            upperValue = target;
            onRangeChange(new Date(lower), new Date(upper));
            afterRangeChange();
        };
        return (React.createElement("div", { id: "range-facet", className: css.searchFacets__rangeFacet },
            React.createElement("div", { className: css.searchFacets__facetHeaderContainer },
                React.createElement("h4", { className: css.searchFacets__facetHeader },
                    React.createElement("a", { "data-toggle": "collapse", className: css.searchFacets__facetHeaderLink },
                        React.createElement("span", { className: css.searchFacets__facetHeaderIconOpen, "aria-hidden": "true" }),
                        " ",
                        facet.key))),
            React.createElement("div", { className: css.searchFacets__facetControlContainer },
                React.createElement("ul", { className: css.searchFacets__facetControlList },
                    React.createElement("li", { className: css.searchFacets__facetControl },
                        React.createElement("label", { htmlFor: "start-date" }),
                        React.createElement("input", { id: "start-date", type: "date", className: css.searchFacets__facetControlCheckbox, max: maxValue, step: 1, value: lowerValue, onKeyDown: function (e) { return e.preventDefault(); }, onChange: function (event) { return onLowerChange(event); } }),
                        React.createElement("span", { className: css.searchFacets__facetControlRangeLabelRange }, " - "),
                        React.createElement("label", { htmlFor: "end-date" }),
                        React.createElement("input", { id: "end-date", type: "date", className: css.searchFacets__facetControlCheckbox, max: maxValue, step: 1, onKeyDown: function (e) { return e.preventDefault(); }, onChange: function (event) { return onUpperChange(event); }, value: upperValue }))))));
    };
    return RangeFacet;
}(React.PureComponent));
exports.default = RangeFacet;
//# sourceMappingURL=RangeFacet.js.map