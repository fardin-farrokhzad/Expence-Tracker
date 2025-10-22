import { useState, useEffect } from 'react';
import TransactionTable from './components/TransactionTable/TransactionTable';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  // Fetch initial data from JSON server
  useEffect(() => {
    fetch('http://localhost:8000/data')
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(result => setData(result))
      .catch(error => {
        console.error(`Fetching data failed: ${error.message}`);
      });
  }, []);

  // Add transaction
  const addTransaction = async transaction => {
    try {
      const response = await fetch('http://localhost:8000/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(transaction),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const newTransaction = await response.json();
      setData(prev => [newTransaction, ...prev]);
    } catch (error) {
      console.error(`Error adding transaction: ${error.message}`);
    }
  };

  // Remove transaction
  const removeTransaction = async id => {
    try {
      const response = await fetch(`http://localhost:8000/data/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setData(prev => prev.filter(item => item.id !== id));
    } catch (error) {
      console.error(`Error deleting transaction: ${error.message}`);
    }
  };

  return <TransactionTable data={data} addTransaction={addTransaction} removeTransaction={removeTransaction} />;
}

export default App;
