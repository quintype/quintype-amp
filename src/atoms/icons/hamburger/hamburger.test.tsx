import React from "react";
import { Hamburger } from "./hamburger";
import { mount, shallow } from "enzyme";

describe("Hamburger", () => {
  it("should render", () => {
    const wrapper = shallow(<Hamburger />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render with custom styles", () => {
    const wrapper = mount(<Hamburger inlineStyles={{ border: "2px solid red" }} />);
    expect(wrapper.find("svg").prop("style")).toStrictEqual({ border: "2px solid red" });
  });
});
