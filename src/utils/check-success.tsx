import { IResponse } from "../services/types/types";

export const checkSuccess = (res: IResponse) => {
  if (res && res.success) {
    return res;
  }
  return Promise.reject(res);
};
