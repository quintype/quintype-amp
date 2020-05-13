import React from "react";
import { LightboxGallery } from "./lightbox-gallery";
import { shallow } from "enzyme";

describe("LightboxGallery", () => {
  it("should render", () => {
    const wrapper = shallow(<LightboxGallery />);
    expect(wrapper).toMatchSnapshot();
  });
});
