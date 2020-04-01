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
  type: "a9",
  width: "300",
  height: "250",
  "data-amzn_assoc_ad_mode": "auto",
  "data-divid": "amzn-assoc-ad-fe746097-f142-4f8d-8dfb-45ec747632e5",
  "data-recomtype": "async",
  "data-adinstanceid": "fe746097-f142-4f8d-8dfb-45ec747632e5",
  "data-aax_size": "300x250",
  "data-aax_pubname": "test123",
  "data-aax_src": "302"
};

test("Default TopAd without placeholder & fallback should pass ampValidation", async () => {
  const dummyLayout = (
    <Layout story={textStory} config={config}>
      <TopAd />
    </Layout>
  );
  expect(await output(dummyLayout)).toBe(true);
});
test("TopAd with custom ad attributes and without placeholder & fallback should pass ampValidation", async () => {
  const dummyLayout = (
    <Layout story={textStory} config={config}>
      <TopAd {...mockAd} />
    </Layout>
  );
  expect(await output(dummyLayout)).toBe(true);
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
