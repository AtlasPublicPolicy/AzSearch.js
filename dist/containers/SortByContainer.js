"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var azsearchstore_1 = require("azsearchstore");
var SortBy_1 = require("../components/SortBy");
function getReturnType(expression) {
    return {};
}
var mapDispatchToProps = function (dispatch, ownProps) {
    return {
        onSortChange: function (fieldName) {
            var orderby = fieldName ? fieldName : "";
            dispatch(azsearchstore_1.searchParameterActions.updateSearchParameters({ orderby: orderby }));
            dispatch(azsearchstore_1.searchParameterActions.setPage(1));
            dispatch(azsearchstore_1.asyncActions.fetchSearchResultsFromFacet);
        }
    };
};
function mapStateToProps(state, ownProps) {
    return {
        beforeFirstRequest: state.results.lastUpdated < 1,
        css: ownProps.css,
        orderby: state.parameters.searchParameters.orderby
    };
}
exports.stateProps = getReturnType(mapStateToProps);
exports.dispatchProps = getReturnType(mapDispatchToProps);
exports.SortByContainer = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(SortBy_1.default);
//# sourceMappingURL=SortByContainer.js.map