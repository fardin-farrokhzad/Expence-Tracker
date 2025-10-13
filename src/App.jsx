// App.js
import TransactionTable from './components/TransanctionTable/TransactionTable';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  // Fetch the data from json server
  useEffect(() => {
    fetch('http://localhost:8000/data')
      .then(res => res.json())
      .then(result => setData(result))
      .catch(erorr => {
        console.error(`Fetching data failed (${erorr})`);
      });
  }, []);

  return <TransactionTable data={data} />;
}

export default App;
