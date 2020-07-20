import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  border-radius: 3px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
  padding: 40px;
  text-align: left;
  background-color: ${(props) => props.theme.color.white};
  button {
    border-radius: 5px;
    background-color: ${(props) => props.theme.color.primaryColor};
    height: 100%;
    border: none;
    color: ${(props) => props.theme.color.white};
    padding: 10px;
    cursor: pointer;
    font: ${(props) => {
      const fontFamily = props.theme.font.family.primary;
      const fontWeight = props.theme.font.weight.bold;
      const fontSize = props.theme.font.size.xs;
      return `${fontWeight} ${fontSize} ${fontFamily}`;
    }};
  }
  p button {
    border: none;
    background-color: transparent;
  }
  p button span {
    font-weight: ${(props) => props.theme.font.weight.bold};
    font-size: ${(props) => props.theme.font.size.s};
    color: ${(props) => props.theme.color.black};
    cursor: pointer;
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
      <h2>Get Unlimited Stories</h2>
      <button subscriptions-action="subscribe">
        <SubscribeMessage>Subscribe</SubscribeMessage>
      </button>
      <p>
        Already a user?
        <button subscriptions-action="login" subscriptions-display="NOT data.isLoggedIn">
          <span> Log in</span>
        </button>
      </p>
    </StyledWrapper>
  );
};
