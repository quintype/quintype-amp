import React from "react";
import get from "lodash.get";
import { PaywallProps } from "./types";
import { Helmet } from "react-helmet";
// The user is a subscriber/non-subscriber and is logged/not logged into their account. He is Granted. Subscribe button depends whether he is  asubscriber or not. And login button too.
export const SubscriberAccessPaywall = ({ config, services, score, fallbackEntitlement }: PaywallProps) => {
  const granted = get(config, ["opts", "featureConfig", "subscriptions", "fallbackEntitlement", "granted"]);
  const grantReason = get(config, ["opts", "featureConfig", "subscriptions", "fallbackEntitlement", "grantReason"]);
  // const isOnMetering = grantReason === "METERING";
  // const subscriptions = get(config, ["opts", "featureConfig", "subscriptions"], null);
  // if (!subscriptions || !subscriptions.length) return null;
  const isLoggedIn = get(
    config,
    ["opts", "featureConfig", "subscriptions", "fallbackEntitlement", "data", "isLoggedIn"],
    false
  );
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
      {isLoggedIn === true && granted === false && (
        <section
          className="StyledWrapper"
          // subscriptions-display="NOT granted"
          dangerouslySetInnerHTML={{
            __html: `
      <h2 class="StyledText">
        Get unlimited access
      </h2>
      <div class="StyledButton">
        <button subscriptions-action="subscribe" >
          <span class="SubscribeMessage">Subscribe</span>
        </button>
      </div>`
          }}
        />
      )}
      {isLoggedIn === false && granted === false && (
        <section
          className="StyledWrapper"
          // subscriptions-display="NOT granted"
          dangerouslySetInnerHTML={{
            __html: `
      <h2 class="StyledText" >
        Get unlimited access
      </h2>
      <div class="StyledButton">
        <button subscriptions-action="subscribe" >
          <span class="SubscribeMessage">Subscribe</span>
        </button>
      </div>
      <div class="StyledLine">
        <p>Already a user ?</p>
        <button subscriptions-action="login" subscriptions-display="NOT data.isLoggedIn">
          <span> Log in</span>
        </button>
      </div>`
          }}
        />
      )}
      {isLoggedIn === false && granted === true && grantReason === "SUBSCRIBER" && (
        <section
          className="StyledWrapper"
          // subscriptions-display="NOT granted"
          dangerouslySetInnerHTML={{
            __html: `
      <h2 class="StyledText">
        Just login to continue reading
      </h2>
      <div class="StyledLine">
        <p>Already a user ?</p>
        <button subscriptions-action="login" subscriptions-display="NOT data.isLoggedIn">
          <span> Log in</span>
        </button>
      </div>`
          }}
        />
      )}
    </>
  );
};
// The user has read 4 out of 5 free articles. He is granted and he is on metering.
export const MeteredPaywall = ({ config, services, score, fallbackEntitlement }: PaywallProps) => {
  const grantReason = get(config, ["opts", "featureConfig", "subscriptions", "fallbackEntitlement", "grantReason"]);
  // const isOnMetering = grantReason === "METERING";
  // const subscriptions = get(config, ["opts", "featureConfig", "subscriptions"], null);
  // if (!subscriptions || !subscriptions.length) return null;
  const granted = get(config, ["opts", "featureConfig", "subscriptions", "fallbackEntitlement", "granted"]);
  const meterRender = get(config, ["opts", "render", "subscriptionRender", "meterRender"], null);
  if (meterRender) return meterRender({ config, services, score, fallbackEntitlement });
  return (
    <>
      <Helmet>
        <style type="text/css">
          {`
      .StyledText {
        padding: 24px;
        font-weight: 800;
        margin: 0;
      }
      `}
        </style>
      </Helmet>
      {granted === true && grantReason === "METERING" && (
        <template
          className="amp-subscriptions-dialog"
          type="amp-mustache"
          subscriptions-dialog={true}
          // subscriptions-display={isNotSubscriber}
          dangerouslySetInnerHTML={{
            __html: `
            <p class="StyledText">You are left with 4 free articles.</p>
         `
          }}
        />
      )}
    </>
  );
};

// The user does not have access because they have read 5 out of 5 free articles. He is not granted.
export const MeteredExhaustedPaywall = ({ config, services, score, fallbackEntitlement }: PaywallProps) => {
  const grantReason = get(config, ["opts", "featureConfig", "subscriptions", "fallbackEntitlement", "grantReason"]);
  const granted = get(config, ["opts", "featureConfig", "subscriptions", "fallbackEntitlement", "granted"]);
  // const isOnMetering = grantReason === "METERING";
  // const subscriptions = get(config, ["opts", "featureConfig", "subscriptions"], null);
  // if (!subscriptions || !subscriptions.length) return null;
  const isLast = get(
    config,
    ["opts", "featureConfig", "subscriptions", "fallbackEntitlement", "data", "isLast"],
    false
  );
  const LastStoryMeterRender = get(config, ["opts", "render", "subscriptionRender", "LastStoryMeterRender"], null);
  if (LastStoryMeterRender) return LastStoryMeterRender({ config, services, score, fallbackEntitlement });
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
        padding: 24px;
        font-weight: 800;
        margin: 0;
      }
      `}</style>
        <style type="text/css">
          {`
      .MeteredStyledLine {
        margin: 0 20px;
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
      {granted === true && grantReason === "METERING" && isLast === true && (
        <template
          className="amp-subscriptions-dialog"
          type="amp-mustache"
          subscriptions-dialog={true}
          // subscriptions-display={isNotSubscriber}
          dangerouslySetInnerHTML={{
            __html: `
          <div class="StyledMeter">
            <p class="StyledText">You have exceeded free stories limit for this month</p>
            <div>
              <div class="StyledButton">
                <button subscriptions-action="subscribe">
                  <span class="SubscribeMessage">Subscribe</span>
                </button>
              </div>
              <div class="MeteredStyledLine">
                <p>Already a user ?</p>
                <button subscriptions-action="login" subscriptions-display="NOT data.isLoggedIn">
                  <span> Log in</span>
                </button>
              </div>
            </div>
          </div>`
          }}
        />
      )}
    </>
  );
};
