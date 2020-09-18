export const regExps: { [key: string]: RegExp } = {
  email: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
  phoneNumber: /^0\d{6,13}$/,
};
