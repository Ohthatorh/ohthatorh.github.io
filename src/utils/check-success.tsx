export const checkSuccess = (res: { success: boolean }) => {
  if (res && res.success) {
    return res;
  }
  return Promise.reject(res);
};
