import React from "react";
import { ThemeProvider } from "styled-components";
import defaultTokens from "./tokens";
import _merge from "lodash.merge";

import { ThemeProps } from "./theme-types";

const Theme = ({ tokens, children }: ThemeProps) => {
  const theme = tokens ? _merge({}, defaultTokens, tokens) : defaultTokens;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { Theme };
