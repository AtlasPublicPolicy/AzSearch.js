"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var Results_1 = require("../components/Results");
function getReturnType(expression) {
    return {};
}
var mapDispatchToProps = function (dispatch) {
    return {};
};
var mapStateToProps = function (state, ownProps) {
    return {
        results: state.results.results,
        count: state.results.count,
        top: state.parameters.searchParameters.top,
        skip: state.parameters.searchParameters.skip,
        template: ownProps.template,
        css: ownProps.css
    };
};
exports.stateProps = getReturnType(mapStateToProps);
exports.dispatchProps = getReturnType(mapDispatchToProps);
exports.ResultsContainer = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Results_1.default);
//# sourceMappingURL=ResultsContainer.js.map