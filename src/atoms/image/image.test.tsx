import React from "react";
import { shallow } from "enzyme";
import Image from "./image";

describe("Image", () => {
  it("should render amp img with src", () => {
    const wrapper = shallow(<Image src="/amazingImage.jpg" alt="Amazing image" width="400" height="500" />);
    expect(wrapper).toMatchSnapshot();
  });
});
