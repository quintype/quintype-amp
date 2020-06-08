import React from "react";
import { StyledPublisherLogoHeader, PublisherLogoHeader } from "./publisher-logo-header";
import { shallow } from "enzyme";

describe("PublisherLogoHeader", () => {
  it("should render", () => {
    const wrapper = shallow(
      <PublisherLogoHeader publisherName="foo" logoSrc="https://unsplash.com/photos/ffODvgBivdw" />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("should render with custom styles", () => {
    const wrapper = shallow(<StyledPublisherLogoHeader inlineStyles={{ border: "5px solid red" }} />);
    expect(wrapper.find("a").prop("style")).toStrictEqual({ border: "5px solid red" });
  });
});
