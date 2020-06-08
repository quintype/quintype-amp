import React from "react";
import { StyledSection, Section } from "./section";
import { shallow } from "enzyme";

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
    const wrapper = shallow(<StyledSection inlineStyles={{ "background-color": "blue" }} />);
    expect(wrapper.find("div").prop("style")).toStrictEqual({ "background-color": "blue" });
  });
});
