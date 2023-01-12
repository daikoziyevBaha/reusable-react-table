import { Item } from "../types/type";

export const columns = [
    {
      label: 'Id',
      render: (item: Item) => item.id 
    },
    {
      label: 'Name',
      render: (item: Item) => item.name 
    },
    {
      label: 'Surname',
      render: (item: Item) => item.surname 
    },
    {
      label: 'Age',
      render: (item: Item) => item.age 
    },
    {
      label: 'Position',
      render: (item: Item) => item.position 
    }
  ]