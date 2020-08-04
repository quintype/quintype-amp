/**
 * @jest-environment node
 */

// FYI mount wont work here as this runs in node env
// NOTE: Ignore the Warning: Invalid DOM property `crossorigin`. Did you mean `crossOrigin`? It's is an issue with react
import { getTargetingInfo } from "./helpers";
import { shallow } from "enzyme";
import { DfpAd, DfpAdBase } from "./dfp-ad";
import React from "react";
import { textStory, config } from "../../__fixtures__";

describe("dfp-ad component", () => {
  it("Should match snapshot", () => {
    const wrapper = shallow(<DfpAd />);
    expect(wrapper).toMatchSnapshot();
  });
  it("Should prefetch amp-ad script if prefetchScript attr is true", () => {
    const wrapper = shallow(
      <DfpAdBase prefetchScript={true} story={textStory} config={config} width={1} height={2} data-slot="foo" />
    );
    expect(wrapper.find("link").html()).toBe(
      `<link rel="dns-prefetch" href="https://cdn.ampproject.org/v0/amp-ad-0.1.js" crossorigin="anonymous"/>`
    );
    expect(wrapper.find("link").prop("crossorigin")).toBe("anonymous");
  });
  it("Should not prefetch amp-ad script if prefetchScript attr is not given", () => {
    const wrapper = shallow(<DfpAdBase story={textStory} config={config} width={1} height={2} data-slot="foo" />);
    expect(wrapper.find("link").exists()).toBeFalsy();
  });
});
test("getTargetingInfo helper", async () => {
  const dummyStory = {
    sections: [{ slug: "news" }, { slug: "politics" }]
  };
  const dummyConfig = {
    publisherConfig: {
      env: "staging",
      "publisher-name": "Arnab Goswami's Republic TV"
    }
  };
  const targetingJson = getTargetingInfo({ story: dummyStory, config: dummyConfig });
  const obj = {
    targeting: {
      environment: ["staging"],
      "publisher-name": ["Arnab Goswami's Republic TV"],
      sections: ["news", "politics"]
    }
  };
  expect(JSON.parse(targetingJson)).toMatchObject(obj);
});
