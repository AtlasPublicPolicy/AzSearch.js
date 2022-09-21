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
var Results = /** @class */ (function (_super) {
    __extends(Results, _super);
    function Results() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Results.prototype.render = function () {
        var _a = this.props, results = _a.results, template = _a.template, skip = _a.skip, top = _a.top, count = _a.count;
        var css = objAssign({}, css_1.defaultCss, this.props.css);
        var countElement = count > 0 ? " of " + count.toLocaleString() : "";
        var bottomRange = skip + 1;
        var topRange = skip + top;
        topRange = topRange > count ? count : topRange;
        var resultsBlurb = React.createElement("div", { className: css.results__blurb },
            bottomRange,
            " - ",
            topRange,
            countElement);
        resultsBlurb = results.length > 0 ? resultsBlurb : React.createElement("div", null);
        var renderedResults = results.map(function (result, index) {
            var html = template ? template.render(result) : null;
            if (html) {
                return (React.createElement("div", { className: css.searchResults__result, key: index, dangerouslySetInnerHTML: { __html: html } }));
            }
            else {
                return (React.createElement("div", { className: css.searchResults__result, key: index },
                    React.createElement("pre", null,
                        React.createElement("code", null, JSON.stringify(result, null, 4)))));
            }
        });
        return (React.createElement("div", null,
            resultsBlurb,
            renderedResults));
    };
    return Results;
}(React.PureComponent));
exports.default = Results;
//# sourceMappingURL=Results.js.map