"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var azsearchstore_1 = require("azsearchstore");
var Pager_1 = require("../components/Pager");
function getReturnType(expression) {
    return {};
}
var mapDispatchToProps = function (dispatch) {
    return {
        pageUp: function () {
            dispatch(azsearchstore_1.searchParameterActions.incrementSkip());
            // fetchSearchResultsFromFacets maintains current facet selections
            dispatch(azsearchstore_1.asyncActions.fetchSearchResultsFromFacet);
        },
        pageDown: function () {
            dispatch(azsearchstore_1.searchParameterActions.decrementSkip());
            dispatch(azsearchstore_1.asyncActions.fetchSearchResultsFromFacet);
        },
        loadPage: function (page) {
            dispatch(azsearchstore_1.searchParameterActions.setPage(page));
            dispatch(azsearchstore_1.asyncActions.fetchSearchResultsFromFacet);
        }
    };
};
function mapStateToProps(state, ownProps) {
    return {
        top: state.parameters.searchParameters.top,
        skip: state.parameters.searchParameters.skip,
        count: state.results.count,
        showPager: true,
        css: ownProps.css
    };
}
;
exports.stateProps = getReturnType(mapStateToProps);
exports.dispatchProps = getReturnType(mapDispatchToProps);
exports.PagerContainer = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Pager_1.default);
//# sourceMappingURL=PagerContainer.js.map