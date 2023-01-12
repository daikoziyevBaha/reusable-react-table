import './TableFilterPanel.css';
type TableFilterProps = {
    searchValue: string;
    setSearchValue: (value: string) => void;
};
declare const TableFilterPanel: ({ searchValue, setSearchValue }: TableFilterProps) => JSX.Element;
export default TableFilterPanel;
