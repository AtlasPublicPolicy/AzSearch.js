"use strict";
/// <reference path="../dist/hogan.js.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var azsearchstore_1 = require("azsearchstore");
var react_dom_1 = require("react-dom");
var hogan_js_1 = require("hogan.js");
var React = require("react");
var SearchBoxContainer_1 = require("./containers/SearchBoxContainer");
var ResultsContainer_1 = require("./containers/ResultsContainer");
var CheckboxFacetContainer_1 = require("./containers/CheckboxFacetContainer");
var RangeFacetContainer_1 = require("./containers/RangeFacetContainer");
var SortByContainer_1 = require("./containers/SortByContainer");
var StaticFilterContainer_1 = require("./containers/StaticFilterContainer");
var PagerContainer_1 = require("./containers/PagerContainer");
var ClearFiltersButtonContainer_1 = require("./containers/ClearFiltersButtonContainer");
var LoadingIndicatorContainer_1 = require("./containers/LoadingIndicatorContainer");
var SearchBox_1 = require("./components/SearchBox");
var CheckboxFacet_1 = require("./components/CheckboxFacet");
var ClearFiltersButton_1 = require("./components/ClearFiltersButton");
var Results_1 = require("./components/Results");
var SortBy_1 = require("./components/SortBy");
var StaticFilter_1 = require("./components/StaticFilter");
var LoadingIndicator_1 = require("./components/LoadingIndicator");
var utils_1 = require("./utils/utils");
require("rc-slider/assets/index.css");
var Components = { SearchBox: SearchBox_1.default, CheckboxFacet: CheckboxFacet_1.default, Results: Results_1.default, ClearFiltersButton: ClearFiltersButton_1.default, SortBy: SortBy_1.default, StaticFilter: StaticFilter_1.default, LoadingIndicator: LoadingIndicator_1.default };
exports.Components = Components;
var Containers = { CheckboxFacetContainer: CheckboxFacetContainer_1.CheckboxFacetContainer, ResultsContainer: ResultsContainer_1.ResultsContainer, SearchBoxContainer: SearchBoxContainer_1.SearchBoxContainer, ClearFiltersButtonContainer: ClearFiltersButtonContainer_1.ClearFiltersButtonContainer, SortByContainer: SortByContainer_1.SortByContainer, StaticFilterContainer: StaticFilterContainer_1.StaticFilterContainer, LoadingIndicatorContainer: LoadingIndicatorContainer_1.LoadingIndicatorContainer };
exports.Containers = Containers;
var Automagic = /** @class */ (function () {
    function Automagic(config) {
        this.store = new azsearchstore_1.AzSearchStore();
        this.store.setConfig(config);
    }
    Automagic.prototype.setSearchParameters = function (parameters) {
        this.store.updateSearchParameters(parameters);
    };
    Automagic.prototype.addSearchBox = function (htmlId, parameters, suggestionValueKey, mustacheTemplate, cssClasses) {
        this.store.updateSuggestionsParameters(parameters);
        var template = mustacheTemplate ? hogan_js_1.compile(mustacheTemplate) : null;
        react_dom_1.render(React.createElement(react_redux_1.Provider, { store: this.store.store },
            React.createElement(SearchBoxContainer_1.SearchBoxContainer, { template: template, css: cssClasses, suggestionValueKey: suggestionValueKey })), document.getElementById(htmlId));
    };
    Automagic.prototype.addCheckboxFacet = function (htmlId, fieldName, dataType, count, cssClasses) {
        this.store.addCheckboxFacet(fieldName, dataType, count);
        react_dom_1.render(React.createElement(react_redux_1.Provider, { store: this.store.store },
            React.createElement(CheckboxFacetContainer_1.CheckboxFacetContainer, { facet: fieldName, css: cssClasses })), document.getElementById(htmlId));
    };
    Automagic.prototype.addRangeFacet = function (htmlId, fieldName, dataType, min, max, lower, upper, cssClasses) {
        this.store.addRangeFacet(fieldName, dataType, min, max, lower, upper);
        react_dom_1.render(React.createElement(react_redux_1.Provider, { store: this.store.store },
            React.createElement(RangeFacetContainer_1.RangeFacetContainer, { facet: fieldName, css: cssClasses })), document.getElementById(htmlId));
    };
    Automagic.prototype.addResults = function (htmlId, parameters, mustacheTemplate, cssClasses) {
        var template = mustacheTemplate ? hogan_js_1.compile(mustacheTemplate) : null;
        this.store.updateSearchParameters(parameters);
        react_dom_1.render(React.createElement(react_redux_1.Provider, { store: this.store.store },
            React.createElement(ResultsContainer_1.ResultsContainer, { template: template, css: cssClasses })), document.getElementById(htmlId));
    };
    Automagic.prototype.addPager = function (htmlId, cssClasses) {
        react_dom_1.render(React.createElement(react_redux_1.Provider, { store: this.store.store },
            React.createElement(PagerContainer_1.PagerContainer, { css: cssClasses })), document.getElementById(htmlId));
    };
    Automagic.prototype.addClearFiltersButton = function (htmlId, cssClasses) {
        react_dom_1.render(React.createElement(react_redux_1.Provider, { store: this.store.store },
            React.createElement(ClearFiltersButtonContainer_1.ClearFiltersButtonContainer, { css: cssClasses })), document.getElementById(htmlId));
    };
    // todo add asc sort
    Automagic.prototype.addSortBy = function (htmlId, fields, defaultSortFieldName, cssClasses) {
        var updatedSortClause = "";
        var formattedFields = fields.map(function (field) {
            var orderbyClause = utils_1.createOrderByClause(field, field.order ? field.order : "desc");
            updatedSortClause = field.fieldName === defaultSortFieldName ? orderbyClause : updatedSortClause;
            return {
                displayName: field.displayName ? field.displayName : field.fieldName,
                orderbyClause: orderbyClause
            };
        });
        if (updatedSortClause) {
            this.store.updateSearchParameters({ orderby: updatedSortClause });
        }
        react_dom_1.render(React.createElement(react_redux_1.Provider, { store: this.store.store },
            React.createElement(SortByContainer_1.SortByContainer, { css: cssClasses, fields: formattedFields })), document.getElementById(htmlId));
    };
    Automagic.prototype.addStaticFilter = function (htmlId, filterKey, filters, defaultFilter, title, cssClasses) {
        this.store.setGlobalFilter(filterKey, defaultFilter);
        react_dom_1.render(React.createElement(react_redux_1.Provider, { store: this.store.store },
            React.createElement(StaticFilterContainer_1.StaticFilterContainer, { css: cssClasses, filterKey: filterKey, filters: filters, title: title })), document.getElementById(htmlId));
    };
    Automagic.prototype.addLoadingIndicator = function (htmlId) {
        react_dom_1.render(React.createElement(react_redux_1.Provider, { store: this.store.store },
            React.createElement(LoadingIndicatorContainer_1.LoadingIndicatorContainer, null)), document.getElementById(htmlId));
    };
    return Automagic;
}());
exports.Automagic = Automagic;
//# sourceMappingURL=AzSearch.js.map