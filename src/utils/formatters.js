// Convert numbers to Persian digits
export const numberToPersian = number => {
  return number?.toString().replace(/[0-9]/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]) || '';
};

// Convert dates to Persian digits and replace '-' with '/'
export const dateConvert = input => {
  return input?.toString().replace(/[0-9-]/g, d => (d === '-' ? '/' : '۰۱۲۳۴۵۶۷۸۹'[d])) || '';
};
