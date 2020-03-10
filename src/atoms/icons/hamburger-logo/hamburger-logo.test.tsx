import React from "react";
import { HamburgerLogo } from "./hamburger-logo";
import { shallow } from "enzyme";

describe("PublisherLogoHeader", () => {
  it("should render", () => {
    const wrapper = shallow(<HamburgerLogo />);
    expect(wrapper).toMatchSnapshot();
  });
});
