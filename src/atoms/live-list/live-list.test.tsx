/**
 * @jest-environment node
 */

import React from "react";
import { shallow } from "enzyme";
import { LiveListBase } from "./live-list";
import { liveBlogStory } from "../../__fixtures__";
import { ampifyStory } from "../../helpers";
import { publisherConfig, ampConfig } from "../../__fixtures__";
import { isValidAmpHtml } from "../../utils/validate-amp";

describe("LiveList", () => {
  it("should not add 'disabled' attribute on open live blog stories", () => {
    const activeLiveBlogStory = { ...liveBlogStory };
    activeLiveBlogStory.metadata["is-closed"] = false;
    const wrapper = shallow(
      <LiveListBase story={activeLiveBlogStory}>
        <div>foo</div>
      </LiveListBase>
    );
    expect(wrapper.find("amp-live-list").prop("disabled")).toBeUndefined();
  });
  it("should add 'disabled' attribute on closed live blog stories", () => {
    const activeLiveBlogStory = { ...liveBlogStory };
    activeLiveBlogStory.metadata["is-closed"] = true;
    const wrapper = shallow(
      <LiveListBase story={activeLiveBlogStory}>
        <div>foo</div>
      </LiveListBase>
    );
    expect(wrapper.find("amp-live-list").prop("disabled")).toBe("");
  });
  it("should render valid amp html", async () => {
    const activeLiveBlogStory = { ...liveBlogStory };
    activeLiveBlogStory.metadata["is-closed"] = false;
    const ampHtml = ampifyStory({
      story: activeLiveBlogStory,
      publisherConfig,
      ampConfig,
      opts: {},
      seo: `<link rel="canonical" href="." />`
    });
    const ampValidatorOutput = await isValidAmpHtml(ampHtml);
    expect(ampValidatorOutput).toBe(true);
  });
});
