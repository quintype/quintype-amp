import React from "react";
import { HeroImage } from "./hero-image";
import { shallow } from "enzyme";
import { getFigcaptionText } from "./hero-image";

describe("HeroImage", () => {
  it("should render", () => {
    const wrapper = shallow(<HeroImage />);
    expect(wrapper).toMatchSnapshot();
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
