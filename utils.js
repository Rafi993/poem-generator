export const random = (min, max) => Math.floor(Math.random() * max) + min;

export const randomElement = array =>
  array[Math.floor(Math.random() * array.length)];

export const capitalize = string =>
  string.charAt(0).toUpperCase() + string.slice(1);
