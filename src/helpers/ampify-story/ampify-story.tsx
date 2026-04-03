import { AmpifyStoryTypes } from "./types";
import renderToString from "../render-to-string";
import { GenericStory, LiveBlog } from "../../templates";
import get from "lodash.get";
import React from "react";
import { VisualStory } from "../../templates/visual-story/visual-story";
import { Story } from "../../types/story";

/**
 * isVisualStory checks if a story is a visual story based on its story-template field.
 * This can be used by the framework to route visual stories to the appropriate
 * AMP-based preview handler instead of the generic story page renderer.
 *
 * @category Helper
 * @module isVisualStory
 * @function isVisualStory
 * @param {Object} story the story object
 * @returns {boolean} true if the story is a visual story
 */
export const isVisualStory = (story: Story): boolean => {
  return story["story-template"] === "visual-story";
};

/**
 * The ampifyStory function is used behind the scenes by `quintype/framework`
 * It picks the correct story template and passes on control to <a href="global.html#renderToString">renderToString</a>
 *
 * @category Helper
 * @module AmpifyStory
 * @function ampifyStory
 * @param {Object} params [mandatory] object containing parameters
 * @param {Object} params.story [mandatory] story object
 * @param {Object} params.publisherConfig [mandatory] the publisher config - same as "/api/v1/config"
 * @param {Object} params.ampConfig [mandatory] AMP specific config coming from platform - same as "/api/v1/amp/config"
 * @param {String} params.seo ready to use SEO string that can be put in the document head
 * @param {Object} params.opts opts object containing customizations and configs
 * @returns {function} the renderToString function
 */
export function ampifyStory({
  story,
  publisherConfig,
  ampConfig,
  additionalConfig,
  seo = "",
  opts = {}
}: AmpifyStoryTypes) {
  const config = { publisherConfig, ampConfig, opts, additionalConfig };
  const template = getTemplate({ story, config, seo });
  return renderToString({ template, seo, config, story });
}

const getTemplate = ({ story, config, seo }) => {
  const storyType = story["story-template"];
  const customTemplate = get(config, ["opts", "templates", storyType], null);
  if (customTemplate) return customTemplate({ story, config, seo });

  switch (storyType) {
    case "visual-story":
      return <VisualStory story={story} config={config} />;
    case "live-blog":
      return <LiveBlog story={story} config={config} />;
    default:
      return <GenericStory story={story} config={config} />;
  }
};
