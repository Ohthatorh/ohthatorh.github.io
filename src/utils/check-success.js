export const checkSuccess = (res) => {
  if (res && res.success) {
    return res;
  }
  return Promise.reject(res);
};
