import React from "react";
import { HamburgerMenu } from "./hamburger-menu";
import { StyledAnchor } from "./components";
import { shallow } from "enzyme";

describe("HamburgerMenu", () => {
  it("should render", () => {
    const wrapper = shallow(<HamburgerMenu textDirection="ltr" align="left" items={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render menu items", () => {
    const wrapper = shallow(<HamburgerMenu textDirection="ltr" align="left" items={[{ title: "foo", url: "bar" }]} />);
    expect(wrapper.find(StyledAnchor).prop("href")).toBe("bar");
    expect(wrapper.find(StyledAnchor).text()).toBe("foo");
  });
});
