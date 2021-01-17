import axios from "axios";
import { Dispatch } from "redux";
import { GET_POSTS } from "./types";
import {
  clearGlobalNotifications,
  errorNotification,
  succesNotification,
} from "./notificationActions";

export const getPosts = () => async (dispatch: Dispatch<any>) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    dispatch({
      type: GET_POSTS,
      payload: response.data,
    });
    dispatch(succesNotification());
    dispatch(clearGlobalNotifications());
  } catch (e) {
    dispatch(errorNotification(e.message));
    dispatch(clearGlobalNotifications());
  }
};
