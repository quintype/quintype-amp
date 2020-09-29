import React from "react";
import get from "lodash.get";
import { PaywallProps } from "../types";
import { Helmet } from "react-helmet";
// The user is a subscriber/non-subscriber and is logged/not logged into their account. He is Granted. Subscribe button depends whether he is  asubscriber or not. And login button too.
export const SubscriberAccessPaywall = ({ config, services, score, fallbackEntitlement }: PaywallProps) => {
  const paywallRender = get(config, ["opts", "render", "subscriptionRender", "paywallRender"], null);
  if (paywallRender) return paywallRender({ config, services, score, fallbackEntitlement });
  return (
    <>
      <Helmet>
        <style type="text/css">{`
        .StyledWrapper {
          border-radius: 3px;
          box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
          padding: 40px;
          text-align: left;
          background-color: ${(props) => props.theme.color.white};
        }
        `}</style>
        <style type="text/css">{`
        .StyledText {
          font-size: ${(props) => props.theme.font.size.l};
          color: ${(props) => props.theme.color.black};
          font-weight: ${(props) => props.theme.font.weight.bold};
          padding: 26px 0 26px;
        }
        `}</style>
        <style type="text/css">{`
        .StyledContent {
          font-size: 16px;
          line-height: 1.31;
          color: #242424;
          margin-top: 0;
        }
        `}</style>
        <style type="text/css">{`
        .StyledButton {
          align-self: center;
        }
        `}</style>
        <style type="text/css">{`
        .StyledButton button {
          border-radius: 5px;
          background-color: #e84646;
          background-color: ${(props) => props.theme.color.primaryColor};
          border: none;
          color: ${(props) => props.theme.color.white};
          padding: 10px;
          margin: 10px 0 10px;
          cursor: pointer;
          font: ${(props) => {
            const fontFamily = props.theme.font.family.primary;
            const fontWeight = props.theme.font.weight.bold;
            const fontSize = props.theme.font.size.xs;
            return `${fontWeight} ${fontSize} ${fontFamily}`;
          }};
        }
        `}</style>
        <style type="text/css">{`
        .StyledLine {
          display: flex;
        }
        `}</style>
        <style type="text/css">{`
        .StyledLine  p {
          font-size: ${(props) => props.theme.font.size.xs};
          color: ${(props) => props.theme.color.black};
          font-weight: ${(props) => props.theme.font.weight.normal};
        }
        `}</style>
        <style type="text/css">{`
        .StyledLine button {
            border: none;
            background-color: transparent;
          }
           `}</style>
        <style type="text/css">{`
          .StyledLine span {
            font-size: 16px;
            font-weight: 600;
            color: #e84646;
            font-weight: ${(props) => props.theme.font.weight.bold};
            font-size: ${(props) => props.theme.font.size.s};
            color: ${(props) => props.theme.color.black};
            cursor: pointer;
          }
           `}</style>
        <style type="text/css">{`
        .SubscribeMessage {
          color: ${(props) => props.theme.color.white};
          padding: 10px;
          font-family: ${(props) => props.theme.font.family.primary};
          font-weight: ${(props) => props.theme.font.weight.bold};
          font-size: ${(props) => props.theme.font.size.xs};
        }
      `}</style>
      </Helmet>
      <div
        dangerouslySetInnerHTML={{
          __html: `<section class="StyledWrapper" subscriptions-actions subscriptions-display="NOT granted">
        <h2 class="StyledText" subscriptions-actions subscriptions-display="NOT granted">
          Get unlimited access
        </h2>
        <p class="StyledContent">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</p>
        <div class="StyledButton" subscriptions-actions subscriptions-display="NOT granted">
          <button subscriptions-action="subscribe" subscriptions-display="NOT granted">
            <span class="SubscribeMessage">Subscribe</span>
          </button>
        </div>
        <div class="StyledLine" subscriptions-actions subscriptions-display="NOT granted AND NOT data.isLoggedIn">
          <p>Already a user ?</p>
          <button subscriptions-action="login" subscriptions-display="NOT granted AND NOT data.isLoggedIn">
            <span> Log in</span>
          </button>
        </div>
    </section>`
        }}
      />
    </>
  );
};
// The user has read 4 out of 5 free articles. He is granted and he is on metering.
export const MeteredPaywall = ({ config, services, score, fallbackEntitlement }: PaywallProps) => {
  const meterRender = get(config, ["opts", "render", "subscriptionRender", "meterRender"], null);
  if (meterRender) return meterRender({ config, services, score, fallbackEntitlement });
  return (
    <>
      <Helmet>
        <style type="text/css">{`
      .StyledMeter {
        display: flex;
        align-items: center;
        padding: 24px;
      }
      `}</style>
        <style type="text/css">{`
      .StyledText {
        padding: 26px;
        font-weight: 800;
        margin: 0;
      }
      `}</style>
        <style type="text/css">
          {`
      .MeteredStyledLine {
       text-align: center;
        }`}
        </style>
        <style type="text/css">{`
        .MeteredStyledLine p {
          font-size: 12px;
          font-weight: normal;
          margin: 0;
        }
        `}</style>
        <style type="text/css">{`
        .MeteredStyledLine button {
          border: none;
          background-color: transparent;
        }
        `}</style>
        <style type="text/css">{`
        .MeteredStyledLine span {
          font-weight: bold;
          font-size: 14px;
          cursor: pointer;
        }
      `}</style>
        <style type="text/css">{`
      .SubscribeMessage {
        color: #fff;
        padding: 10px;
        font-size: 14px;
        font-weight: bold;
      }
      `}</style>
        <style type="text/css">{`
        .StyledButton {
          align-self: center;
        }
      `}</style>
        <style type="text/css">
          {`
        .StyledButton button {
          border-radius: 5px;
          background-color: #f00;
          border: none;
          color: #fff;
          padding: 10px;
          margin: 10px;
          cursor: pointer;
          font-size: 14px;
          font-weight: bold;
        }`}
        </style>
      </Helmet>
      <div
        dangerouslySetInnerHTML={{
          __html: `<template class="amp-subscriptions-dialog" type="amp-mustache" subscriptions-dialog subscriptions-display="granted AND grantReason = 'METERING'">
          {{#data.numberRemaining}}
            <p class="StyledText">You are left with {{data.numberRemaining}} free articles.</p>
          {{/data.numberRemaining}}
          {{#data.isLast}}
            <div class="StyledMeter">
              <p class="StyledText">You have exceeded free stories limit for this month</p>
              <div>
                <div class="StyledButton" subscriptions-actions subscriptions-display="granted">
                  <button subscriptions-action="subscribe" subscriptions-display="granted">
                    <span class="SubscribeMessage">Subscribe</span>
                  </button>
                </div>
                {{^data.isLoggedIn}}
                <div class="MeteredStyledLine" subscriptions-actions subscriptions-display="granted">
                  <p>Already a user ?</p>
                  <button subscriptions-action="login" subscriptions-display="granted">
                    <span> Log in</span>
                  </button>
                </div>
                {{/data.isLoggedIn}}
              </div>
            </div>
            {{/data.isLast}}
      </template>`
        }}
      />
    </>
  );
};
