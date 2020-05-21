import React from "react";
import { Navbar, HamburgerWrapper } from "./navbar";
import { mount, shallow } from "enzyme";
import { configWithMenuDisabled, configWithNoHamburgerMenuItems, configWithTextDirRtl } from "./navbar.stories";
import { Layout, HamburgerMenu } from "../../atoms";
import { textStory, config } from "../../__fixtures__";
import { Hamburger } from "../../atoms/icons/hamburger";

const LayoutWithMenuDisabled = () => (
  <Layout story={textStory} config={configWithMenuDisabled}>
    <Navbar />
  </Layout>
);
const LayoutWithNoHamburgerMenuItems = () => (
  <Layout story={textStory} config={configWithNoHamburgerMenuItems}>
    <Navbar />
  </Layout>
);
const LayoutWithRTL = () => (
  <Layout story={textStory} config={configWithTextDirRtl}>
    <Navbar />
  </Layout>
);
const DefaultLayoutWithNavbar = () => (
  <Layout story={textStory} config={config}>
    <Navbar />
  </Layout>
);
const LayoutWithNavbarAlignedRight = () => (
  <Layout story={textStory} config={config}>
    <Navbar align="right" />
  </Layout>
);

describe("Navbar", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render", () => {
    const wrapper = mount(<DefaultLayoutWithNavbar />);
    expect(wrapper.find(Navbar).exists()).toBeTruthy();
    expect(
      wrapper
        .find("ul")
        .first()
        .prop("dir")
    ).toBe("ltr");
  });
  it("Navbar with hamburger menu disabled", () => {
    const wrapper = mount(<LayoutWithMenuDisabled />);
    expect(wrapper.find(Hamburger).exists()).toBeFalsy();
    expect(wrapper.find(HamburgerMenu).exists()).toBeFalsy();
  });
  it("Navbar with no hamburger Menu Items", () => {
    const wrapper = mount(<LayoutWithNoHamburgerMenuItems />);
    expect(wrapper.find(Hamburger).exists()).toBeFalsy();
    expect(wrapper.find(HamburgerMenu).exists()).toBeFalsy();
  });
  it("Right aligned Navbar", () => {
    const wrapper = mount(<LayoutWithNavbarAlignedRight />);
    expect(wrapper.find(HamburgerWrapper).prop("align")).toBe("right");
  });
  it("Navbar with text direction RTL", () => {
    const wrapper = mount(<LayoutWithRTL />);
    expect(
      wrapper
        .find("ul")
        .first()
        .prop("dir")
    ).toBe("rtl");
  });
});
