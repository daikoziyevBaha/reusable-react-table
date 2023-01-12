import * as React from "react";


interface TableRowProps {
    key: string | number,
    className?: string,
    children: React.ReactNode
}

const TableRow = ({key = 'unique', className = '', children}: TableRowProps) => {
    return (
        <tr className={className} key={key}>
            {children}
        </tr>
    )
}

export default TableRow;