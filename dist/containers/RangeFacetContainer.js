"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var azsearchstore_1 = require("azsearchstore");
var RangeFacet_1 = require("../components/RangeFacet");
function getReturnType(expression) {
    return {};
}
var mapDispatchToProps = function (dispatch, ownProps) {
    return {
        onRangeChange: function (lowerBound, upperBound) {
            dispatch(azsearchstore_1.facetsActions.setFacetRange(ownProps.facet, lowerBound, upperBound));
        },
        afterRangeChange: function () {
            console.log("after range change");
        }
    };
};
function mapStateToProps(state, ownProps) {
    return {
        facet: state.facets.facets[ownProps.facet],
        beforeFirstRequest: state.results.lastUpdated < 1,
        css: ownProps.css
    };
}
;
exports.stateProps = getReturnType(mapStateToProps);
exports.dispatchProps = getReturnType(mapDispatchToProps);
exports.RangeFacetContainer = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(RangeFacet_1.default);
//# sourceMappingURL=RangeFacetContainer.js.map