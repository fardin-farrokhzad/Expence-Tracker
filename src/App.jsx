import React, { useState, useEffect } from 'react';
import TransactionTable from './components/TransactionTable/TransactionTable';
import './App.css';

function App() {
  const [data, setData] = useState(() => {
    // Load initial data from localStorage
    return localStorage.getItem('expenseTrackerData') ? JSON.parse(localStorage.getItem('expenseTrackerData')) : [];
  });

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('expenseTrackerData', JSON.stringify(data));
  }, [data]);

  // Add transaction
  function addTransaction(transaction) {
    setData(prev => [
      {
        ...transaction,
        id: Date.now(),
      },
      ...prev,
    ]);
  }

  // Remove transaction
  function removeTransaction(id) {
    setData(prev => prev.filter(item => item.id !== id));
  }

  return (
    <div className='container'>
      <TransactionTable data={data} addTransaction={addTransaction} removeTransaction={removeTransaction} />
    </div>
  );
}

export default App;
