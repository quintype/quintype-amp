import React from "react";
import { visualStory, config } from "../../../__fixtures__";
import { AmpStoryAutoAdsBase } from "./amp-story-auto-ads";
import { shallow } from "enzyme";
import { Config } from "../../../types/config";

describe("amp-story-auto-ads", () => {
  it("should match snapshot if visualStories config is object", () => {
    const configWithAd: Config = config;
    configWithAd.opts = {
      featureConfig: {
        visualStories: {
          ads: {
            doubleclick: {
              dataSlot: "foo"
            }
          }
        }
      }
    };
    expect(shallow(<AmpStoryAutoAdsBase story={visualStory} config={configWithAd} />)).toMatchSnapshot();
  });
  it("should match snapshot if visualStories config is array of object", () => {
    const configWithAd: Config = config;
    configWithAd.opts = {
      featureConfig: {
        visualStories: [
          {
            ads: {
              doubleclick: {
                dataSlot: "foo"
              }
            }
          }
        ]
      }
    };
    expect(shallow(<AmpStoryAutoAdsBase story={visualStory} config={configWithAd} />)).toMatchSnapshot();
  });
  it("should not render if ad config not passed in featureConfig", () => {
    const modifiedConfig: Config = config;
    modifiedConfig.opts = {};
    const wrapper = shallow(<AmpStoryAutoAdsBase story={visualStory} config={modifiedConfig} />);
    expect(wrapper.find("amp-story-auto-ads").length).toBe(0);
  });
  it("should render if ad config passed, taking correct value from featureConfig", () => {
    const configWithAd: Config = config;
    configWithAd.opts = {
      featureConfig: {
        visualStories: {
          ads: {
            doubleclick: {
              dataSlot: "foo"
            }
          }
        }
      }
    };
    const wrapper = shallow(<AmpStoryAutoAdsBase story={visualStory} config={configWithAd} />);
    expect(wrapper.find("script[type='application/json']").html()).toEqual(
      '<script type="application/json">{"ad-attributes":{"type":"doubleclick","data-slot":"foo","json":"{\\"targeting\\":{\\"environment\\":[\\"production\\"],\\"publisher-name\\":[\\"vikatan\\"],\\"sections\\":[\\"entertainment\\"]}}"}}</script>'
    );
  });
});
