import React from "react";
import { SocialShareIcon } from "./social-share-icon";
import { shallow } from "enzyme";

describe("Social Share Icon", () => {
  it("should render SocialShareIcon", () => {
    const wrapper = shallow(<SocialShareIcon type="facebook" />);
    expect(wrapper.find("amp-social-share").length).toBe(1);
  });
});
