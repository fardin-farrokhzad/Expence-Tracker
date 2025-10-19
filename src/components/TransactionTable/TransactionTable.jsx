import { useState } from 'react';
import styles from './TransactionTable.module.css';
import AddTransactionModal from '../AddTransactionModal/AddTransactionModal';

// Import SVG files
import PlusIcon from '/src/assets/svg/outline/plus.svg?react';
import DangerCircleIcon from '/src/assets/svg/outline/danger-circle.svg?react';
import DeleteIcon from '/src/assets/svg/outline/delete.svg?react';

// Convert numbers to Persian
const numberToPersian = number => number?.toString().replace(/[0-9]/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]) || '';
const dateConvert = input => input?.toString().replace(/[0-9-]/g, d => (d === '-' ? '/' : '۰۱۲۳۴۵۶۷۸۹'[d])) || '';

// Transaction Table Component
const TransactionTable = ({ data, addTransaction, removeTransaction }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddTransaction = transaction => {
    addTransaction(transaction);
  };

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
        <>
          {/* Table Header */}
          <div className={`${styles.transactions__header} ${styles.desktop__only}`}>
            <span>تاریخ</span>
            <span>درآمد (تومان)</span>
            <span>هزینه (تومان)</span>
            <span>شرح</span>
          </div>

          {/* Transactions */}
          <div className={styles.transactions__list}>
            {data.map(item => (
              <div className={styles.transaction} key={item.id}>
                {/* Date */}
                <div className={`${styles.transaction__item} ${styles.date}`}>
                  <span>{dateConvert(item.date)}</span>
                </div>

                {/* Income */}
                <div className={styles.transaction__item}>
                  <span className={`${styles.income} ${item.type === 'income' && item.amount > 0 ? styles.hasValue : ''}`}>
                    {item.type === 'income' && item.amount > 0 ? `${numberToPersian(item.amount)}+` : ''}
                  </span>
                </div>

                {/* Expense */}
                <div className={styles.transaction__item}>
                  <span className={`${styles.expense} ${item.type === 'expense' && item.amount > 0 ? styles.hasValue : ''}`}>
                    {item.type === 'expense' && item.amount > 0 ? `${numberToPersian(item.amount)}-` : ''}
                  </span>
                </div>

                {/* Description */}
                <div className={`${styles.transaction__item} ${styles.description}`}>
                  <span>{item.description}</span>
                </div>

                {/* Delete button */}
                <div className={styles.transaction__item}>
                  <button className={styles.deleteButton} onClick={() => removeTransaction(item.id)}>
                    <DeleteIcon className={styles.delete} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <AddTransactionModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onSubmit={handleAddTransaction} />
    </section>
  );
};

export default TransactionTable;
