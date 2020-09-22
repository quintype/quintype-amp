import React from "react";
import { HeroImage, HeroImageBase } from "./hero-image";
import { shallow } from "enzyme";
import { getFigcaptionText } from "./hero-image";
import { textStory, config } from "../../__fixtures__";

describe("HeroImage", () => {
  it("should render", () => {
    const wrapper = shallow(<HeroImageBase story={textStory} config={config} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render caption without HTML Tags", () => {
    // This test is incorrect
    const wrapper = shallow(
      <HeroImage caption="<p>Congress, AAP and AIMIM leaders</p>" attribution="<span>custom attribution</span>" />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("Should add data-hero attribute on amp-img so that amp optimizer will preload it", () => {
    const wrapper = shallow(<HeroImageBase story={textStory} config={config} />);
    expect(wrapper.find("amp-img").prop("data-hero")).toBe("true");
  });
});

test("getFigcaptionText should return caption and attribution", () => {
  const text = getFigcaptionText("img caption", "img attribution");
  expect(text).toBe("img caption | img attribution");
});
test("getFigcaptionText should return attribution", () => {
  const text = getFigcaptionText(null, "img attribution");
  expect(text).toBe("img attribution");
});
test("getFigcaptionText should return caption", () => {
  const text = getFigcaptionText("img caption", null);
  expect(text).toBe("img caption");
});
test("getFigcaptionText should return false", () => {
  const text = getFigcaptionText(null, null);
  expect(text).toBe(false);
});
test("getFigcaptionText should return caption and attribution without HTML Tags", () => {
  const text = getFigcaptionText("img caption", "img attribution");
  expect(text).toMatchSnapshot();
});
