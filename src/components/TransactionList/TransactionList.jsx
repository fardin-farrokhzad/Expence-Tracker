import React from 'react';
import styles from './TransactionList.module.css';
import DeleteIcon from '../../assets/svg/outline/delete.svg?react';

// Convert numbers to Persian
function numberToPersian(number) {
  return number?.toString().replace(/[0-9]/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]) || '';
}

// Convert dates to Persian
function dateConvert(input) {
  return input?.toString().replace(/[0-9-]/g, d => (d === '-' ? '/' : '۰۱۲۳۴۵۶۷۸۹'[d])) || '';
}

// Transaction List Component
function TransactionList({ data, removeTransaction }) {
  return (
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
  );
}

export default TransactionList;
