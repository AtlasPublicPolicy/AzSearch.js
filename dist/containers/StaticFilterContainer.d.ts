import * as React from "react";
export interface OwnProps {
    filterKey: string;
    filters: {
        filter: string;
        displayName?: string;
    }[];
    css: {
        [key: string]: string;
    };
    title: string;
}
export declare const stateProps: {
    beforeFirstRequest: boolean;
    css: {
        [key: string]: string;
    };
    activeFilter: any;
};
export declare const dispatchProps: {
    onFilterChange: (filter: string) => void;
};
export declare type PropsType = typeof stateProps & typeof dispatchProps & OwnProps;
export declare const StaticFilterContainer: React.ComponentClass<OwnProps, any>;
