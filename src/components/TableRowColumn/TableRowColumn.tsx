import { Column, Item } from "../../types/type";

interface TableRowColumnProps {
    item: Item,
    column: Column,
    className?: string
}

const TableRowColumn = ({ item, column, className='' }: TableRowColumnProps) => {
    return (
        <td className={className}>
            {column.render(item)}
        </td>
    )
}

export default TableRowColumn;