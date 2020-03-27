import React from "react";
import { BaseFooter } from "./footer";
import { shallow } from "enzyme";

describe("Footer", () => {
  it("should render", () => {
    const wrapper = shallow(<BaseFooter />);
    expect(wrapper).toMatchSnapshot();
  });
});
