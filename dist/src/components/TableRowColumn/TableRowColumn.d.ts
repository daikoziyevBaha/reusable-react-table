import { Column, Item } from "../../types/type";
interface TableRowColumnProps {
    item: Item;
    column: Column;
    className?: string;
}
declare const TableRowColumn: ({ item, column, className }: TableRowColumnProps) => JSX.Element;
export default TableRowColumn;
