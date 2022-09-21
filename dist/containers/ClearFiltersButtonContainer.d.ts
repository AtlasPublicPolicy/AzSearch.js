import * as React from "react";
export interface OwnProps {
    css: {
        [key: string]: string;
    };
}
export declare const stateProps: {
    hasSelectedFacets: boolean;
    beforeFirstRequest: boolean;
    css: {
        [key: string]: string;
    };
};
export declare const dispatchProps: {
    onClear: () => void;
};
export declare type PropsType = typeof stateProps & typeof dispatchProps & OwnProps;
export declare const ClearFiltersButtonContainer: React.ComponentClass<OwnProps, any>;
