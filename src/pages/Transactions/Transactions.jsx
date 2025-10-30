import React, { useState } from 'react';
import styles from './Transactions.module.css';
import AddTransactionModal from './components/AddTransactionModal/AddTransactionModal';
import PlusIcon from '/src/assets/svg/outline/plus.svg?react';
import DangerCircleIcon from '/src/assets/svg/outline/danger-circle.svg?react';
import TransactionList from './components/TransactionList/TransactionList';

function TransactionTable({ data, addTransaction, removeTransaction }) {
  const [modalOpen, setModalOpen] = useState(false);

  function handleAddTransaction(transaction) {
    addTransaction(transaction);
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
