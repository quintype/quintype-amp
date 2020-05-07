import React from "react";
import { GoogleAnalyticsBase } from "./google-analytics";
import { shallow } from "enzyme";
import { Analytics } from "../analytics";

const config = {
  ampConfig: { "google-analytics-tracking-id": "UX-656565" }
};
describe("Google Analytics", () => {
  it("should render", () => {
    const wrapper = shallow(<GoogleAnalyticsBase config={config} />);
    expect(wrapper.find(Analytics).prop("targets")).toEqual({
      vars: {
        account: "UX-656565",
        triggers: {
          trackPageview: {
            on: "visible",
            request: "pageview"
          }
        }
      }
    });
  });
  it("should have type prop", () => {
    const wrapper = shallow(<GoogleAnalyticsBase config={config} />);
    expect(wrapper.find(Analytics).prop("type")).toEqual("googleanalytics");
  });
});
