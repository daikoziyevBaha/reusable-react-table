import * as React from "react";
interface TableRowProps {
    key: string | number;
    className?: string;
    children: React.ReactNode;
}
declare const TableRow: ({ key, className, children }: TableRowProps) => JSX.Element;
export default TableRow;
