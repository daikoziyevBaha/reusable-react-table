import {useSortableData, useFilteredData} from '../../hooks/useSortableData';
import TableFilterPanel from '../TableFilterPanel';
import TableRow from '../TableRow';
import TableRowColumn from '../TableRowColumn';
import { FilteredData, Item, TableProps } from '../../types/type';
import TableHeaderColumn from '../TableHeaderColumn';


const CustomTable = (props: TableProps) => {
    const columns = props.columns;
    const { items: it, requestSort, sortColumn } = useSortableData(props.products as Item[]);

    const {items, searchValue, setSearchValue}: FilteredData = useFilteredData(it);

    if (!sortColumn) {
        requestSort(columns[0].label.toLowerCase())
    }
    
    if (!items || items.length == 0) {
        return (
            <div className='table-data-error'>
                You have no data
            </div>
        )
    }

    return (
        <table className="styled-table">
            <caption
                style={{
                    fontSize: "2em",
                    fontWeight: '600'
                }}
            >Employeers</caption>
            <caption 
            >
                <TableFilterPanel
                    setSearchValue = {setSearchValue}
                    searchValue = {searchValue}
                />
            </caption>
            <thead>
                <TableRow
                    key={'header'}
                >
                    { columns 
                        && columns.map( (col, idx: number) => {
                            return (
                                <TableHeaderColumn 
                                    item={col}
                                    key={col.label}
                                    requestSort = {requestSort}
                                    sortColumn = {sortColumn}
                                />
                            )
                        })}
                </TableRow>
            </thead>
            <tbody>
                {items.map((item: Item) => (
                    <TableRow 
                        key = {item.id}
                    >
                        { columns
                            && columns.map( (col, idx: number) => {
                                return (
                                    <TableRowColumn 
                                        item = {item}
                                        column = {col}
                                    />
                                )
                            })}
                    </TableRow>
                ))}
            </tbody>
        </table>
  );
};

export default CustomTable;