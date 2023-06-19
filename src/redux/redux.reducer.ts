import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import expenses, { EXPENSES_SLICE_NAME } from "./expenses";

const PERSIST_CONFIG = {
  key: "redux",
  storage,
  whitelist: [EXPENSES_SLICE_NAME],
};

const persistedReducer = persistReducer(
  PERSIST_CONFIG,
  combineReducers({
    expenses,
  })
);

export default persistedReducer;
