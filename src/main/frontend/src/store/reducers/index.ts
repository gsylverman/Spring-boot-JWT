import { notifications } from "./notifications";
import { postsReducer as posts } from "./postsReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  posts,
  notifications,
});
