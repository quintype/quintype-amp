import React from "react";
import { HamburgerMenu } from "./hamburger-menu";
import { shallow } from "enzyme";

describe("PublisherLogoHeader", () => {
  it("should render", () => {
    const wrapper = shallow(<HamburgerMenu textDirection="ltr" align="left" items={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
