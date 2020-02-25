import React from "react";
import { Footer } from "./footer";
import { shallow } from "enzyme";

describe("Footer", () => {
  it("should render", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
