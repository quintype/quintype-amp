import React from "react";
import { DefaultGoogleAnalytics, GoogleAnalytics4 } from "./google-analytics";
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
const configWithGA4 = {
  ampConfig: { "google-analytics-tracking-id": "G-656565" },
  opts: {
    featureConfig: {
      ga4Config: {
        vars: {
          GA4_MEASUREMENT_ID: "G-656565",
          GA4_ENDPOINT_HOSTNAME: "www.google-analytics.com",
          DEFAULT_PAGEVIEW_ENABLED: false,
          GOOGLE_CONSENT_ENABLED: false,
          WEBVITALS_TRACKING: false,
          PERFORMANCE_TIMING_TRACKING: false,
          SEND_DOUBLECLICK_BEACON: false
        },
        triggers: {
          cta_tracking: {
            on: "click",
            selector: ".cta_click",
            request: "ga4Event",
            vars: {
              ga4_event_name: "GA4 click"
            },
            extraUrlParams: {
              event__str_eventAction: "clicked"
            }
          }
        }
      }
    }
  }
};
describe("Google Analytics", () => {
  it("should render", () => {
    const wrapper = shallow(<DefaultGoogleAnalytics config={config} />);
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
    const wrapper = shallow(<DefaultGoogleAnalytics config={config} />);
    expect(wrapper.find(Analytics).prop("type")).toEqual("googleanalytics");
  });
  it("should not render if GA config isn't present", () => {
    const wrapper = shallow(<DefaultGoogleAnalytics config={configWithoutGa1} />);
    expect(wrapper.find(Analytics).length).toBe(0);
  });
  it("should not render if GA config is empty", () => {
    const wrapper = shallow(<DefaultGoogleAnalytics config={configWithoutGa2} />);
    expect(wrapper.find(Analytics).length).toBe(0);
  });
  it("should request pageview on event 'amp-next-page-scroll' and set scrollSpec.useInitialPageSize to true if infinite scroll is enabled", () => {
    const wrapper = shallow(<DefaultGoogleAnalytics config={configWithInfiniteScroll} />);
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
  it("should pick up GA4, if config  is added in feature config", () => {
    const wrapper = shallow(<GoogleAnalytics4 config={configWithGA4} />);
    expect(wrapper.find(Analytics).prop("targets")).toEqual({
      vars: {
        GA4_MEASUREMENT_ID: "G-656565",
        GA4_ENDPOINT_HOSTNAME: "www.google-analytics.com",
        DEFAULT_PAGEVIEW_ENABLED: false,
        GOOGLE_CONSENT_ENABLED: false,
        WEBVITALS_TRACKING: false,
        PERFORMANCE_TIMING_TRACKING: false,
        SEND_DOUBLECLICK_BEACON: false
      },
      triggers: {
        cta_tracking: {
          on: "click",
          selector: ".cta_click",
          request: "ga4Event",
          vars: {
            ga4_event_name: "GA4 click"
          },
          extraUrlParams: {
            event__str_eventAction: "clicked"
          }
        }
      }
    });
  });
});
