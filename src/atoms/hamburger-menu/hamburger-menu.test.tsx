import React from "react";
import { HamburgerMenu, StyledAnchor } from "./hamburger-menu";
import { shallow } from "enzyme";

describe("HamburgerMenu", () => {
  it("should render", () => {
    const wrapper = shallow(<HamburgerMenu textDirection="ltr" align="left" items={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render menu items", () => {
    const dummyMenuItems = [
      {
        "tag-name": "women empowerment",
        "entity-properties": null,
        "collection-id": null,
        "entity-slug": null,
        "item-id": 1099957,
        rank: 4689,
        title: "foo",
        "item-type": "tag",
        "section-slug": null,
        "tag-slug": "women-empowerment",
        id: 4689,
        "parent-id": null,
        url: "bar",
        "entity-name": null,
        "collection-slug": null,
        "section-name": null,
        data: {
          color: "#FFFFFF"
        }
      }
    ];
    const wrapper = shallow(<HamburgerMenu textDirection="ltr" align="left" items={dummyMenuItems} />);
    expect(wrapper.find(StyledAnchor).prop("href")).toBe("bar");
    expect(wrapper.find(StyledAnchor).text()).toBe("foo");
  });
});
