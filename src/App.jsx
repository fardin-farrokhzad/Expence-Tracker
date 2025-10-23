import React, { useState, useEffect } from 'react';
import TransactionTable from './components/TransactionTable/TransactionTable';
import styles from './App.module.css';

function App() {
  const [data, setData] = useState(() => {
    // Load initial data from localStorage
    const storedData = localStorage.getItem('expenseTrackerData');
    return storedData ? JSON.parse(storedData) : [];
  });

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('expenseTrackerData', JSON.stringify(data));
  }, [data]);

  // Add transaction
  function addTransaction(transaction) {
    const newTransaction = {
      ...transaction,
      id: Date.now(),
    };
    setData(prev => [newTransaction, ...prev]);
  }

  // Remove transaction
  function removeTransaction(id) {
    setData(prev => prev.filter(item => item.id !== id));
  }

  return (
    <div className={styles.container}>
      <TransactionTable data={data} addTransaction={addTransaction} removeTransaction={removeTransaction} />
    </div>
  );
}

export default App;
