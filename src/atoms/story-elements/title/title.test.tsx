import React from "react";
import { Title } from "./title";
import { shallow, mount } from "enzyme";

const sampleTitleElement = {
  description: "",
  "page-url": "/story/af018d6b-2166-4344-b167-40405a148e41/element/5737bdd7-bdce-4396-9318-9ac8007f0970",
  type: "title",
  "family-id": "65d7db11-3fd5-4cf7-bcf3-a55b70b49e8a",
  title: "",
  id: "5737bdd7-bdce-4396-9318-9ac8007f0970",
  metadata: {},
  subtype: null,
  text: "This is a title"
};

describe("Title", () => {
  it("should render default", () => {
    const wrapper = shallow(<Title element={sampleTitleElement} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render default", () => {
    const wrapper = mount(<Title element={sampleTitleElement} inlineStyles={{ fontStyle: "italic" }} />);
    expect(wrapper.find("h3").prop("style")).toStrictEqual({ fontStyle: "italic" });
  });
});
