import React from "react";
import { mount, shallow } from "enzyme";
import cloneDeep from "lodash.clonedeep";
import { TopAd, TopAdBase } from "../top-ad/top-ad";
import { BodyAd, BodyAdBase } from "../body-ad/body-ad";
import { BottomAd, BottomAdBase } from "../bottom-ad/bottom-ad";
import { Layout, DfpAd } from "../../../atoms";
import { textStory, config } from "../../../__fixtures__";

const dummyConfig = cloneDeep(config);
dummyConfig.ampConfig.doubleclick = {
  "top-ad": {
    width: 300,
    height: 250,
    "unit-path": "/4444/lorem/ipsum/sticky"
  },
  "body-ad": {
    width: 400,
    height: 100,
    "unit-path": "/3333/lorem/ipsum/sticky"
  },
  "bottom-ad": {
    width: 750,
    height: 50,
    "unit-path": "/2222/lorem/ipsum/sticky"
  }
};

describe("DFP Ads", () => {
  it("should render TopAd, BodyAd, BottomAd correctly", () => {
    const wrapper = mount(
      <Layout story={textStory} config={dummyConfig}>
        <TopAd />
        <BodyAd />
        <BottomAd />
      </Layout>
    );
    expect(wrapper.find("amp-ad").length).toBe(3);
    wrapper.find("amp-ad").forEach((node, index) => {
      switch (index) {
        case 0:
          expect(node.prop("width")).toBe(300);
          expect(node.prop("height")).toBe(250);
          expect(node.prop("data-slot")).toBe("/4444/lorem/ipsum/sticky");
          expect(node.prop("json")).toBe(
            `{"targeting":{"environment":["production"],"publisher-name":["vikatan"],"sections":["news"]}}`
          );
          break;
        case 1:
          expect(node.prop("width")).toBe(400);
          expect(node.prop("height")).toBe(100);
          expect(node.prop("data-slot")).toBe("/3333/lorem/ipsum/sticky");
          expect(node.prop("json")).toBe(
            `{"targeting":{"environment":["production"],"publisher-name":["vikatan"],"sections":["news"]}}`
          );
          break;
        case 2:
          expect(node.prop("width")).toBe(750);
          expect(node.prop("height")).toBe(50);
          expect(node.prop("data-slot")).toBe("/2222/lorem/ipsum/sticky");
          expect(node.prop("json")).toBe(
            `{"targeting":{"environment":["production"],"publisher-name":["vikatan"],"sections":["news"]}}`
          );
          break;
      }
    });
  });
  it("TopAd, BodyAd, BottomAd should apply overriding props", () => {
    const customPropsForAd = {
      width: "320",
      type: "highlyAnnoyingAd",
      "data-slot": "lorem/ipsum"
    };
    const wrapper = mount(
      <div>
        <Layout story={textStory} config={dummyConfig}>
          <TopAd {...customPropsForAd} />
          <BodyAd {...customPropsForAd} />
          <BottomAd {...customPropsForAd} />
        </Layout>
      </div>
    );
    wrapper.find("amp-ad").forEach((node) => {
      expect(node.prop("data-slot")).toBe("lorem/ipsum");
      expect(node.prop("type")).toBe("highlyAnnoyingAd");
      expect(node.prop("width")).toBe("320");
    });
  });
  it("Should set prefetchScript to true for top ad", () => {
    const wrapper = shallow(<TopAdBase config={config} width={1} height={2} data-slot="three" />);
    expect(wrapper.find(DfpAd).prop("prefetchScript")).toBe(true);
  });
  it("Should not set prefetchScript attr for body ad", () => {
    const wrapper = shallow(<BodyAdBase config={config} width={1} height={2} data-slot="three" />);
    expect(wrapper.find(DfpAd).prop("prefetchScript")).toBeUndefined();
  });
  it("Should not set prefetchScript attr for bottom ad", () => {
    const wrapper = shallow(<BottomAdBase config={config} width={1} height={2} data-slot="three" />);
    expect(wrapper.find(DfpAd).prop("prefetchScript")).toBeUndefined();
  });
});
