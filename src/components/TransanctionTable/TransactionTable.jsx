// TransactionTable.jsx
import styles from './TransactionTable.module.css';

// Converting numbers to persian
function numberToPersian(number) {
  const persian = { 0: '۰', 1: '۱', 2: '۲', 3: '۳', 4: '۴', 5: '۵', 6: '۶', 7: '۷', 8: '۸', 9: '۹' };
  number = number.toString().split('');
  let persianNumber = '';
  for (let i = 0; i < number.length; i++) {
    number[i] = persian[number[i]];
  }
  for (let i = 0; i < number.length; i++) {
    persianNumber += number[i];
  }
  return persianNumber;
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
        {data.map((item, index) => (
          <div className={styles.transaction} key={index}>
            {/* Date */}
            <div className={`${styles.transaction__item} ${styles.date}`}>
              <span>{item.date}</span>
            </div>

            {/* Income */}
            <div className={styles.transaction__item}>
              <span className={`${styles.income} ${item.income ? styles.hasValue : ''}`}>
                {item.income > 0 ? `${numberToPersian(item.income)}+` : ''}
              </span>
            </div>

            {/* Expense */}
            <div className={styles.transaction__item}>
              <span className={`${styles.expense} ${item.expense ? styles.hasValue : ''}`}>
                {item.expense > 0 ? `${numberToPersian(item.expense)}-` : ''}
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
