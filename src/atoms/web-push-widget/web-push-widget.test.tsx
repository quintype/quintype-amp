import React from "react";
import { WebPushWidget } from "./web-push-widget";
import { shallow } from "enzyme";

const wrapper = shallow(
  <WebPushWidget visibility="unsubscribed" width="350px" height="60px">
    <button>Click me</button>
    <div>I am WebPushWidget's child</div>
  </WebPushWidget>
);

describe("WebPushWidget", () => {
  it("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should pass all props down to amp-web-push-widget", () => {
    expect(wrapper.find("amp-web-push-widget").prop("visibility")).toBe("unsubscribed");
    expect(wrapper.find("button").text()).toBe("Click me");
    expect(wrapper.find("div").text()).toBe("I am WebPushWidget's child");
  });
});
