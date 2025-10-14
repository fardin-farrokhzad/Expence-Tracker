import styles from './TransactionTable.module.css';

// Converting numbers to Persian
function numberToPersian(number) {
  return number.toString().replace(/[0-9]/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
}

// Transaction Table Component
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
        {data.map(item => (
          <div className={styles.transaction} key={item.id}>
            {/* Date */}
            <div className={`${styles.transaction__item} ${styles.date}`}>
              <span>{numberToPersian(item.date)}</span>
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default TransactionTable;
