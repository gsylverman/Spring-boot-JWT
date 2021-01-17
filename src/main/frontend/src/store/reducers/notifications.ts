import { ERROR, SUCCES, CLEAR } from "../../components/utils/tools";

export const notifications = (state = {}, action: any) => {
  console.log(action);
  switch (action.type) {
    case ERROR:
      return {
        ...state,
        error: true,
        message: action.payload,
      };
    case SUCCES:
      return {
        ...state,
        succes: true,
      };
    case CLEAR:
      return {};
    default:
      return state;
  }
};
