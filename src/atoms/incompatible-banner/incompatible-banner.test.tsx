import React from "react";
import { IncompatibleBanner } from "./incompatible-banner";
import { shallow } from "enzyme";

describe("IncompatibleBanner", () => {
  it("should render", () => {
    const wrapper = shallow(<IncompatibleBanner />);
    expect(wrapper).toMatchSnapshot();
  });
});
