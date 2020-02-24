import React from "react";
import { ThemeProvider } from "styled-components";
import defaultTokens from "./tokens";

import { ThemeProps } from "./theme-types";

const Theme = ({ tokens, children }: ThemeProps) => {
  const theme = { ...defaultTokens, ...tokens };
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { Theme };
