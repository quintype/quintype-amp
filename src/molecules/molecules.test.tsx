/**
 * @jest-environment node
 */

import { renderToString } from "../helpers";
import { isValidAmpHtml } from "../utils/validate-amp";
import { textStory, config } from "../__fixtures__";
import { HeaderCard } from "./index";
import React from "react";
import { Layout, Link } from "../atoms";

const LayoutForHeaderCard = () => (
  <Layout story={textStory} config={config}>
    <Link rel="canonical" href="." />
    <HeaderCard />
  </Layout>
);

describe("Molecules", () => {
  it("HeaderCard should render valid AMP Html", async () => {
    const ampHtml = renderToString(<LayoutForHeaderCard />);
    const ampValidatorOutput = await isValidAmpHtml(ampHtml);
    expect(ampValidatorOutput).toBe(true);
  });
});
