import React, { type ReactElement, type PropsWithChildren } from "react";

import { ThemeProvider } from "styled-components";

import GlobalStyle from "./GlobalStyle";
import { THEME } from "./style.theme";

const StyleProvider = ({
  children,
}: PropsWithChildren<unknown>): ReactElement => (
  <ThemeProvider theme={THEME}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default StyleProvider;
