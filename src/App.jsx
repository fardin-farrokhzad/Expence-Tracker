// App.jsx
import TransactionTable from './components/TransanctionTable/TransactionTable';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  // Fetch initial data from JSON server
  useEffect(() => {
    fetch('http://localhost:8000/data')
      .then(res => res.json())
      .then(result => setData(result))
      .catch(error => console.error(`Fetching data failed (${error})`));
  }, []);

  // Add transaction via API
  const addTransaction = async transaction => {
    try {
      const response = await fetch('http://localhost:8000/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(transaction),
      });
      const newTransaction = await response.json();
      setData([newTransaction, ...data]);
    } catch (error) {
      console.error('Error adding transaction:', error);
    }
  };

  // Remove transaction via API
  const removeTransaction = async id => {
    try {
      await fetch(`http://localhost:8000/data/${id}`, {
        method: 'DELETE',
      });
      setData(data.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error deleting transaction:', error);
    }
  };

  return <TransactionTable data={data} addTransaction={addTransaction} removeTransaction={removeTransaction} />;
}

export default App;
