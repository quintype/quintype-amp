/**
 * @jest-environment node
 */

import React from "react";
import { Layout, Link } from "../../../atoms";
import { TopAd } from "../top-ad";
import { BodyAd } from "../body-ad";
import { BottomAd } from "../bottom-ad";
import { textStory, config } from "../../../__fixtures__";
import { renderToString } from "../../../helpers";
import { isValidAmpHtml } from "../../../utils/validate-amp";

const output = async (layout) => {
  const ampHtml = renderToString(layout);
  const ampValidatorOutput = await isValidAmpHtml(ampHtml);
  return ampValidatorOutput;
};

const mockAd = {
  width: 720,
  height: 50,
  "data-slot": "/lorem/ipsum/dolor/sit"
};
const invalidMockAd = {
  width: 720,
  height: 50,
  "this-is-an-invalid-key-for-doubleclick-ads": "/lorem/ipsum/dolor/sit"
};

test("Default ads should pass ampValidation", async () => {
  const dummyLayout = (
    <Layout story={textStory} config={config}>
      <Link rel="canonical" href="." />
      <TopAd />
      <BodyAd />
      <BottomAd />
    </Layout>
  );
  expect(await output(dummyLayout)).toBe(true);
});
test("Ads with valid custom ad attributes should pass ampValidation", async () => {
  const dummyLayout = (
    <Layout story={textStory} config={config}>
      <Link rel="canonical" href="." />
      <TopAd {...mockAd} />
      <BodyAd {...mockAd} />
      <BottomAd {...mockAd} />
    </Layout>
  );
  expect(await output(dummyLayout)).toBe(true);
});
test("Ads with invalid custom ad attributes should fail ampValidation", async () => {
  const dummyLayout = (
    <Layout story={textStory} config={config}>
      <Link rel="canonical" href="." />
      <TopAd {...invalidMockAd} />
      <BodyAd {...invalidMockAd} />
      <BottomAd {...invalidMockAd} />
    </Layout>
  );
  expect(await output(dummyLayout)).toContain(
    "The attribute 'this-is-an-invalid-key-for-doubleclick-ads' may not appear in tag 'amp-ad'"
  );
});
test("TopAd with placeholder & fallback are expected to fail ampValidation", async () => {
  const dummyLayout = (
    <Layout story={textStory} config={config}>
      <Link rel="canonical" href="." />
      <TopAd>
        <div placeholder="true">Loading ...</div>
        <div fallback="true">Ad failed to load</div>
      </TopAd>
    </Layout>
  );
  expect(await output(dummyLayout)).toContain(
    "The attribute 'placeholder' in tag 'div' is set to the invalid value 'true'"
  );
  expect(await output(dummyLayout)).toContain(
    "The attribute 'fallback' in tag 'div' is set to the invalid value 'true'"
  );
});
