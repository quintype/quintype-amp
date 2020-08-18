import React from "react";
import { shallow } from "enzyme";
import cloneDeep from "lodash.clonedeep";
import { TopAdBase } from "./top-ad";
import { DfpAd } from "../../../atoms";
import { config } from "../../../__fixtures__";

const configWithTopAd = cloneDeep(config);
configWithTopAd.ampConfig.doubleclick = {
  "top-ad": {
    width: 300,
    height: 250,
    "unit-path": "/4444/lorem/ipsum/sticky"
  }
};

describe("Top DFP Ad", () => {
  it("Should set prefetchScript to true for top ad", () => {
    const wrapper = shallow(<TopAdBase config={configWithTopAd} templateName="default" />);
    expect(wrapper.find(DfpAd).prop("prefetchScript")).toBe(true);
  });
  it("Should render if ad config exists and it's not disabled from featureConfig", () => {
    const wrapper = shallow(<TopAdBase templateName="default" config={configWithTopAd} />);
    expect(wrapper.find(DfpAd).exists()).toBe(true);
  });
  it("Should not render if ad config isn't present", () => {
    const configWithoutTopAd = cloneDeep(config);
    configWithoutTopAd.ampConfig.doubleclick["top-ad"] = {};
    const wrapper = shallow(<TopAdBase templateName="default" config={configWithoutTopAd} />);
    expect(wrapper.find(DfpAd).exists()).toBe(false);
  });
  it("Should not render if ad config is present but it's disabled from featureConfig", () => {
    const topAdDisabledFromFeatConfig = cloneDeep(configWithTopAd);
    topAdDisabledFromFeatConfig.opts = {
      featureConfig: {
        enableAds: {
          default: {
            top: false
          }
        }
      }
    };
    const wrapper = shallow(<TopAdBase templateName="default" config={topAdDisabledFromFeatConfig} />);
    expect(wrapper.find(DfpAd).exists()).toBe(false);
  });
});
