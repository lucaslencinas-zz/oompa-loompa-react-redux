const cache = {
  set: (key, value) => {
    if (value instanceof Object) {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, value);
    }
    return Promise.resolve(value);
  },
  get: (key) => {
    const value = localStorage.getItem(key);
    return Promise.resolve(value);
  },
  del: (key) => Promise.resolve(localStorage.removeItem(key))
};

export default cache;
