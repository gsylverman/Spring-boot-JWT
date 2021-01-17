import { toast } from "react-toastify";
// notifications
export const SUCCES = "succes";
export const ERROR = "error";
export const CLEAR = "clear";

export const showToast = (type: string, message: string) => {
  switch (type) {
    case ERROR:
      toast.error(message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      break;
    case SUCCES:
      toast.success(message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      break;
    default:
      return false;
  }
};
