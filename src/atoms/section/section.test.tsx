import React from "react";
import { Section } from "./section";
import { shallow, mount } from "enzyme";

const section = {
  "domain-slug": null,
  slug: "news",
  name: "News",
  "section-url": "https://www.barandbench.com/news",
  id: 14017,
  "parent-id": null,
  "display-name": "News Of the World",
  collection: {
    slug: "news",
    name: "News",
    id: 29911
  },
  data: null
};
const sectionWithoutDisplayName = { ...section, "display-name": "" };

describe("Section", () => {
  it("should render", () => {
    const wrapper = shallow(<Section section={section} />);
    expect(wrapper.text()).toBe("News Of the World");
  });
  it("should render display name when present", () => {
    const wrapper = shallow(<Section section={section} />);
    expect(wrapper.text()).toBe(section["display-name"]);
  });
  it("should render name when no display name ", () => {
    const wrapper = shallow(<Section section={sectionWithoutDisplayName} />);
    expect(wrapper.text()).toBe(section.name);
  });
  it("should render with custom styles", () => {
    const wrapper = mount(<Section section={section} inlineStyles={{ backgroundColor: "blue" }} />);
    expect(wrapper.find("h5").prop("style")).toStrictEqual({ backgroundColor: "blue" });
  });
});
