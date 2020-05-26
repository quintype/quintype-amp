import { shallow } from "enzyme";
import React from "react";
import { SocialShareIcon } from "./social-share-icon";

describe("Social Share Icon", () => {
  it("should render SocialShareIcon for facebook", () => {
    const wrapper = shallow(<SocialShareIcon type="facebook" appId="1" />);
    expect(wrapper.find("amp-social-share[data-param-app_id='1']").length).toBe(1);
  });

  it("should not render app id when type is not facebook", () => {
    const wrapper = shallow(<SocialShareIcon type="twitter" />);
    expect(wrapper.find("amp-social-share[data-param-app_id='1']").length).toBe(0);
    expect(wrapper.find("amp-social-share").length).toBe(1);
  });
});
