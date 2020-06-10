/**
 * @jest-environment node
 */

// FYI mount wont work here as this runs in node env
import { getTargetingInfo } from "./helpers";
import { shallow } from "enzyme";
import { DfpAd } from "./dfp-ad";
import React from "react";

describe("dfp-ad component", () => {
  it("Should match snapshot", () => {
    const wrapper = shallow(<DfpAd />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render dfp with custom styles", () => {
    const wrapper = shallow(<DfpAd inlineStyles={{ border: "2px solid red" }} />);
    expect(wrapper.find("div").prop("style")).toStrictEqual({ border: "2px solid red" });
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
