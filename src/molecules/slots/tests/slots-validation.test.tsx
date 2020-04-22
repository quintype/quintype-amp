/**
 * @jest-environment node
 */

import React from "react";
import { Layout, Link } from "../../../atoms";
import { TopSlot } from "../story-page-slots/top-slot";
import { BottomSlot } from "../story-page-slots/bottom-slot";
import { textStory, config } from "../../../__fixtures__";
import { renderToString } from "../../../helpers";
import { isValidAmpHtml } from "../../../utils/validate-amp";

const output = async (layout) => {
  const ampHtml = renderToString(layout);
  if (ampHtml instanceof Error) throw ampHtml;
  const ampValidatorOutput = await isValidAmpHtml(ampHtml);
  return ampValidatorOutput;
};

test("Slots should pass ampValidation", async () => {
  const dummyLayout = (
    <Layout story={textStory} config={config}>
      <Link rel="canonical" href="." />
      <TopSlot />
      <BottomSlot />
    </Layout>
  );
  expect(await output(dummyLayout)).toBe(true);
});
