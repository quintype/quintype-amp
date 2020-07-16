import { shallow } from "enzyme";
import React from "react";
import { Subscription } from "./subscription";
import { textStory } from "../../__fixtures__";

const services = [
  {
    authorizationUrl: "https://pub.com/amp-authorisation?rid=READER_ID&url=SOURCE_URL",
    pingbackUrl: "https://pub.com/amp-pingback?rid=READER_ID&url=SOURCE_URL",
    actions: {
      login: "https://pub.com/amp-login?rid=READER_ID&url=SOURCE_URL",
      subscribe: "https://pub.com/amp-subscribe?rid=READER_ID&url=SOURCE_URL"
    }
  }
];
const noServices = [
  {
    authorizationUrl: "",
    pingbackUrl: "",
    actions: {
      login: "",
      subscribe: ""
    }
  }
];
const score = {
  supportsViewer: 10,
  isReadyToPay: 9
};
const fallbackEntitlement = {
  source: "fallback",
  granted: true,
  grantReason: "SUBSCRIBER",
  data: {
    isLoggedIn: false
  }
};
describe("Subscriptions", () => {
  it("should render Subscription services ", () => {
    const wrapper = shallow(<Subscription services={services} story={textStory} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render Subscription services with score ", () => {
    const wrapper = shallow(<Subscription services={services} score={score} story={textStory} />);
    expect(wrapper.find("script[type='application/json']").html()).toEqual(
      '<script type="application/json" id="amp-subscriptions">{"services":[{"authorizationUrl":"https://pub.com/amp-authorisation?rid=READER_ID&url=SOURCE_URL","pingbackUrl":"https://pub.com/amp-pingback?rid=READER_ID&url=SOURCE_URL","actions":{"login":"https://pub.com/amp-login?rid=READER_ID&url=SOURCE_URL","subscribe":"https://pub.com/amp-subscribe?rid=READER_ID&url=SOURCE_URL"}}],"score":{"supportsViewer":10,"isReadyToPay":9}}</script>'
    );
  });
  it("should render Subscription Fallback Entitlement ", () => {
    const wrapper = shallow(
      <Subscription services={noServices} fallbackEntitlement={fallbackEntitlement} story={textStory} />
    );
    expect(wrapper.find("script[type='application/json']").html()).toEqual(
      '<script type="application/json" id="amp-subscriptions">{"services":[{"authorizationUrl":"","pingbackUrl":"","actions":{"login":"","subscribe":""}}],"fallbackEntitlement":{"source":"fallback","granted":true,"grantReason":"SUBSCRIBER","data":{"isLoggedIn":false}}}</script>'
    );
  });
});
