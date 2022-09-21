"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var azsearchstore_1 = require("azsearchstore");
var StaticFilter_1 = require("../components/StaticFilter");
function getReturnType(expression) {
    return {};
}
var mapDispatchToProps = function (dispatch, ownProps) {
    return {
        onFilterChange: function (filter) {
            dispatch(azsearchstore_1.facetsActions.setGlobalFilter(ownProps.filterKey, filter));
        }
    };
};
function mapStateToProps(state, ownProps) {
    return {
        beforeFirstRequest: state.results.lastUpdated < 1,
        css: ownProps.css,
        activeFilter: state.facets.globalFilters[ownProps.filterKey]
    };
}
exports.stateProps = getReturnType(mapStateToProps);
exports.dispatchProps = getReturnType(mapDispatchToProps);
exports.StaticFilterContainer = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(StaticFilter_1.default);
//# sourceMappingURL=StaticFilterContainer.js.map