export const onlyNumbers = (event: KeyboardEvent): boolean => {
  const charCode = event.which ? event.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;
};

export const isEmptyInputValue = (value: any): boolean => {
  return value === null || value.length === 0;
};
