import React from "react";
import { StyledBanner, IncompatibleBanner } from "./incompatible-banner";
import { shallow } from "enzyme";

describe("IncompatibleBanner", () => {
  it("should render", () => {
    const wrapper = shallow(<IncompatibleBanner />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render styled banner with custom styles", () => {
    const wrapper = shallow(<StyledBanner inlineStyles={{ border: "5px solid red" }} />);
    expect(wrapper.find("div").prop("style")).toStrictEqual({ border: "5px solid red" });
  });
});
