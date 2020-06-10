import React from "react";
import { PublisherLogoHeader } from "./publisher-logo-header";
import { shallow, mount } from "enzyme";

describe("PublisherLogoHeader", () => {
  it("should render", () => {
    const wrapper = shallow(
      <PublisherLogoHeader publisherName="foo" logoSrc="https://unsplash.com/photos/ffODvgBivdw" />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("should render with custom styles", () => {
    const wrapper = mount(
      <PublisherLogoHeader
        publisherName="foo"
        logoSrc="https://unsplash.com/photos/ffODvgBivdw"
        inlineStyles={{ border: "5px solid red" }}
      />
    );
    expect(wrapper.find("a").prop("style")).toStrictEqual({ border: "5px solid red" });
  });
});
