import React from "react";
import { Hamburger } from "./hamburger";
import { shallow } from "enzyme";

describe("Hamburger", () => {
  it("should render", () => {
    const wrapper = shallow(<Hamburger />);
    expect(wrapper).toMatchSnapshot();
  });
});
