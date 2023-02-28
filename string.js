export const stringLength = (string) => string.length;

export const checkStringLength = (string) =>
  string.length > 1 && string.length < 11 ? true : false;

export const reverseString = (string) => string.split('').reverse().join('');

export const capitalize = (string) => string[0].toUpperCase() + string.slice(1);

export default { stringLength, checkStringLength, reverseString, capitalize };
