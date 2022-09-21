/// <reference path="hogan.js.d.ts" />
import { Store, AzSearchStore } from "azsearchstore";
import * as React from "react";
import { OwnProps as BoxOwnProps } from "./containers/SearchBoxContainer";
import { OwnProps as ResultsOwnProps } from "./containers/ResultsContainer";
import { OwnProps as CheckboxOwnProps } from "./containers/CheckboxFacetContainer";
import { OwnProps as SortByOwnProps } from "./containers/SortByContainer";
import { OwnProps as StaticFilterOwnProps } from "./containers/StaticFilterContainer";
import { OwnProps as FilterBarOwnProps } from "./containers/ClearFiltersButtonContainer";
import { OwnProps as LoadingIndicatorOwnProps } from "./containers/LoadingIndicatorContainer";
import SearchBox from "./components/SearchBox";
import CheckboxFacet from "./components/CheckboxFacet";
import ClearFiltersButton from "./components/ClearFiltersButton";
import Results from "./components/Results";
import SortBy from "./components/SortBy";
import StaticFilter from "./components/StaticFilter";
import LoadingIndicator from "./components/LoadingIndicator";
import "rc-slider/assets/index.css";
declare let Components: {
    SearchBox: typeof SearchBox;
    CheckboxFacet: typeof CheckboxFacet;
    Results: typeof Results;
    ClearFiltersButton: typeof ClearFiltersButton;
    SortBy: typeof SortBy;
    StaticFilter: typeof StaticFilter;
    LoadingIndicator: typeof LoadingIndicator;
};
declare let Containers: {
    CheckboxFacetContainer: React.ComponentClass<CheckboxOwnProps, any>;
    ResultsContainer: React.ComponentClass<ResultsOwnProps, any>;
    SearchBoxContainer: React.ComponentClass<BoxOwnProps, any>;
    ClearFiltersButtonContainer: React.ComponentClass<FilterBarOwnProps, any>;
    SortByContainer: React.ComponentClass<SortByOwnProps, any>;
    StaticFilterContainer: React.ComponentClass<StaticFilterOwnProps, any>;
    LoadingIndicatorContainer: React.ComponentClass<LoadingIndicatorOwnProps, any>;
};
declare class Automagic {
    store: AzSearchStore;
    constructor(config: Store.Config);
    setSearchParameters(parameters: Store.SearchParametersUpdate): void;
    addSearchBox(htmlId: string, parameters?: Store.SuggestionsParametersUpdate, suggestionValueKey?: string, mustacheTemplate?: string, cssClasses?: {
        [key: string]: string;
    }): void;
    addCheckboxFacet(htmlId: string, fieldName: string, dataType: Store.CheckboxDataType, count: number, cssClasses?: {
        [key: string]: string;
    }): void;
    addRangeFacet(htmlId: string, fieldName: string, dataType: Store.RangeDataType, min: number | Date, max: number | Date, lower: number | Date, upper: number | Date, cssClasses?: {
        [key: string]: string;
    }): void;
    addResults(htmlId: string, parameters?: Store.SearchParametersUpdate, mustacheTemplate?: string, cssClasses?: {
        [key: string]: string;
    }): void;
    addPager(htmlId: string, cssClasses?: {
        [key: string]: string;
    }): void;
    addClearFiltersButton(htmlId: string, cssClasses?: {
        [key: string]: string;
    }): void;
    addSortBy(htmlId: string, fields: {
        fieldName: string;
        displayName?: string;
        order?: string;
        latitude?: number;
        longitude?: number;
    }[], defaultSortFieldName?: string, cssClasses?: {
        [key: string]: string;
    }): void;
    addStaticFilter(htmlId: string, filterKey: string, filters: {
        filter: string;
        displayName: string;
    }[], defaultFilter: string, title: string, cssClasses?: {
        [key: string]: string;
    }): void;
    addLoadingIndicator(htmlId: string): void;
}
export { Components, Containers, Automagic };
