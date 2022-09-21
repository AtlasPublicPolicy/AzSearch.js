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
var Pager = /** @class */ (function (_super) {
    __extends(Pager, _super);
    function Pager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pager.prototype.render = function () {
        var _a = this.props, count = _a.count, top = _a.top, skip = _a.skip, showPager = _a.showPager, pageUp = _a.pageUp, pageDown = _a.pageDown, loadPage = _a.loadPage;
        var css = objAssign({}, css_1.defaultCss, this.props.css);
        var maxSkip = 100000;
        var maxPage = count > 0 ? Math.ceil(count / top) : Math.ceil(maxSkip / top) + 1;
        var activePage = skip / top + 1;
        var enablePrevious = activePage > 1;
        var enableNext = activePage < maxPage;
        var pagerButtons = [];
        // previous button
        var previousCss = enablePrevious ? css.pager__pageItem : css.pager__pageItemDisabled;
        var onPreviousClick = function () {
            return enablePrevious && pageDown();
        };
        pagerButtons.push(React.createElement("li", { className: previousCss },
            React.createElement("a", { className: css.pager__pageLink, href: "#", "aria-label": "Previous", onClick: onPreviousClick },
                React.createElement("span", { "aria-hidden": "true" }, "\u00AB"),
                React.createElement("span", { className: css.screenReaderOnly }, "Previous"))));
        var getCssClass = function (page, isActive, isDisabled) {
            var cssClass = isActive ? css.pager__pageItemActive : css.pager_pageItem;
            cssClass = isDisabled ? css.pager__pageItemDisabled : cssClass;
            return cssClass;
        };
        var generateButton = function (page, isActive, isDisabled) {
            var srItem = isActive ? React.createElement("span", { className: css.screenReaderOnly }, "(current)") : "";
            var cssClass = getCssClass(page, isActive, isDisabled);
            var onPageClick = function () {
                return loadPage(page);
            };
            return (React.createElement("li", { className: cssClass },
                React.createElement("a", { className: css.pager__pageLink, href: "#", onClick: onPageClick },
                    page,
                    " ",
                    srItem)));
        };
        var addElipsesAndMaxPage = function (pagerButtons) {
            pagerButtons.push(React.createElement("li", { className: css.pager__pageItemDisabled },
                React.createElement("a", { className: css.pager__pageLink }, "...")));
            pagerButtons.push(generateButton(maxPage, false, true));
        };
        // buttons will loos like << 1 2 3 ... max >>
        if (activePage < 4) {
            pagerButtons.push(generateButton(1, activePage === 1, false));
            2 <= maxPage ? pagerButtons.push(generateButton(2, activePage === 2, false)) : 0;
            3 <= maxPage ? pagerButtons.push(generateButton(3, activePage === 3, false)) : 0;
            if (maxPage > 3) {
                addElipsesAndMaxPage(pagerButtons);
            }
        }
        // else << 1 ... 4 5 ... pageMax >>
        else {
            pagerButtons.push(generateButton(1, false, false));
            pagerButtons.push(React.createElement("li", { className: css.pager__pageItemDisabled },
                React.createElement("a", { className: css.pager__pageLink }, "...")));
            pagerButtons.push(generateButton(activePage, true, false));
            if (activePage < maxPage) {
                pagerButtons.push(generateButton(activePage + 1, false, false));
                addElipsesAndMaxPage(pagerButtons);
            }
        }
        // next button
        var nextCss = enableNext ? css.pager__pageItem : css.pager__pageItemDisabled;
        var onNextClick = function () {
            return enableNext && pageUp();
        };
        pagerButtons.push(React.createElement("li", { className: nextCss },
            React.createElement("a", { className: css.pager__pageLink, href: "#", "aria-label": "Next", onClick: onNextClick },
                React.createElement("span", { "aria-hidden": "true" }, "\u00BB"),
                React.createElement("span", { className: css.screenReaderOnly }, "Next"))));
        if (!showPager) {
            return React.createElement("div", null);
        }
        return (React.createElement("nav", { "aria-label": "Page navigation", className: css.pager__nav },
            React.createElement("ul", { className: css.pager__list }, pagerButtons)));
    };
    return Pager;
}(React.PureComponent));
exports.default = Pager;
//# sourceMappingURL=Pager.js.map