import React, { type ReactElement, type PropsWithChildren } from "react";

import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import store from "./redux.store";

const persistor = persistStore(store);

const ReduxProvider = ({
  children,
}: PropsWithChildren<unknown>): ReactElement => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>{children}</PersistGate>
  </Provider>
);

export default ReduxProvider;
