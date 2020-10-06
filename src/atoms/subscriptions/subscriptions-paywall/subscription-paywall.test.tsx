import React from "react";
import { shallow } from "enzyme";
import { Subscription } from "../subscription";
import {
  SubscriberAccessPaywall, MeteredPaywall
} from "./subscription-paywall";
import { config } from "../../../__fixtures__/config.fixture";

const servicesObject = [{
  authorizationUrl: ({ story }) =>
    `http://localhost:3000/api/access/v1/stories/${story["story-content-id"]}/amp-access?key=1MMmdsHimbytzjKXYGcv8Xwj&accesstype_integration_id=14&readerId=READER_ID`,
  pingbackUrl: ({ story }) =>
    `http://localhost:3000/api/access/v1/stories/${story["story-content-id"]}/amp-pingback?key=1MMmdsHimbytzjKXYGcv8Xwj&accesstype_integration_id=14&readerId=READER_ID`,
  actions: { login: "https://www.google.com", subscribe: "https://www.facebook.com" }
}];

describe("Subscriptions", () => {
  it("should render subscriptions", () => {
    const wrapper = shallow(<Subscription services={servicesObject} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render Subscriber Access Paywall with Login button and subscribe buttons", () => {
    const configObject = {
      featureConfig: {
        subscriptions: {
          services: { servicesObject },
          score: { supportsViewer: 10, isReadyToPay: 9 },
          fallbackEntitlement: {
            source: "fallback",
            granted: false,
            grantReason: "SUBSCRIBER",
            data: { numberRemaining: 4, isLast: false, isLoggedIn: false }
          }
        }
      }
    };
    const wrapper = shallow(<SubscriberAccessPaywall config={configObject} />);
    expect(wrapper.find("div").html()).toEqual(
      `<div><section class="StyledWrapper" subscriptions-actions subscriptions-display="NOT granted">
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
    </section></div>`
    );
  });
  it("should render Subscriber Access Paywall with subscribe button", () => {
    const configObject = {
      featureConfig: {
        subscriptions: {
          services: {
            authorizationUrl: ({ story }) =>
              `http://localhost:3000/api/access/v1/stories/${story["story-content-id"]}/amp-access?key=Fxugwc1mVDyJZ2dHB58bShso&accesstype_integration_id=10&readerId=READER_ID`,
            pingbackUrl: ({ story }) =>
              `http://localhost:3000/api/access/v1/stories/${story["story-content-id"]}/amp-access?key=Fxugwc1mVDyJZ2dHB58bShso&accesstype_integration_id=10&readerId=READER_ID`,
            actions: { login: "https://www.google.com", subscribe: "https://www.facebook.com" }
          },
          score: { supportsViewer: 10, isReadyToPay: 9 },
          fallbackEntitlement: {
            source: "fallback",
            granted: false,
            grantReason: "SUBSCRIBER",
            data: { numberRemaining: 4, isLast: false, isLoggedIn: true }
          }
        }
      }
    };
    const wrapper = shallow(<SubscriberAccessPaywall config={configObject} />);
    expect(wrapper.find("div").html()).toEqual(
      `<div><section class="StyledWrapper" subscriptions-actions subscriptions-display="NOT granted">
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
    </section></div>`
    );
  });
  it("should call paywallRender when passed", () => {
    const paywallRender = jest.fn();
    const modifiedConfig = { ...config, opts: { render: { subscriptionRender: { paywallRender } } } };
    const wrapper = shallow(<SubscriberAccessPaywall config={modifiedConfig} />);
    expect(paywallRender.mock.calls.length).toBe(1);
    expect(wrapper.find("section").length).toBe(0);
  });
  it("should render Metered Paywall", () => {
    const configObject = {
      featureConfig: {
        subscriptions: {
          services: {
            authorizationUrl: ({ story }) =>
              `http://localhost:3000/api/access/v1/stories/${story["story-content-id"]}/amp-access?key=Fxugwc1mVDyJZ2dHB58bShso&accesstype_integration_id=10&readerId=READER_ID`,
            pingbackUrl: ({ story }) =>
              `http://localhost:3000/api/access/v1/stories/${story["story-content-id"]}/amp-access?key=Fxugwc1mVDyJZ2dHB58bShso&accesstype_integration_id=10&readerId=READER_ID`,
            actions: { login: "https://www.google.com", subscribe: "https://www.facebook.com" }
          },
          score: { supportsViewer: 10, isReadyToPay: 9 },
          fallbackEntitlement: {
            source: "fallback",
            granted: true,
            grantReason: "METERING",
            data: { numberRemaining: 4, isLast: false, isLoggedIn: false }
          }
        }
      }
    };
    const wrapper = shallow(<MeteredPaywall config={configObject} />);
    expect(wrapper.find("div").html()).toEqual(
      `<div><template class="amp-subscriptions-dialog" type="amp-mustache" subscriptions-dialog subscriptions-display="granted AND grantReason = 'METERING'">
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
      </template></div>`
    );
  });
  it("should call meterRender when passed", () => {
    const meterRender = jest.fn();
    const modifiedConfig = {
      ...config,
      opts: { render: { subscriptionRender: { meterRender } } }
    };
    const wrapper = shallow(<MeteredPaywall config={modifiedConfig} />);
    expect(meterRender.mock.calls.length).toBe(1);
    expect(wrapper.find("template").length).toBe(0);
  });
});
