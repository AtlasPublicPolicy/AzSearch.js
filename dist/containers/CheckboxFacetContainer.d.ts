import * as React from "react";
export interface OwnProps {
    facet: string;
    css: {
        [key: string]: string;
    };
}
export declare const stateProps: {
    facet: any;
};
export declare const dispatchProps: {
    toggleFacet: (value: string) => void;
};
export declare type PropsType = typeof stateProps & typeof dispatchProps & OwnProps;
export declare const CheckboxFacetContainer: React.ComponentClass<OwnProps, any>;
