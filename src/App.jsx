import React, { useState, useEffect } from 'react';
import TransactionTable from './components/TransactionTable/TransactionTable';
import styles from './App.module.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('transactions');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  // Add transaction
  function addTransaction(transaction) {
    const newTransaction = {
      ...transaction,
      id: Date.now(),
    };
    setData(prev => {
      const newData = [newTransaction, ...prev];
      localStorage.setItem('transactions', JSON.stringify(newData));
      return newData;
    });
  }

  // Remove transaction
  function removeTransaction(id) {
    setData(prev => {
      const newData = prev.filter(item => item.id !== id);
      localStorage.setItem('transactions', JSON.stringify(newData));
      return newData;
    });
  }

  return (
    <div className={styles.container}>
      <TransactionTable data={data} addTransaction={addTransaction} removeTransaction={removeTransaction} />
    </div>
  );
}

export default App;
