export interface Rows<R> {
    rows: R[];
}

export type Item = {
    [key: string]: any,
}

export type HeaderColumn = {
    label: string,
    render: (item: Item) => string | number
}

export interface TableHeaderProps {
    item: HeaderColumn,
    key: string,
    requestSort: (label: string) => void,
    sortColumn: {
        key: string,
        direction: string
    }
}

export interface TableProps {
    products: Item[],
    columns: Column[]
}

export type Column = {
    label: string,
    render: (item: Item) => string | number
}

export type FilteredData = {
    items: Item[],
    searchValue: string,
    setSearchValue: any
}