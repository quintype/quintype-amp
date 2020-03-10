import React from "react";
import { PublisherLogoHeader } from "./publisher-logo-header";
import { shallow } from "enzyme";

describe("PublisherLogoHeader", () => {
  it("should render", () => {
    const wrapper = shallow(<PublisherLogoHeader logoSrc="" />);
    expect(wrapper).toMatchSnapshot();
  });
});
