import React from "react";
import { InvalidBanner } from "./invalid-banner";
import { shallow } from "enzyme";

describe("InvalidBanner", () => {
  it("should render", () => {
    const wrapper = shallow(<InvalidBanner />);
    expect(wrapper).toMatchSnapshot();
  });
});
