import { ERROR, SUCCES, CLEAR } from "../../components/utils/tools";

export const errorNotification = (message: string) => {
  return {
    type: ERROR,
    payload: message,
  };
};

export const succesNotification = () => {
  return {
    type: SUCCES,
  };
};

export const clearGlobalNotifications = () => {
  return {
    type: CLEAR,
  };
};
