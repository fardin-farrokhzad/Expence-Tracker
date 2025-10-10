// TransactionTable.jsx
import styles from './TransactionTable.module.css';

/*
    Transaction Table Component
 */
const TransactionTable = ({ data }) => {
  return (
    <section className={styles.transactions}>
      <h2 className={styles.transactions__title}>تراکنش‌ها</h2>

      {/* Table Header */}
      <div className={`${styles.transactions__header} ${styles.desktopOnly}`}>
        <span>تاریخ</span>
        <span>درآمد (تومان)</span>
        <span>هزینه (تومان)</span>
        <span>شرح</span>
      </div>

      {/* Transactions */}
      <div className={styles.transactions__list}>
        {data.map((item, index) => (
          <div className={styles.transaction} key={index}>
            {/* Date */}
            <div className={`${styles.transaction__item} ${styles.date}`}>
              <span>{item.date}</span>
            </div>

            {/* Income */}
            <div className={styles.transaction__item}>
              <span className={`${styles.income} ${item.income ? styles.hasValue : ''}`}>
                {item.income > 0 ? `${item.income.toLocaleString()}+` : ''}
              </span>
            </div>

            {/* Expense */}
            <div className={styles.transaction__item}>
              <span className={`${styles.expense} ${item.expense ? styles.hasValue : ''}`}>
                {item.expense > 0 ? `${item.expense.toLocaleString()}-` : ''}
              </span>
            </div>

            {/* Description*/}
            <div className={`${styles.transaction__item} ${styles.description}`}>
              <span>{item.description}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TransactionTable;
