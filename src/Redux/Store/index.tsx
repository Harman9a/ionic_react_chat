import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Reducer } from "../Reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = composeWithDevTools({});

export const store = createStore(
  Reducer,
  composeEnhancers(applyMiddleware(thunk))
);
