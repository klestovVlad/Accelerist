export const validateInput = (value: string) => {
  if (!value) {
    return 'Required';
  }
  if (value.length < 6) {
    return 'Minimum password length is 6 symbols';
  }
  return undefined;
};

const emailRegex = /\S+@\S+\.\S+/;

export const validateEmail = (value: string) => {
  if (!emailRegex.test(value)) {
    return 'Incorrect email format';
  }
  return undefined;
};
