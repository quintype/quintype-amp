import React from "react";
import { HeroImage } from "./hero-image";
import { shallow } from "enzyme";

describe("HeroImage", () => {
  it("should render", () => {
    const wrapper = shallow(<HeroImage />);
    expect(wrapper).toMatchSnapshot();
  });
});
