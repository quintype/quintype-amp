import React from "react";
import styled from "styled-components";
import { Bell } from "../icons";
import { withTheme } from "styled-components";
import { ButtonTypes } from "./types";
import { Spacer } from "../spacer";
import get from "lodash.get";

const StyledButton = styled.button`
  border-radius: 5px;
  background-color: ${(props) => props.theme.color.primaryColor};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SubscribeMessage = styled.span`
  color: ${(props) => props.theme.color.white};
  font: ${(props) => {
    const fontFamily = props.theme.font.family.primary;
    const fontWeight = props.theme.font.weight.bold;
    const fontSize = props.theme.font.size.s;
    return `${fontWeight} ${fontSize} ${fontFamily}`;
  }};
`;

export const WebengageSubscribeButtonBase = ({ theme, on, text }: ButtonTypes) => {
  const bellIconColor = get(theme, ["color", "white"], "currentColor");
  return (
    <StyledButton on={on} aria-label="bell icon">
      <Bell color={bellIconColor} />
      <Spacer align="horizontal" token="m" />
      <SubscribeMessage>{text || "Subscribe to instant updates"}</SubscribeMessage>
    </StyledButton>
  );
};

export const WebengageSubscribeButton = withTheme(WebengageSubscribeButtonBase);
