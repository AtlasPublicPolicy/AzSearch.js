"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var azsearchstore_1 = require("azsearchstore");
var ClearFiltersButton_1 = require("../components/ClearFiltersButton");
function getReturnType(expression) {
    return {};
}
var mapDispatchToProps = function (dispatch, ownProps) {
    return {
        onClear: function () {
            // Clear URL Params, except search term
            var queryString = window.location.search;
            var currUrlParams = new URLSearchParams(queryString);
            var newUrlParams = new URLSearchParams();
            if (currUrlParams.has("q")) {
                newUrlParams.append("q", currUrlParams.get("q"));
            }
            window.history.replaceState({}, "", location.pathname + "?" + newUrlParams.toString());
            dispatch(azsearchstore_1.facetsActions.clearFacetsSelections());
            dispatch(azsearchstore_1.searchParameterActions.setPage(1));
            dispatch(azsearchstore_1.asyncActions.fetchSearchResults);
        }
    };
};
function mapStateToProps(state, ownProps) {
    return {
        hasSelectedFacets: checkForAppliedFacets(state.facets.facets),
        beforeFirstRequest: state.results.lastUpdated < 1,
        css: ownProps.css
    };
}
function checkForAppliedFacets(facets) {
    return Object.keys(facets).some(function (key) {
        var facet = facets[key];
        var hasFilter = facet.filterClause ? true : false;
        return hasFilter;
    });
}
exports.stateProps = getReturnType(mapStateToProps);
exports.dispatchProps = getReturnType(mapDispatchToProps);
exports.ClearFiltersButtonContainer = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(ClearFiltersButton_1.default);
//# sourceMappingURL=ClearFiltersButtonContainer.js.map