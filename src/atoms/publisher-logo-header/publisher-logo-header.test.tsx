import React from "react";
import { PublisherLogoHeader } from "./publisher-logo-header";
import { shallow } from "enzyme";

describe("PublisherLogoHeader", () => {
  it("should render", () => {
    const wrapper = shallow(<PublisherLogoHeader logoSrc="https://unsplash.com/photos/ffODvgBivdw" />);
    expect(wrapper).toMatchSnapshot();
  });
});
