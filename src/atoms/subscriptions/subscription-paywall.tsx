import React, { Fragment } from "react";
import styled from "styled-components";
import get from "lodash.get";
import { PaywallProps } from "./types";

const StyledWrapper = styled.div`
  border-radius: 3px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
  padding: 40px;
  text-align: left;
  background-color: ${(props) => props.theme.color.white};
`;
const StyledButton = styled.div`
  align-self: center;
  button {
    border-radius: 5px;
    background-color: ${(props) => props.theme.color.primaryColor};
    border: none;
    color: ${(props) => props.theme.color.white};
    padding: 10px;
    margin: 10px;
    cursor: pointer;
    font: ${(props) => {
      const fontFamily = props.theme.font.family.primary;
      const fontWeight = props.theme.font.weight.bold;
      const fontSize = props.theme.font.size.xs;
      return `${fontWeight} ${fontSize} ${fontFamily}`;
    }};
  }
`;
const StyledLine = styled.p`
  font-size: ${(props) => props.theme.font.size.xs};
  color: ${(props) => props.theme.color.black};
  font-weight: ${(props) => props.theme.font.weight.normal};
  button {
    border: none;
    background-color: transparent;
  }
  span {
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
const StyledMetered = styled.div`
  display: flex;
  justify-content: space-around;
  border-radius: 3px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
  bottom: 33px;
  position: fixed;
  background-color: ${(props) => props.theme.color.white};
  z-index: 101;
  padding: 24px;
  margin: 0 auto;
  width: 50%;
  font-weight: ${(props) => props.theme.font.weight.bold};
  font-size: ${(props) => props.theme.font.size.s};
  color: ${(props) => props.theme.color.primaryColor};
`;
const StyledCloseButton = styled.button`
  cursor: pointer;
  width: 2rem;
  color: ${(props) => props.theme.color.black};
  border: none;
  background-color: transparent;
  font-weight: ${(props) => props.theme.font.weight.bold};
`;

export const SubscriberAccessPaywall = ({ config, story }: PaywallProps) => {
  const isLoggedIn = get(config, ["opts", "subscriptions", "fallbackEntitlement", "data", "isLoggedIn"]);
  const isAccessible = story && story.access === "subscription";
  const grantReason = get(config, ["opts", "subscriptions", "fallbackEntitlement", "grantReason"]);
  const isSubscriber = grantReason === "SUBSCRIBER";
  return (
    <Fragment>
      {isAccessible && isSubscriber && isLoggedIn === false && (
        <StyledWrapper>
          <h2>Just login to continue reading</h2>
          <StyledLine>
            Already a user ?
            <button subscription-action="login">
              <span> Log in</span>
            </button>
          </StyledLine>
        </StyledWrapper>
      )}
      {!isAccessible && isLoggedIn === false && (
        <StyledWrapper>
          <h2>Get unlimited access</h2>
          <StyledButton>
            <button subscription-action="subscribe">
              <SubscribeMessage>Subscribe</SubscribeMessage>
            </button>
          </StyledButton>
          <StyledLine>
            Already a user ?
            <button subscription-action="login">
              <span> Log in</span>
            </button>
          </StyledLine>
        </StyledWrapper>
      )}
      {!isAccessible && isLoggedIn === true && (
        <StyledWrapper>
          <h2>Get unlimited access</h2>
          <StyledButton>
            <button subscription-action="subscribe">
              <SubscribeMessage>Subscribe</SubscribeMessage>
            </button>
          </StyledButton>
        </StyledWrapper>
      )}
    </Fragment>
  );
};

export const MeteredPaywall = ({ config }: PaywallProps) => {
  const grantReason = get(config, ["opts", "subscriptions", "fallbackEntitlement", "grantReason"]);
  const isOnMetering = grantReason === "METERING";
  return (
    <Fragment>
      {isOnMetering && (
        <StyledMetered id="meteredpaywall">
          <p>You are left with 2 free articles</p>
          <StyledCloseButton role="button" tabIndex={0} on="tap:meteredpaywall.close" aria-label="close">
            X
          </StyledCloseButton>
        </StyledMetered>
      )}
    </Fragment>
  );
};

export const MeteredExhaustedPaywall = ({ config }: PaywallProps) => {
  const isLoggedIn = get(config, ["opts", "subscriptions", "fallbackEntitlement", "data", "isLoggedIn"], false);
  const grantReason = get(config, ["opts", "subscriptions", "fallbackEntitlement", "grantReason"]);
  const isOnMetering = grantReason === "METERING";
  return (
    <Fragment>
      {isOnMetering && (
        <StyledMetered id="meteredexhaustedpaywall">
          <p>You have exceeded free stories limit for this month</p>
          <StyledButton>
            <button subscription-action="subscribe">
              <SubscribeMessage>Subscribe</SubscribeMessage>
            </button>
          </StyledButton>
          {isLoggedIn === false && (
            <StyledLine>
              Already a user ?
              <button subscription-action="login">
                <span> Log in</span>
              </button>
            </StyledLine>
          )}
          <StyledCloseButton role="button" tabIndex={0} on="tap:meteredexhaustedpaywall.close" aria-label="close">
            X
          </StyledCloseButton>
        </StyledMetered>
      )}
    </Fragment>
  );
};
