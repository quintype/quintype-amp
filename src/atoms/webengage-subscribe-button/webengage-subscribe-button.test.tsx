import React from "react";
import { WebengageSubscribeButtonBase, SubscribeMessage } from "./webengage-subscribe-button";
import { shallow } from "enzyme";

describe("WebengageSubscribeButton", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<WebengageSubscribeButtonBase />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should apply custom text", () => {
    const wrapper = shallow(<WebengageSubscribeButtonBase text="foo" />);
    expect(wrapper.find(SubscribeMessage).text()).toBe("foo");
  });
});
