// AddTransactionModal.jsx
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './AddTransactionModal.module.css';

const AddTransactionModal = ({ isOpen, onClose, onSubmit }) => {
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');
  const [description, setDescription] = useState('');

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = e => {
    e.preventDefault();
    if (!date || !amount || !description) return;

    onSubmit({
      date,
      amount: Number(amount),
      type,
      description,
    });

    setDate('');
    setAmount('');
    setType('income');
    setDescription('');
    onClose();
  };

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <div className={styles.header}>
          <h4>افزودن تراکنش</h4>
          <button className={styles.close__button} onClick={onClose}>
            <div className={styles.close}></div>
          </button>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Date */}
          <label className={styles.label}>
            تاریخ
            <div className={`${styles.input__wrapper} ${styles.date}`}>
              <input type='text' value={date} onChange={e => setDate(e.target.value)} className={styles.input} />
            </div>
          </label>

          {/* Amount */}
          <label className={styles.label}>
            مبلغ (تومان)
            <input type='number' value={amount} onChange={e => setAmount(e.target.value)} className={styles.input} />
          </label>

          {/* Type */}
          <label className={styles.label}>
            نوع تراکنش
            <div className={styles.radio__group}>
              <label>
                <input type='radio' value='income' checked={type === 'income'} onChange={() => setType('income')} /> درآمد
              </label>
              <label>
                <input type='radio' value='expense' checked={type === 'expense'} onChange={() => setType('expense')} /> هزینه
              </label>
            </div>
          </label>

          {/* Description */}
          <label className={styles.label}>
            شرح
            <input type='text' value={description} onChange={e => setDescription(e.target.value)} className={styles.input} />
          </label>

          {/* Footer Buttons */}
          <div className={styles.footer}>
            <button type='button' className={styles.cancel__button} onClick={onClose}>
              انصراف
            </button>
            <button type='submit' className={styles.submit__button}>
              ثبت
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default AddTransactionModal;
