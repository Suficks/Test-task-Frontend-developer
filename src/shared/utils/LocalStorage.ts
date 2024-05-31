export const getItemFromLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};

export const setItemToLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
};
