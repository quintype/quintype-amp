import React from "react";
import { TopAd } from "../top-ad";
import { BodyAd } from "../body-ad";
import { BottomAd } from "../bottom-ad";
import { mount, shallow } from "enzyme";
import { Layout } from "../../../atoms";
import { textStory, config } from "../../../__fixtures__";
import cloneDeep from "lodash.clonedeep";

const dummyConfig = cloneDeep(config);
dummyConfig.ampConfig.doubleclick["top-ad"] = {
  width: 300,
  height: 250,
  "unit-path": "/4444/lorem/ipsum/sticky"
};
dummyConfig.ampConfig.doubleclick["body-ad"] = {
  width: 300,
  height: 250,
  "unit-path": "/3333/lorem/ipsum/sticky"
};
dummyConfig.ampConfig.doubleclick["bottom-ad"] = {
  width: 300,
  height: 250,
  "unit-path": "/2222/lorem/ipsum/sticky"
};
const LayoutWithTopAd = () => (
  <Layout story={textStory} config={dummyConfig}>
    <TopAd />
  </Layout>
);
const LayoutWithBodyAd = () => (
  <Layout story={textStory} config={dummyConfig}>
    <BodyAd />
  </Layout>
);
const LayoutWithBottomAd = () => (
  <Layout story={textStory} config={dummyConfig}>
    <BottomAd />
  </Layout>
);

describe("TopAd", () => {
  it("snapshot test topAd", () => {
    const wrapper = shallow(<TopAd />);
    expect(wrapper).toMatchSnapshot();
  });
  it("snapshot test bodyAd", () => {
    const wrapper = shallow(<BodyAd />);
    expect(wrapper).toMatchSnapshot();
  });
  it("snapshot test bottomAd", () => {
    const wrapper = shallow(<BottomAd />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render TopAd taking ad props from config", () => {
    const wrapper = mount(<LayoutWithTopAd />);
    expect(wrapper.find("amp-ad").prop("type")).toBe("doubleclick");
    expect(wrapper.find("amp-ad").prop("width")).toBe(300);
    expect(wrapper.find("amp-ad").prop("height")).toBe(250);
    expect(wrapper.find("amp-ad").prop("data-slot")).toBe("/4444/lorem/ipsum/sticky");
  });
  it("should render BodyAd taking ad props from config", () => {
    const wrapper = mount(<LayoutWithBodyAd />);
    expect(wrapper.find("amp-ad").prop("type")).toBe("doubleclick");
    expect(wrapper.find("amp-ad").prop("width")).toBe(300);
    expect(wrapper.find("amp-ad").prop("height")).toBe(250);
    expect(wrapper.find("amp-ad").prop("data-slot")).toBe("/3333/lorem/ipsum/sticky");
  });
  it("should render BottomAd taking ad props from config", () => {
    const wrapper = mount(<LayoutWithBottomAd />);
    expect(wrapper.find("amp-ad").prop("type")).toBe("doubleclick");
    expect(wrapper.find("amp-ad").prop("width")).toBe(300);
    expect(wrapper.find("amp-ad").prop("height")).toBe(250);
    expect(wrapper.find("amp-ad").prop("data-slot")).toBe("/2222/lorem/ipsum/sticky");
  });
  it("TopAd should apply overriding props", () => {
    const customPropsForAd = {
      width: "320",
      type: "highlyAnnoyingAd",
      "data-slot": "lorem/ipsum"
    };
    const wrapper = mount(<TopAd {...customPropsForAd} />);
    expect(wrapper.find("amp-ad").prop("data-slot")).toBe("lorem/ipsum");
    expect(wrapper.find("amp-ad").prop("type")).toBe("highlyAnnoyingAd");
    expect(wrapper.find("amp-ad").prop("width")).toBe("320");
  });
  it("BodyAd should apply overriding props", () => {
    const customPropsForAd = {
      width: "320",
      type: "highlyAnnoyingAd2",
      "data-slot": "lorem/ipsum"
    };
    const wrapper = mount(<BodyAd {...customPropsForAd} />);
    expect(wrapper.find("amp-ad").prop("data-slot")).toBe("lorem/ipsum");
    expect(wrapper.find("amp-ad").prop("type")).toBe("highlyAnnoyingAd2");
    expect(wrapper.find("amp-ad").prop("width")).toBe("320");
  });
  it("BottomAd should apply overriding props", () => {
    const customPropsForAd = {
      width: "320",
      type: "highlyAnnoyingAd3",
      "data-slot": "lorem/ipsum"
    };
    const wrapper = mount(<BottomAd {...customPropsForAd} />);
    expect(wrapper.find("amp-ad").prop("data-slot")).toBe("lorem/ipsum");
    expect(wrapper.find("amp-ad").prop("type")).toBe("highlyAnnoyingAd3");
    expect(wrapper.find("amp-ad").prop("width")).toBe("320");
  });
});
