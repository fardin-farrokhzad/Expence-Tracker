import React, { useState, useEffect } from 'react';
import styles from './Transactions.module.css';
import AddTransactionModal from './components/AddTransactionModal/AddTransactionModal';
import PlusIcon from '/src/assets/svg/outline/plus.svg?react';
import DangerCircleIcon from '/src/assets/svg/outline/danger-circle.svg?react';
import TransactionList from './components/TransactionList/TransactionList';

function TransactionTable() {
  const [modalOpen, setModalOpen] = useState(false);

  function handleAddTransaction(transaction) {
    addTransaction(transaction);
  }
  const [data, setData] = useState(localStorage.getItem('expenseTrackerData') ? JSON.parse(localStorage.getItem('expenseTrackerData')) : []);

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
    <section className={styles.transactions}>
      {/* Title + Add Button */}
      <div className={styles.title__wrapper}>
        <h2 className={styles.transactions__title}>تراکنش‌ها</h2>
        <button className={styles.transaction__button} onClick={() => setModalOpen(true)}>
          <span>افزودن تراکنش</span>
          <PlusIcon className={styles.plus} />
        </button>
      </div>

      {/* No Data */}
      {data.length === 0 ? (
        <div className={styles.no__data}>
          <DangerCircleIcon className={styles.no__data__icon} />
          <span>شما هنوز تراکنشی وارد نکرده‌اید</span>
        </div>
      ) : (
        <TransactionList data={data} removeTransaction={removeTransaction} />
      )}

      <AddTransactionModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onSubmit={handleAddTransaction} />
    </section>
  );
}

export default TransactionTable;
