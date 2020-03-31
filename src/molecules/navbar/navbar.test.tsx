import React from "react";
import { Navbar } from "./navbar";
import { shallow } from "enzyme";

describe("Navbar", () => {
  it("should render", () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper).toMatchSnapshot();
  });
});
