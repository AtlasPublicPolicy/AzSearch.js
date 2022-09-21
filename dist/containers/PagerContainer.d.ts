import * as React from "react";
export interface OwnProps {
    css: {
        [key: string]: string;
    };
}
export declare const stateProps: {
    top: any;
    skip: any;
    count: any;
    showPager: boolean;
    css: {
        [key: string]: string;
    };
};
export declare const dispatchProps: {
    pageUp: () => void;
    pageDown: () => void;
    loadPage: (page: number) => void;
};
export declare type PropsType = typeof stateProps & typeof dispatchProps & OwnProps;
export declare const PagerContainer: React.ComponentClass<OwnProps, any>;
