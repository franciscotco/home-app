import { type ReactElement } from "react";

import Expenses from "./Expenses";
import ReduxProvider from "./redux/ReduxProvider";

const App = (): ReactElement => (
  <ReduxProvider>
    <Expenses />
  </ReduxProvider>
);

export default App;
