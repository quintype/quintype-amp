import React from "react";
import { SpacerProps, SpaceDirection } from "./types";
import styled from "styled-components";

const StyledSpacer = styled.div<SpacerProps>`
  :before {
    content: "";
    display: block;
    padding: ${({ token, align, theme }) => makeSpace(theme.spacing[token], align)};
  }
`;

const makeSpace = (token: string, align?: SpaceDirection) => {
  switch (align) {
    case "vertical":
      return `${token} 0`;
    case "horizontal":
      return `0 0 0 ${token}`;
    default:
      return `${token} 0`;
  }
};

const Spacer = ({ token, align }: SpacerProps) => {
  return <StyledSpacer token={token} align={align} />;
};

export { Spacer, makeSpace };
