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
var CheckboxFacet = /** @class */ (function (_super) {
    __extends(CheckboxFacet, _super);
    function CheckboxFacet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckboxFacet.prototype.render = function () {
        var facet = this.props.facet;
        var css = objAssign({}, css_1.defaultCss, this.props.css);
        var toggleFacet = this.props.toggleFacet;
        // input props
        if (!facet || Object.keys(facet.values).length < 1) {
            return React.createElement("div", null);
        }
        var checkboxes = Object.keys(facet.values).map(function (valueKey, index) {
            var value = facet.values[valueKey];
            var countDisplay = value.count ? "(" + Numeral(value.count).format("0,0") + ")" : "";
            return (React.createElement("li", { key: index + 1, className: css.searchFacets__facetControl },
                React.createElement("div", { className: css.searchFacets__facetControlCheckboxWrapper },
                    React.createElement("label", { className: "checkboxLabel", id: "label-" + facet.key + "-" + value.value },
                        React.createElement("input", { type: "checkbox", id: facet.key + "-" + value.value, className: css.searchFacets__facetControlCheckbox, onChange: toggleFacet.bind(null, valueKey), checked: value.selected }),
                        " ",
                        value.value + " ",
                        countDisplay))));
        });
        return (React.createElement("div", { className: css.searchFacets__checkboxFacet },
            React.createElement("div", { className: css.searchFacets__facetHeaderContainer },
                React.createElement("h4", { className: css.searchFacets__facetHeader },
                    React.createElement("a", { "data-toggle": "collapse", className: css.searchFacets__facetHeaderLink },
                        React.createElement("span", { className: css.searchFacets__facetHeaderIconOpen, "aria-hidden": "true" }),
                        " ",
                        facet.key))),
            React.createElement("div", { className: css.searchFacets__facetControlContainer },
                React.createElement("ul", { className: css.searchFacets__facetControlList }, checkboxes))));
    };
    return CheckboxFacet;
}(React.PureComponent));
exports.default = CheckboxFacet;
//# sourceMappingURL=CheckboxFacet.js.map