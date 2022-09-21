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
var ClearFiltersButton = /** @class */ (function (_super) {
    __extends(ClearFiltersButton, _super);
    function ClearFiltersButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClearFiltersButton.prototype.render = function () {
        var _a = this.props, beforeFirstRequest = _a.beforeFirstRequest, onClear = _a.onClear, hasSelectedFacets = _a.hasSelectedFacets;
        var css = objAssign({}, css_1.defaultCss, this.props.css);
        if (beforeFirstRequest) {
            return React.createElement("div", null);
        }
        var text = "clear filter(s)";
        var clearAnchor = hasSelectedFacets ?
            React.createElement("a", { href: "#", onClick: function (e) {
                    e.preventDefault();
                    onClear();
                } }, text)
            :
                React.createElement("span", { className: css.searchFacets__clearFiltersButtonDisabled }, text);
        return (React.createElement("div", { className: css.searchFacets__clearFiltersButtonControl }, clearAnchor));
    };
    return ClearFiltersButton;
}(React.PureComponent));
exports.default = ClearFiltersButton;
//# sourceMappingURL=ClearFiltersButton.js.map