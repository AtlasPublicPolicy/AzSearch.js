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
var Spinner = require("react-spinkit");
var style = {
    "height": "0em"
};
var LoadingIndicator = /** @class */ (function (_super) {
    __extends(LoadingIndicator, _super);
    function LoadingIndicator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoadingIndicator.prototype.render = function () {
        var isLoading = this.props.isLoading;
        return isLoading ? React.createElement("div", { style: style },
            React.createElement(Spinner, { spinnerName: "three-bounce" }),
            " ") : React.createElement("div", { style: style });
    };
    return LoadingIndicator;
}(React.PureComponent));
exports.default = LoadingIndicator;
//# sourceMappingURL=LoadingIndicator.js.map