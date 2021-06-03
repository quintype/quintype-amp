import React from "react";
import { GoogleTagManagerBase } from "./google-tag-manager";
import { shallow } from "enzyme";
import { Analytics } from "../analytics";

const config = {
  ampConfig: { "gtm-id": "GTM-1234" }
};
const noGtmID = {
  ampConfig: {}
};
describe("Google Tag Manager", () => {
  it("should render", () => {
    const wrapper = shallow(<GoogleTagManagerBase config={config} />);
    expect(wrapper.find(Analytics).prop("config")).toEqual(
      "https://www.googletagmanager.com/amp.json?id=GTM-1234&gtm.url=SOURCE_URL"
    );
  });
  it("should have data-credentials prop", () => {
    const wrapper = shallow(<GoogleTagManagerBase config={config} />);
    expect(wrapper.find(Analytics).prop("data-credentials")).toEqual("include");
  });
  it("shouldn't render", () => {
    const wrapper = shallow(<GoogleTagManagerBase config={noGtmID} />);
    expect(wrapper.find(Analytics).length).toBe(0);
  });
});
