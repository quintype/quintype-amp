import React from "react";
import { TopAd } from "./top-ad";
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
const LayoutWithTopAd = () => (
  <Layout story={textStory} config={dummyConfig}>
    <TopAd />
  </Layout>
);

describe("TopAd", () => {
  it("snapshot test", () => {
    const wrapper = shallow(<TopAd />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render TopAd taking ad props from config", () => {
    const wrapper = mount(<LayoutWithTopAd />);
    expect(wrapper.find("amp-ad").prop("type")).toBe("doubleclick");
    expect(wrapper.find("amp-ad").prop("width")).toBe(300);
    expect(wrapper.find("amp-ad").prop("height")).toBe(250);
    expect(wrapper.find("amp-ad").prop("data-slot")).toBe("/4444/lorem/ipsum/sticky");
  });
  it("should apply overriding props", () => {
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
});
