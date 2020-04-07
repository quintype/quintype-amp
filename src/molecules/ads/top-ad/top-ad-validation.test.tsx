/**
 * @jest-environment node
 */

import React from "react";
import { Layout } from "../../../atoms";
import { TopAd } from "../index";
import { textStory, config } from "../../../__fixtures__";
import { renderToString } from "../../../helpers";
import { isValidAmpHtml } from "../../../utils/validate-amp";

const output = async (layout) => {
  const ampHtml = renderToString(layout);
  if (ampHtml instanceof Error) throw ampHtml;
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

test("Default TopAd should pass ampValidation", async () => {
  const dummyLayout = (
    <Layout story={textStory} config={config}>
      <TopAd />
    </Layout>
  );
  expect(await output(dummyLayout)).toBe(true);
});
test("TopAd with valid custom ad attributes should pass ampValidation", async () => {
  const dummyLayout = (
    <Layout story={textStory} config={config}>
      <TopAd {...mockAd} />
    </Layout>
  );
  expect(await output(dummyLayout)).toBe(true);
});
test("TopAd with invalid custom ad attributes should pass ampValidation", async () => {
  const dummyLayout = (
    <Layout story={textStory} config={config}>
      <TopAd {...invalidMockAd} />
    </Layout>
  );
  expect(await output(dummyLayout)).toContain(
    "The attribute 'this-is-an-invalid-key-for-doubleclick-ads' may not appear in tag 'amp-ad'"
  );
});
test("TopAd with placeholder & fallback are expected to fail ampValidation", async () => {
  const dummyLayout = (
    <Layout story={textStory} config={config}>
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
