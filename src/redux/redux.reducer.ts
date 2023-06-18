import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import expenses, { EXPENSES_SLICE_NAME } from "./expenses";

const persistConfig = {
  key: "redux",
  storage,
  whitelist: [EXPENSES_SLICE_NAME],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    expenses,
  })
);

export default persistedReducer;
