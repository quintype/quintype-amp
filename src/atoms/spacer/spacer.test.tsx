import React from "react";
import { Spacer, makeSpace } from "./spacer";
import { shallow } from "enzyme";

describe("Spacer", () => {
  it("should render", () => {
    const wrapper = shallow(<Spacer token="m" />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should generate proper margin value for vertical", () => {
    const value = makeSpace("32px", "vertical");
    expect(value).toBe("32px 0");
  });
  it("should generate proper margin value for horizontal", () => {
    const value = makeSpace("32px", "horizontal");
    expect(value).toBe("0 32px");
  });
  it("should return vertical margin when no direction is passed", () => {
    const value = makeSpace("32px");
    expect(value).toBe("32px 0");
  });
});
