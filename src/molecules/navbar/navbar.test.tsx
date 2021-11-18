import React from "react";
import { Navbar } from "./navbar";
import { mount, shallow } from "enzyme";
import { configWithMenuDisabled, configWithNoHamburgerMenuItems } from "./navbar.stories";
import { Layout, HamburgerMenu } from "../../atoms";
import { textStory } from "../../__fixtures__";
import { Hamburger } from "../../atoms/icons/hamburger";
import { getDomainSpecificHamburgerMenuItems } from "./helpers";
import {
  defaultMenuItems,
  dummyConfig1,
  dummyConfig2,
  dummyConfig3,
  dummyConfig4,
  dummyConfig5,
  dummyConfig6,
  dummyConfig7,
  dummyConfig8,
  dummyConfig9,
  dummyConfig10,
  healthMenuItems,
  ampSidebarMenuNewsItems,
  sidebarMenuNewsItems,
  sidebarMenuItemsMainDomain
} from "./test-data";

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

describe("Navbar", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper).toMatchSnapshot();
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
});

// tests for helper functions
describe("getDomainSpecificHamburgerMenuItems helper function", () => {
  it("Should return default menu group items for publisher having no associated subdomains", () => {
    const menuItems = getDomainSpecificHamburgerMenuItems(dummyConfig1);
    expect(menuItems).toMatchObject(defaultMenuItems);
  });
  it("Should return default menu group items when there are associated subdomains but the reader is on the main domain", () => {
    const menuItems = getDomainSpecificHamburgerMenuItems(dummyConfig2);
    expect(menuItems).toMatchObject(defaultMenuItems);
  });
  it("Should return default menu group items when the reader is on a subdomain but no featureConfig is passed and sidebar-menu-<subdomain> & amp-sidebar-menu-<subdomain> menuGroups are not created", () => {
    const menuItems = getDomainSpecificHamburgerMenuItems(dummyConfig3);
    expect(menuItems).toMatchObject(defaultMenuItems);
  });
  it("Should return menuGroup items as per featureConfig when the reader is on a subdomain, featureConfig is passed and sidebar-menu-<subdomain> & amp-sidebar-menu-<subdomain> menuGroups are created for the subdomain", () => {
    const menuItems = getDomainSpecificHamburgerMenuItems(dummyConfig4);
    expect(menuItems).toMatchObject(healthMenuItems);
  });
  it("Should return amp-sidebar-menu-<subdomain> menuGroup items when the reader is on a subdomain, featureConfig is not passed and sidebar-menu-<subdomain> & amp-sidebar-menu-<subdomain> menuGroups are created for the subdomain", () => {
    const menuItems = getDomainSpecificHamburgerMenuItems(dummyConfig5);
    expect(menuItems).toMatchObject(ampSidebarMenuNewsItems);
  });
  it("Should return sidebar-menu-<subdomain> menuGroup items when the reader is on a subdomain, featureConfig is not passed, amp-sidebar-menu-<subdomain> menuGroup isn't created and sidebar-menu-<subdomain> menuGroup is created for the subdomain", () => {
    const menuItems = getDomainSpecificHamburgerMenuItems(dummyConfig6);
    expect(menuItems).toMatchObject(sidebarMenuNewsItems);
  });
  it("Should return default menu group items when the reader is on a subdomain, and there are no menu items in menu groups amp-sidebar-menu-<subdomain>, sidebar-menu-<subdomain> or in the menuGroup given by featureConfig", () => {
    const menuItems1 = getDomainSpecificHamburgerMenuItems(dummyConfig7);
    const menuItems2 = getDomainSpecificHamburgerMenuItems(dummyConfig8);
    const menuItems3 = getDomainSpecificHamburgerMenuItems(dummyConfig9);
    expect(menuItems1).toMatchObject(defaultMenuItems);
    expect(menuItems2).toMatchObject(defaultMenuItems);
    expect(menuItems3).toMatchObject(defaultMenuItems);
  });
  it("Should return sidebar-menu menuGroup items when the reader is on main domain, featureConfig is not passed, sidebar-menu is created & amp-sidebar-menu menuGroup is not created", () => {
    const menuItems = getDomainSpecificHamburgerMenuItems(dummyConfig10);
    expect(menuItems).toMatchObject(sidebarMenuItemsMainDomain);
  });
});
