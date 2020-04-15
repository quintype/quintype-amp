/**
 * @jest-environment node
 */

import { renderToString } from "../helpers";
import { isValidAmpHtml } from "../utils/validate-amp";
import { textStory, config } from "../__fixtures__";
import { Navbar, HeaderCard } from "./index";
import React from "react";
import { Layout } from "../atoms";

const LayoutForNavbar = () => (
  <Layout story={textStory} config={config}>
    <Navbar />
  </Layout>
);
const LayoutForHeaderCard = () => (
  <Layout story={textStory} config={config}>
    <HeaderCard />
  </Layout>
);

describe("Molecules", () => {
  it("Navbar should render valid AMP Html", async () => {
    const { ampHtml } = renderToString(<LayoutForNavbar />);
    if (ampHtml instanceof Error) throw ampHtml;
    const ampValidatorOutput = await isValidAmpHtml(ampHtml);
    expect(ampValidatorOutput).toBe(true);
  });
  it("HeaderCard should render valid AMP Html", async () => {
    const { ampHtml } = renderToString(<LayoutForHeaderCard />);
    if (ampHtml instanceof Error) throw ampHtml;
    const ampValidatorOutput = await isValidAmpHtml(ampHtml);
    expect(ampValidatorOutput).toBe(true);
  });
});
