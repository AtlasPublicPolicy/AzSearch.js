"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var LoadingIndicator_1 = require("../components/LoadingIndicator");
function getReturnType(expression) {
    return {};
}
var mapDispatchToProps = function (dispatch, ownProps) {
    return {};
};
function mapStateToProps(state, ownProps) {
    return {
        isLoading: state.results.isFetching
    };
}
;
exports.stateProps = getReturnType(mapStateToProps);
exports.dispatchProps = getReturnType(mapDispatchToProps);
exports.LoadingIndicatorContainer = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(LoadingIndicator_1.default);
//# sourceMappingURL=LoadingIndicatorContainer.js.map