import React from "react";
import { SocialShareHeader } from "./social-share-header";
import { shallow } from "enzyme";

describe("SocialShareHeader", () => {
  it("should render", () => {
    const wrapper = shallow(<SocialShareHeader />);
    expect(wrapper).toMatchSnapshot();
  });
});
