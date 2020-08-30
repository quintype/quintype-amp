import React from "react";
import { shallow } from "enzyme";
import cloneDeep from "lodash.clonedeep";
import { BottomAdBase } from "./bottom-ad";
import { DfpAd } from "../../../atoms";
import { config } from "../../../__fixtures__";

const configWithBottomAd = cloneDeep(config);
configWithBottomAd.ampConfig.doubleclick = {
  "bottom-ad": {
    width: 400,
    height: 100,
    "unit-path": "/3333/lorem/ipsum/sticky"
  }
};

describe("Bottom DFP Ad", () => {
  it("Should not set prefetchScript attr for body ad", () => {
    const wrapper = shallow(<BottomAdBase config={config} templateName="default" />);
    expect(wrapper.find(DfpAd).prop("prefetchScript")).toBeUndefined();
  });
  it("Should render if ad config exists and it's not disabled from featureConfig", () => {
    const wrapper = shallow(<BottomAdBase templateName="default" config={configWithBottomAd} />);
    expect(wrapper.find(DfpAd).exists()).toBe(true);
  });
  it("Should not render if ad config isn't present", () => {
    const configWithoutBottomAd = cloneDeep(config);
    configWithoutBottomAd.ampConfig.doubleclick["bottom-ad"] = {};
    const wrapper = shallow(<BottomAdBase templateName="default" config={configWithoutBottomAd} />);
    expect(wrapper.find(DfpAd).exists()).toBe(false);
  });
  it("Should not render if ad config is present but it's disabled from featureConfig", () => {
    const bottomAdDisabledFromFeatConfig = cloneDeep(configWithBottomAd);
    bottomAdDisabledFromFeatConfig.opts = {
      featureConfig: {
        enableAds: {
          liveBlog: {
            bottom: false
          }
        }
      }
    };
    const wrapper = shallow(<BottomAdBase templateName="liveBlog" config={bottomAdDisabledFromFeatConfig} />);
    expect(wrapper.find(DfpAd).exists()).toBe(false);
  });
});
