import { useState, useMemo } from "react";
import { Item } from "../types/type";

interface Config {
  key: string,
  direction: string
}

const useSortableData: Function = (items: Item[], config: Config) => {
    const [sortColumn, setSortColumn] = useState(config);
  
    const sortedItems = useMemo(() => {
      let sortableItems = [...items];
      if (sortColumn !== null) {
        sortableItems.sort((a: Item, b: Item) => {
          if (a[sortColumn.key] < b[sortColumn.key]) {
            return sortColumn.direction === 'ascending' ? -1 : 1;
          }
          if (a[sortColumn.key] > b[sortColumn.key]) {
            return sortColumn.direction === 'ascending' ? 1 : -1;
          }
          return 0;
        });
      }
      return sortableItems;
    }, [items, sortColumn]);
  
    const requestSort = (key: string) => {
      console.log(key);
      
      let direction = 'ascending';
      if (
        sortColumn &&
        sortColumn.key === key &&
        sortColumn.direction === 'ascending'
      ) {
        direction = 'descending';
      }
      setSortColumn({ key, direction });
    };
  
    return { items: sortedItems, requestSort, sortColumn };
  };

export type StateProps = {
  searchValue: string,
  setSearchValue: (value: string) => void
}

const useFilteredData: Function = (items: Item[], filterSettings: string | null) => {
  const [searchValue, setSearchValue] = useState(filterSettings);
  
  const filteredValue = useMemo(() => {
    
    if (searchValue) {

      let tempItems = [...items];
      
      tempItems = tempItems.filter(item => {
          
          return (
            item.id.toString().includes(searchValue) ||
            item.name.toString().includes(searchValue) ||
            item.surname.toString().includes(searchValue) ||
            item.age.toString().includes(searchValue) ||
            item.position.toString().includes(searchValue)
          )
        }
      )
      return tempItems.length > 0 ? tempItems : [...items]
    }
    return [...items]
  }, [items, searchValue])

  return {items: filteredValue, searchValue, setSearchValue}
  
  
}

export {
  useSortableData,
  useFilteredData
}