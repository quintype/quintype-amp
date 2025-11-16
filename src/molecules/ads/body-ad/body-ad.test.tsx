import React from "react";
import { shallow } from "enzyme";
import cloneDeep from "lodash.clonedeep";
import { BodyAdBase } from "./body-ad";
import { DfpAd } from "../../../atoms";
import { config } from "../../../__fixtures__";

const configWithBodyAd = cloneDeep(config);
configWithBodyAd.ampConfig.doubleclick = {
  "body-ad": {
    width: 400,
    height: 100,
    "unit-path": "/3333/lorem/ipsum/sticky"
  }
};

describe("Body DFP Ad", () => {
  it("Should not set prefetchScript attr for body ad", () => {
    const wrapper = shallow(<BodyAdBase config={config} templateName="default" />);
    expect(wrapper.find(DfpAd).prop("prefetchScript")).toBeUndefined();
  });
  it("Should render if ad config exists and it's not disabled from featureConfig", () => {
    const wrapper = shallow(<BodyAdBase templateName="default" config={configWithBodyAd} />);
    expect(wrapper.find(DfpAd).exists()).toBe(true);
  });
  it("Should not render if ad config isn't present", () => {
    const configWithoutBodyAd = cloneDeep(config);
    configWithoutBodyAd.ampConfig.doubleclick["body-ads"] = [];
    configWithoutBodyAd.ampConfig.doubleclick["body-ad"] = {};
    const wrapper = shallow(<BodyAdBase templateName="liveBlog" config={configWithoutBodyAd} />);
    expect(wrapper.find(DfpAd).exists()).toBe(false);
  });
  it("Should not render if ad config is present but it's disabled from featureConfig", () => {
    const bodyAdDisabledFromFeatConfig = cloneDeep(configWithBodyAd);
    bodyAdDisabledFromFeatConfig.opts = {
      featureConfig: {
        enableAds: {
          liveBlog: {
            body: false
          }
        }
      }
    };
    const wrapper = shallow(<BodyAdBase templateName="liveBlog" config={bodyAdDisabledFromFeatConfig} />);
    expect(wrapper.find(DfpAd).exists()).toBe(false);
  });
});
