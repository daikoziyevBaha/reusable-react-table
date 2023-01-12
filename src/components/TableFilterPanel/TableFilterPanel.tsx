import * as React from "react";
import { StateProps } from "../../hooks/useSortableData";
import './TableFilterPanel.css';

type TableFilterProps = {
    searchValue: string,
    setSearchValue: (value: string) => void
}

const TableFilterPanel = ({searchValue, setSearchValue}: TableFilterProps) => {
    
    return (
        <div className='table-filter'
            style={{
                padding: '10px',
                float: 'right'
            }} 
        >
            <input 
                type={"search"}
                placeholder="Filter by field name..."
                style={{
                    border: '1px solid black',
                    borderRadius: '5px',
                    padding: '10px',
                    fontSize: '1em',
                    fontWeight: '500'
                    }
                }
                defaultValue={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
        </div>
    )
}

export default TableFilterPanel;