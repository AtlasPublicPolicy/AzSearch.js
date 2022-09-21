import * as React from "react";
export interface OwnProps {
    facet: string;
    css: {
        [key: string]: string;
    };
}
export declare const stateProps: {
    facet: any;
    beforeFirstRequest: boolean;
    css: {
        [key: string]: string;
    };
};
export declare const dispatchProps: {
    onRangeChange: (lowerBound: Date, upperBound: Date) => void;
    afterRangeChange: () => void;
};
export declare type PropsType = typeof stateProps & typeof dispatchProps & OwnProps;
export declare const RangeFacetContainer: React.ComponentClass<OwnProps, any>;
