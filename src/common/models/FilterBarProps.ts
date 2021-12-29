import { ReactChild, ReactChildren } from "react";

interface FilterBarProps {
    filter: string,
    view: string
};

interface FilterBarContextValue {
    filterBar: FilterBarProps,
    setFilterBar: (name: string, value: string) => void

};

interface IFilterBarProvider {
    children: ReactChild | ReactChildren
}

export {
    type FilterBarProps,
    type FilterBarContextValue,
    type IFilterBarProvider
}
