import { createStore, combineReducers, applyMiddleware } from "redux";
import reducers from "./Reducers";

const allReducers = combineReducers({
  reducers,
});

const store = createStore(
  allReducers,
  // applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
