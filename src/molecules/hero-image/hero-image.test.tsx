import React from "react";
import { HeroImage } from "./hero-image";
import { mount } from "enzyme";
import { getFigcaptionText } from "./hero-image";
import { textStory, config } from "../../__fixtures__";
import { Layout } from "../../atoms";

describe("HeroImage", () => {
  it("Should be at 1200px wide for SEO purposes", () => {
    const wrapper = mount(
      <Layout story={textStory} config={config}>
        <HeroImage />
      </Layout>
    );
    expect(wrapper.find("amp-img").prop("src")).toBe(
      "https://gumlet.assettype.com/barandbench%2F2020-02%2F43fb44c4-2028-4b90-95ad-dc54aad47a28%2FDiscover_Law_Logo_1.jpg?rect=0%2C0%2C2550%2C1162&w=1200&enlarge=true&format=auto"
    );
  });
  it("Should add data-hero attribute on amp-img so that amp optimizer will preload it", () => {
    const wrapper = mount(
      <Layout story={textStory} config={config}>
        <HeroImage />
      </Layout>
    );
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
