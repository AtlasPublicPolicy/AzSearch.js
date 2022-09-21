"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var azsearchstore_1 = require("azsearchstore");
var CheckboxFacet_1 = require("../components/CheckboxFacet");
function getReturnType(expression) {
    return {};
}
var mapDispatchToProps = function (dispatch, ownProps) {
    return {
        toggleFacet: function (value) {
            dispatch(azsearchstore_1.facetsActions.toggleCheckboxFacetSelection(ownProps.facet, value));
        },
    };
};
function mapStateToProps(state, ownProps) {
    return {
        facet: state.facets.facets[ownProps.facet],
    };
}
;
exports.stateProps = getReturnType(mapStateToProps);
exports.dispatchProps = getReturnType(mapDispatchToProps);
exports.CheckboxFacetContainer = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(CheckboxFacet_1.default);
//# sourceMappingURL=CheckboxFacetContainer.js.map