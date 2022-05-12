/**
 * @jest-environment node
 */

import React from "react";
import { liveBlogStory, config, publisherConfig, ampConfig } from "../../__fixtures__";
import { ampifyStory } from "../../helpers";
import { isValidAmpHtml } from "../../utils/validate-amp";
import { shallow } from "enzyme";
import { LiveBlog } from "./live-blog";

describe("The LiveBlog Default Template", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<LiveBlog story={liveBlogStory} config={config} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render valid amp html for a live blog story", async () => {
    const ampHtml = ampifyStory({
      story: liveBlogStory,
      publisherConfig,
      ampConfig,
      opts: config.opts,
      seo: `<link rel="canonical" href="." />`,
      additionalConfig: null
    });
    const ampValidatorOutput = await isValidAmpHtml(ampHtml);
    expect(ampValidatorOutput).toBe(true);
  });
});
