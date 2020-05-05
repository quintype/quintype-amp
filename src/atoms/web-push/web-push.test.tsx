import React from "react";
import { WebPush } from "./web-push";
import { shallow } from "enzyme";

const wrapper = shallow(
  <WebPush
    layout="nodisplay"
    helper-iframe-url="https://foo.com/a"
    permission-dialog-url="https://foo.com/b"
    service-worker-url="https://foo.com/c"
  />
);

describe("WebPush", () => {
  it("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should pass all props down to amp-web-push", () => {
    expect(wrapper.find("amp-web-push").prop("layout")).toBe("nodisplay");
    expect(wrapper.find("amp-web-push").prop("helper-iframe-url")).toBe("https://foo.com/a");
    expect(wrapper.find("amp-web-push").prop("permission-dialog-url")).toBe("https://foo.com/b");
    expect(wrapper.find("amp-web-push").prop("service-worker-url")).toBe("https://foo.com/c");
  });
});
