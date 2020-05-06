import React from "react";
import { WebEngageBase } from "./webengage";
import { shallow } from "enzyme";
import { config } from "../../__fixtures__";
import cloneDeep from "lodash.clonedeep";
import { WebPush, WebPushWidget, WebengageSubscribeButton } from "../../atoms";

const configWithoutWebEngage = cloneDeep(config);
delete configWithoutWebEngage.ampConfig.webengage;

describe("Webengage", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<WebEngageBase config={config} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render webengage component if valid config for it is provided", () => {
    const wrapper = shallow(<WebEngageBase config={config} />);
    expect(wrapper.find("amp-analytics[type='webengage'] script").children()).toHaveLength(1);
    expect(wrapper.find(WebPush).prop("helper-iframe-url")).toBe(
      "https://www.vikatan.com/api/amp-web-push-helper-frame.html?version=1"
    );
    expect(wrapper.find(WebPush).prop("permission-dialog-url")).toBe(
      "https://www.vikatan.com/api/amp-permission-dialog-web-engage.html?version=1"
    );
    expect(wrapper.find(WebPush).prop("service-worker-url")).toBe(
      "https://www.vikatan.com/api/amp-service-worker-web-engage.js?licensecode=~134105365&version=1"
    );
    expect(wrapper.find(WebPushWidget).children()).toHaveLength(1);
  });
  it("should not render webengage component if config not provided", () => {
    const wrapper = shallow(<WebEngageBase config={configWithoutWebEngage} />);
    expect(wrapper.find(WebPush).exists()).toBeFalsy();
    expect(wrapper.find(WebPushWidget).exists()).toBeFalsy();
  });
  it("should pass custom text down to button", () => {
    const wrapper = shallow(<WebEngageBase config={config} buttonText="lorem ipsum" />);
    expect(wrapper.find(WebengageSubscribeButton).prop("text")).toBe("lorem ipsum");
  });
});
