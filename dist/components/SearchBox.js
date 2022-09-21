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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var AutoSuggest = require("react-autosuggest");
var React = require("react");
var objAssign = require("object-assign");
var css_1 = require("../utils/css");
var SearchBox = /** @class */ (function (_super) {
    __extends(SearchBox, _super);
    function SearchBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SearchBox.prototype.onInputChange = function (changeEvent, newValue) {
        if (newValue.method === "up" || newValue.method === "down") {
            return;
        }
        var input = this.sanitizeInput(newValue.newValue);
        // remove highlight tags for the stored input
        this.props.onInputChange(input);
        if (newValue.method === "click" || newValue.method === "enter") {
            this.props.clearFacetsAndSearch();
        }
    };
    SearchBox.prototype.sanitizeInput = function (input) {
        var sanitized = "";
        sanitized = input.replace("^", "").replace("!", "-");
        if (sanitized.charAt(0) == "*") {
            sanitized = sanitized.substr(1); // removes * if first char
        }
        return sanitized;
    };
    SearchBox.prototype.handleKeyDown = function (evt) {
        if (evt.key === "Enter") {
            return this.props.clearFacetsAndSearch();
        }
    };
    SearchBox.prototype.getSuggestionValue = function (suggestion) {
        var suggestionValueKey = this.props.suggestionValueKey ? this.props.suggestionValueKey : "@search.text";
        return suggestion[suggestionValueKey].replace(this.props.preTag, "").replace(this.props.postTag, "");
    };
    SearchBox.prototype.renderInputComponent = function (inputProps) {
        var css = objAssign({}, css_1.defaultCss, this.props.css);
        return (React.createElement("div", { className: css.searchBox__inputContainer },
            React.createElement("input", __assign({}, inputProps, { type: "text", autoFocus: true })),
            React.createElement("span", { className: css.searchBox__buttonContainer },
                React.createElement("button", { className: css.searchBox__button, type: "button", onClick: this.props.clearFacetsAndSearch },
                    React.createElement("span", { className: css.searchBox__buttonIcon }),
                    "\u00A0"))));
    };
    SearchBox.prototype.renderSuggestion = function (suggestion) {
        var template = this.props.template;
        var html = template ? template.render(suggestion) : null;
        if (html) {
            return (React.createElement("div", { dangerouslySetInnerHTML: { __html: html } }));
        }
        else {
            return (React.createElement("div", null,
                React.createElement("pre", null,
                    React.createElement("code", null, JSON.stringify(suggestion, null, 4)))));
        }
    };
    SearchBox.prototype.render = function () {
        var _a = this.props, input = _a.input, onInputChange = _a.onInputChange, suggesterName = _a.suggesterName, suggestions = _a.suggestions, suggest = _a.suggest, clearSuggestions = _a.clearSuggestions, postTag = _a.postTag, preTag = _a.preTag, clearFacetsAndSearch = _a.clearFacetsAndSearch, template = _a.template;
        var css = objAssign({}, css_1.defaultCss, this.props.css);
        var theme = {
            container: css.searchBox__container,
            containerOpen: css.searchBox__containerOpen,
            input: css.searchBox__input,
            suggestionsContainer: css.searchBox__suggestionsContainer,
            suggestionsList: css.searchBox__suggestionsList,
            suggestion: css.searchBox__suggestion,
            suggestionFocused: css.searchBox__suggestionFocused,
            suggestionHighlighted: css.searchBox__suggestionFocused,
            sectionContainer: css.searchBox__sectionContainer,
            sectionTitle: css.searchBox__sectionTitle
        };
        var suggestFetchRequested = function (input) {
            if (suggesterName && input.value && input.value.length > 1) {
                suggest();
            }
        };
        // input props
        var inputProps = {
            placeholder: "Search Tweets",
            value: input,
            onChange: this.onInputChange.bind(this),
            type: "search",
            onKeyPress: this.handleKeyDown.bind(this)
        };
        return (React.createElement(AutoSuggest, { suggestions: suggestions, onSuggestionsFetchRequested: suggestFetchRequested, onSuggestionsClearRequested: clearSuggestions, onSuggestionSelected: clearFacetsAndSearch, inputProps: inputProps, getSuggestionValue: this.getSuggestionValue.bind(this), theme: theme, renderInputComponent: this.renderInputComponent.bind(this), renderSuggestion: this.renderSuggestion.bind(this) }));
    };
    return SearchBox;
}(React.PureComponent));
exports.default = SearchBox;
//# sourceMappingURL=SearchBox.js.map