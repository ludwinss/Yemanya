import { FilterBarProps } from 'common/models/';
import { useMemo, createContext, useState, useContext } from 'react';

const FilterBarDefaultValues: FilterBarProps.FilterBarProps = {
    filter: 'none',
    view: 'column'
}

const FilterBarContext = createContext<FilterBarProps.FilterBarContextValue>({
    filterBar: FilterBarDefaultValues,
    setFilterBar: () => { }
});

const useFilterBarContext = () => {
    if (!FilterBarContext.Provider) {
        throw new Error('Doesn\'nt have Wrapper Provider Context')
    }
    return useContext(FilterBarContext)
}

function FilterBarProvider({ children }: FilterBarProps.IFilterBarProvider) {
    const [filterBar, _setFilterBar] = useState<FilterBarProps.FilterBarProps>(FilterBarDefaultValues);

    const setFilterBar = (name: string, value: string): void => _setFilterBar({
        ...filterBar,
        [name]: value
    })

    const value = useMemo((): FilterBarProps.FilterBarContextValue =>
        ({ filterBar, setFilterBar })
        , [filterBar])

    return (
        <FilterBarContext.Provider value={value}>
            {children}
        </FilterBarContext.Provider>
    )
}

export {
    FilterBarProvider,
    useFilterBarContext
}