import * as React from 'react';
import { TableHeaderProps } from '../../types/type';
import arrowUpIcon from '../../assets/images/arrow-up.svg?inline';
import arrowDownIcon from '../../assets/images/arrow-down.svg?inline';

const TableHeaderColumn = ({ item, key, requestSort, sortColumn }: TableHeaderProps) => {
    let isSort;

    if (sortColumn) {
        isSort = sortColumn.key === item.label.toLowerCase();
    }
    
    return (
        <th key={key}>
            <button
              onClick={() => requestSort(item.label.toLowerCase())}
              className={''}
              style={{
                backgroundColor: "inherit",
                display: "flex",
                alignItems: "center",
                gap: "0.25rem"

              }}
            >
                <span style={{fontSize: "1.25em"}}>{item.label}</span>
                <div
                    style={{
                        width: "20px",
                        height: "20px"
                    }}
                >
                    { isSort && (
                        sortColumn.direction === 'ascending' 
                            ? 
                            <img style={{width: "80%"}} src={arrowUpIcon} alt='' />
                            :
                            <img style={{width: "80%"}} src={arrowDownIcon} alt='' />
                    )}
                </div>
            </button>
        </th>
    )
}

export default TableHeaderColumn;