import React from 'react';
import styles from './AddTransactionModal.module.css';

function AddTransactionModal({ isOpen, onClose, onSubmit }) {
  // Handle form submission and validation
  function handleFormAction(formData) {
    const date = formData.get('date');
    const amount = formData.get('amount');
    const type = formData.get('type');
    const description = formData.get('description')?.trim();

    // Integrity checks
    if (!date) {
      alert('تاریخ را وارد کنید.');
      return;
    }
    const selectedDate = new Date(date);
    if (isNaN(selectedDate.getTime())) {
      alert('تاریخ نامعتبر است.');
      return;
    }

    if (!amount) {
      alert('مبلغ را وارد کنید.');
      return;
    }
    const numericAmount = Number(amount);
    if (numericAmount <= 0) {
      alert('مبلغ تراکنش باید عددی مثبت باشد.');
      return;
    }

    if (!['income', 'expense'].includes(type)) {
      alert('نوع تراکنش نامعتبر است.');
      return;
    }

    if (!description) {
      alert('شرح تراکنش نمی‌تواند خالی باشد.');
      return;
    }

    if (description.length > 50) {
      alert('شرح نباید بیشتر از 50 کاراکتر باشد.');
      return;
    }

    // Submit clean data
    onSubmit({
      date,
      amount: numericAmount,
      type,
      description,
    });

    // Close modal
    onClose();
  }

  return isOpen ? (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <div className={styles.header}>
          <h4>افزودن تراکنش</h4>
          <button className={styles.close__button} onClick={onClose}>
            <div className={styles.close}></div>
          </button>
        </div>

        <form className={styles.form} action={handleFormAction}>
          {/* Date */}
          <label className={styles.label}>
            تاریخ
            <div className={`${styles.input__wrapper} ${styles.date}`}>
              <input type='date' name='date' className={styles.input} required />
            </div>
          </label>

          {/* Amount */}
          <label className={styles.label}>
            مبلغ (تومان)
            <input type='number' name='amount' className={styles.input} required />
          </label>

          {/* Type */}
          <label className={styles.label}>
            نوع تراکنش
            <div className={styles.radio__group}>
              <label>
                <input type='radio' name='type' value='income' defaultChecked /> درآمد
              </label>
              <label>
                <input type='radio' name='type' value='expense' /> هزینه
              </label>
            </div>
          </label>

          {/* Description */}
          <label className={styles.label}>
            شرح
            <input type='text' name='description' className={styles.input} required />
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
    </div>
  ) : null;
}

export default AddTransactionModal;
