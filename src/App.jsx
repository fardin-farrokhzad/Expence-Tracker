import React, { useState } from 'react';
import TransactionTable from './components/TransactionTable/TransactionTable';
import './App.css';

const mockData = [
  {
    id: 1,
    date: '1404/06/31',
    description: 'قسط آخر پروژه کاریار',
    type: 'income',
    amount: 3100000,
  },
  {
    id: 2,
    date: '1404/06/27',
    description: 'خرید لباس',
    type: 'expense',
    amount: 1230000,
  },
  {
    id: 3,
    date: '1404/06/25',
    description: 'سود سپرده',
    type: 'income',
    amount: 17000,
  },
  {
    id: 4,
    date: '1404/06/20',
    description: 'غذا',
    type: 'expense',
    amount: 440000,
  },
  {
    id: 5,
    date: '1404/06/14',
    description: 'سوپرمارکت',
    type: 'expense',
    amount: 562200,
  },
  {
    id: 6,
    date: '1404/06/06',
    description: 'پارکینگ',
    type: 'expense',
    amount: 136000,
  },
  {
    id: 7,
    date: '1404/06/04',
    description: 'شارژ ایرانسل',
    type: 'expense',
    amount: 55000,
  },
  {
    id: 8,
    date: '1404/06/01',
    description: 'کادو تولد',
    type: 'income',
    amount: 5000000,
  },
  {
    id: 9,
    date: '1404/05/25',
    description: 'دندان‌پزشکی',
    type: 'expense',
    amount: 9800000,
  },
  {
    id: 10,
    date: '1404/05/20',
    description: 'غذا',
    type: 'expense',
    amount: 250000,
  },
  {
    id: 11,
    date: '1404/05/17',
    description: 'سوپرمارکت',
    type: 'expense',
    amount: 758000,
  },
  {
    id: 12,
    date: '1404/05/17',
    description: 'غذا',
    type: 'expense',
    amount: 110000,
  },
  {
    id: 13,
    date: '1404/05/16',
    description: 'قسط سوم پروژه کاریار',
    type: 'income',
    amount: 3100000,
  },
];

function App() {
  const [data, setData] = useState(mockData);

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

  return <TransactionTable data={data} addTransaction={addTransaction} removeTransaction={removeTransaction} />;
}

export default App;
