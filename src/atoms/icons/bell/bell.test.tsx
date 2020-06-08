import React from "react";
import { StyledBell, Bell } from "./bell";
import { shallow } from "enzyme";

describe("Bell Icon", () => {
  it("should render", () => {
    const wrapper = shallow(<Bell />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render with custom styles", () => {
    const wrapper = shallow(<StyledBell inlineStyles={{ border: "2px solid black" }} />);
    expect(wrapper.find("svg").prop("style")).toStrictEqual({ border: "2px solid black" });
  });
});
