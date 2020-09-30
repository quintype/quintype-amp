import React from "react";
import { Navbar, HamburgerWrapper } from "./navbar";
import { mount, shallow } from "enzyme";
import { configWithMenuDisabled, configWithNoHamburgerMenuItems, configWithTextDirRtl } from "./navbar.stories";
import { Layout, HamburgerMenu } from "../../atoms";
import { textStory, config } from "../../__fixtures__";
import { Hamburger } from "../../atoms/icons/hamburger";
import { getDomainSpecificHamburgerMenuItems, objToArr } from "./helpers";
import { dummyConfig, defaultMenuItems, newsMenuItems } from "./test-data";

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
    wrapper.find("ul").forEach((node) => {
      expect(node.prop("dir")).toBe("ltr");
    });
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
    wrapper.find("ul").forEach((node) => {
      expect(node.prop("dir")).toBe("rtl");
    });
  });
});

// tests for helper functions
describe("objToArr helper function", () => {
  it("should work", () => {
    const obj = {
      foo: {
        a: 1,
        b: "two"
      },
      bar: 42,
      baz: ["a", "b"]
    };
    expect(objToArr(obj)).toMatchObject([
      {
        a: 1,
        b: "two"
      },
      42,
      ["a", "b"]
    ]);
  });
});

describe("getDomainSpecificHamburgerMenuItems helper function", () => {
  it("Should return default menu group items for publisher having no associated subdomains", () => {
    const newConfig = { ...dummyConfig };
    newConfig.opts = { domainSlug: undefined };
    const menuItems = getDomainSpecificHamburgerMenuItems(newConfig);
    expect(menuItems).toMatchObject(defaultMenuItems);
  });
  it("Should return default menu group items when there are associated subdomains but the reader is on the main domain", () => {
    const newConfig = { ...dummyConfig };
    newConfig.opts = { domainSlug: null };
    const menuItems = getDomainSpecificHamburgerMenuItems(newConfig);
    expect(menuItems).toMatchObject(defaultMenuItems);
  });
  it("Should return default menu group items when the reader is on a subdomain & the publisher hasn't configured a menu group for the subdomain", () => {
    const newConfig = { ...dummyConfig };
    newConfig.opts = { domainSlug: "astrology" };
    const menuItems = getDomainSpecificHamburgerMenuItems(newConfig);
    expect(menuItems).toMatchObject(defaultMenuItems);
  });
  it("Should return default menu group items when the reader is on a subdomain & the publisher has deleted all the configured menu group items for that subdomain", () => {
    const newConfig = { ...dummyConfig };
    newConfig.opts = { domainSlug: "foo" };
    const menuItems = getDomainSpecificHamburgerMenuItems(newConfig);
    expect(menuItems).toMatchObject(defaultMenuItems);
  });
  it("Should return menu group items associated with the subdomain on which the reader is on, when the publisher has configured the menu group items for that subdomain", () => {
    const newConfig = { ...dummyConfig };
    newConfig.opts = { domainSlug: "news" };
    const menuItems = getDomainSpecificHamburgerMenuItems(newConfig);
    expect(menuItems).toMatchObject(newsMenuItems);
  });
});
