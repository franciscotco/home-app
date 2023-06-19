import { type ReactElement } from "react";

import Expenses from "./Expenses";
import ReduxProvider from "./redux/ReduxProvider";
import StyleProvider from "./style/StyleProvider";

const App = (): ReactElement => (
  <ReduxProvider>
    <StyleProvider>
      <Expenses />
    </StyleProvider>
  </ReduxProvider>
);

export default App;
