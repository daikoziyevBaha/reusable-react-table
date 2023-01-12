import { useEffect, useState } from 'react';
import * as React from 'react';
import './App.css';
import CustomTable from './components/CustomTable/CustomTable';
import axios from 'axios';
import { employeers as mockEmployeers } from './data/mock-employeers';
import { columns } from './data/columns';

const App: React.FC = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchEmployeers = async () => {
      try {
        const res = await axios.get("employeers.json")
        const data = await res.data;
        if (data && data.employeers[0]) {
          setProducts(data.employeers[0])
        }
        else {
          setProducts(mockEmployeers)
        }
      } catch (e) {
        console.warn(e)
        setProducts(mockEmployeers)
      }
    }
    fetchEmployeers()
  }, [])

  return (
      <div className="App">
        <CustomTable
          products={products}
          columns={columns}
        />
      </div>
  );
}

export default App;
