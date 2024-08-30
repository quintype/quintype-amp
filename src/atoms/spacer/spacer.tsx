import React from "react";
import { SpacerProps, SpaceDirection } from "./types";
import styled from "styled-components";

const StyledSpacerVertical = styled.div<SpacerProps>`
  :before {
    content: "";
    display: block;
    padding: ${({ token, align, theme }) => makeSpace(theme.spacing[token], align)};
  }
`;
const StyledSpacerHorizontal = styled.span<SpacerProps>`
  :before {
    content: "";
    display: inline-block;
    padding: ${({ token, align, theme }) => makeSpace(theme.spacing[token], align)};
  }
`;

const makeSpace = (token: string, align?: SpaceDirection) => {
  switch (align) {
    case "vertical":
      return `0 0 ${token} 0`;
    case "horizontal":
      return `0 0 0 ${token}`;
    default:
      return `0 0 ${token} 0`;
  }
};

const Spacer = ({ token, align }: SpacerProps) =>
  align === "horizontal" ? (
    <StyledSpacerHorizontal data-test-id="styled-space-horizontal" token={token} align={align} />
  ) : (
    <StyledSpacerVertical data-test-id="styled-space-vertical" token={token} align={align} />
  );

export { Spacer, makeSpace };
