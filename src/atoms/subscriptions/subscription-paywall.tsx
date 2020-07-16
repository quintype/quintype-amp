import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  box-shadow: 0 -3px 10px 0 rgba(0, 0, 0, 0.31);
  padding: 40px;
  text-align: center;
  button {
    border-radius: 5px;
    background-color: ${(props) => props.theme.color.primaryColor};
    height: 100%;
  }
  p button {
    font-weight: ${(props) => props.theme.font.weight.bold};
    border: none;
    background-color: transparent;
    font-size: ${(props) => props.theme.font.size.s};
  }
`;

export const SubscribeMessage = styled.span`
  color: ${(props) => props.theme.color.white};
  padding: 10px;
  font: ${(props) => {
    const fontFamily = props.theme.font.family.primary;
    const fontWeight = props.theme.font.weight.bold;
    const fontSize = props.theme.font.size.xs;
    return `${fontWeight} ${fontSize} ${fontFamily}`;
  }};
`;

export const SubscriptionPaywall = () => {
  return (
    <StyledWrapper>
      <h2>Subscribe for unlimited access.</h2>
      <button subscriptions-action="subscribe">
        <SubscribeMessage>Subscribe</SubscribeMessage>
      </button>
      <p>
        Already a user? <button subscriptions-action="login">Log in</button>
      </p>
    </StyledWrapper>
  );
};
