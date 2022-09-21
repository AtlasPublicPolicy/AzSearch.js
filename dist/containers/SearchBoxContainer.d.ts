import { Template } from "hogan.js";
import * as React from "react";
export interface OwnProps {
    suggestionValueKey?: string;
    template: Template;
    css: {
        [key: string]: string;
    };
}
export declare const stateProps: {
    input: any;
    preTag: any;
    postTag: any;
    suggestions: any;
    template: Template;
    css: {
        [key: string]: string;
    };
    suggestionValueKey: string;
    suggesterName: any;
};
export declare const dispatchProps: {
    onInputChange: (input: string) => void;
    suggest: () => void;
    clearSuggestions: () => void;
    clearFacetsAndSearch: () => void;
};
export declare type PropsType = typeof stateProps & typeof dispatchProps;
export declare const SearchBoxContainer: React.ComponentClass<OwnProps, any>;
