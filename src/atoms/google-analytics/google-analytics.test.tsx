import React from "react";
import { DefaultGoogleAnalytics, GoogleAnalyticsBase } from "./google-analytics";
import { shallow } from "enzyme";
import { Analytics } from "../analytics";

const config = {
  ampConfig: { "google-analytics-tracking-id": "UX-656565" }
};
const configWithoutGa1 = {
  ampConfig: {}
};
const configWithoutGa2 = {
  ampConfig: {
    "google-analytics-tracking-id": ""
  }
};
const configWithInfiniteScroll = {
  ampConfig: { "google-analytics-tracking-id": "UX-656565" },
  opts: {
    featureConfig: {
      infiniteScroll: {
        infiniteScrollInlineConfig: `[{\"image\":\"https://foo.com/puppies.jpg\",\"title\":\"Puppies Page\",\"url\":\"/puppies\"}]`
      }
    }
  }
};

describe("Google Analytics", () => {
  it("should render", () => {
    const wrapper = shallow(<DefaultGoogleAnalytics gaId="UX-656565" config={config} />);
    expect(wrapper.find(Analytics).prop("targets")).toEqual({
      vars: {
        account: "UX-656565"
      },
      triggers: {
        trackPageview: {
          on: "visible",
          request: "pageview",
          scrollSpec: {
            useInitialPageSize: false
          }
        }
      }
    });
  });
  it("should have type prop", () => {
    const wrapper = shallow(<DefaultGoogleAnalytics gaId="UX-656565" config={config} />);
    expect(wrapper.find(Analytics).prop("type")).toEqual("googleanalytics");
  });
  it("should not render if GA config isn't present", () => {
    const wrapper = shallow(<GoogleAnalyticsBase config={configWithoutGa1} />);
    expect(wrapper.find(Analytics).length).toBe(0);
  });
  it("should not render if GA config is empty", () => {
    const wrapper = shallow(<GoogleAnalyticsBase config={configWithoutGa2} />);
    expect(wrapper.find(Analytics).length).toBe(0);
  });
  it("should request pageview on event 'amp-next-page-scroll' and set scrollSpec.useInitialPageSize to true if infinite scroll is enabled", () => {
    const wrapper = shallow(<DefaultGoogleAnalytics gaId="UX-656565" config={configWithInfiniteScroll} />);
    expect(wrapper.find(Analytics).prop("targets")).toEqual({
      vars: {
        account: "UX-656565"
      },
      triggers: {
        trackPageview: {
          on: "amp-next-page-scroll",
          request: "pageview",
          scrollSpec: {
            useInitialPageSize: true
          }
        }
      }
    });
  });
});
