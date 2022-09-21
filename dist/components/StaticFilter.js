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
var StaticFilter = /** @class */ (function (_super) {
    __extends(StaticFilter, _super);
    function StaticFilter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StaticFilter.prototype.render = function () {
        var _a = this.props, filters = _a.filters, beforeFirstRequest = _a.beforeFirstRequest, onFilterChange = _a.onFilterChange, activeFilter = _a.activeFilter, title = _a.title, filterKey = _a.filterKey;
        var css = objAssign({}, css_1.defaultCss, this.props.css);
        if (beforeFirstRequest)
            return React.createElement("div", null);
        var options = filters.map(function (filter, index) {
            return React.createElement("option", { id: filterKey + "-" + filter.displayName, key: index, selected: filter.filter === activeFilter, value: filter.filter }, filter.displayName ? filter.displayName : filter.filter);
        });
        var onChange = function (event) {
            onFilterChange(event.target.value);
        };
        var container = React.createElement("div", { className: css.sorting__sortBy },
            React.createElement("div", { className: css.searchFacets__facetHeaderContainer },
                React.createElement("h4", { className: css.searchFacets__facetHeader },
                    React.createElement("a", { "data-toggle": "collapse", className: css.searchFacets__facetHeaderLink },
                        React.createElement("span", { className: css.searchFacets__facetHeaderIconOpen, "aria-hidden": "true" }),
                        " ",
                        title ? title : filterKey))),
            React.createElement("div", { className: css.searchFacets__facetControlContainer },
                React.createElement("div", { className: css.searchFacets__facetControlList },
                    React.createElement("select", { className: css.sorting__sortByControl, onChange: onChange, id: filterKey }, options))));
        return (container);
    };
    return StaticFilter;
}(React.PureComponent));
exports.default = StaticFilter;
//# sourceMappingURL=StaticFilter.js.map