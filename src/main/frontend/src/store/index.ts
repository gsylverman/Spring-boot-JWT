import { rootReducer } from "./reducers/index";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootStore = ReturnType<typeof rootReducer>;
