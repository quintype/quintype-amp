import React from "react";
import { GoogleTagManagerBase } from "./google-tag-manager";
import { shallow } from "enzyme";
import { Analytics } from "../analytics";

const config = {
  ampConfig: { "gtm-id": "GTM-1234" }
};
describe("Google Tag Manager", () => {
  it("should render", () => {
    const wrapper = shallow(<GoogleTagManagerBase config={config} />);
    expect(wrapper.find(Analytics).prop("config")).toEqual(
      "https://www.googletagmanager.com/amp.json?id=GTM-1234%s&gtm.url=SOURCE_URL"
    );
  });
  it("should have data-credentials prop", () => {
    const wrapper = shallow(<GoogleTagManagerBase config={config} />);
    expect(wrapper.find(Analytics).prop("data-credentials")).toEqual("include");
  });
});
