const KEY_STORAGE = 'AUTH';

const setUserAuth = (data:any) => {
  localStorage.setItem(KEY_STORAGE, JSON.stringify(data));
};

const getUserAuth = () => {
  const item = localStorage.getItem(KEY_STORAGE);
  if (item && item !== '') {
    return JSON.parse(item);
  }
  return null;
};

const removeUserAuth = () => {
  localStorage.removeItem(KEY_STORAGE);
};

export { setUserAuth, getUserAuth, removeUserAuth };
