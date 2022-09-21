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
var SortBy = /** @class */ (function (_super) {
    __extends(SortBy, _super);
    function SortBy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SortBy.prototype.render = function () {
        var _a = this.props, fields = _a.fields, beforeFirstRequest = _a.beforeFirstRequest, onSortChange = _a.onSortChange, orderby = _a.orderby;
        var css = objAssign({}, css_1.defaultCss, this.props.css);
        var order = "desc";
        if (beforeFirstRequest)
            return React.createElement("div", null);
        var options = fields.map(function (field, index) {
            return React.createElement("option", { key: index, selected: field.orderbyClause === orderby, value: field.orderbyClause }, field.displayName);
        });
        var onChange = function (event) {
            onSortChange(event.target.value);
        };
        var container = React.createElement("div", { className: css.sorting__sortBy },
            React.createElement("div", { className: css.searchFacets__facetHeaderContainer },
                React.createElement("h4", { className: css.searchFacets__facetHeader },
                    React.createElement("a", { "data-toggle": "collapse", className: css.searchFacets__facetHeaderLink },
                        React.createElement("span", { className: css.searchFacets__facetHeaderIconOpen, "aria-hidden": "true" }),
                        " Sort By"))),
            React.createElement("div", { className: css.searchFacets__facetControlContainer },
                React.createElement("div", { className: css.searchFacets__facetControlList },
                    React.createElement("select", { className: css.sorting__sortByControl, onChange: onChange }, options))));
        return (container);
    };
    return SortBy;
}(React.PureComponent));
exports.default = SortBy;
//# sourceMappingURL=SortBy.js.map