import { AmpifyStoryTypes } from "./types";
import renderToString from "../render-to-string";
import { GenericStory } from "../../templates";
import get from "lodash.get";
import React from "react";

/**
 * The ampifyStory function is used behind the scenes by `quintype/framework`
 * It picks the correct story template and passes on control to <a href="global.html#renderToString">renderToString</a>
 *
 * @category Helper
 * @module AmpifyStory
 * @function ampifyStory
 * @param {Object} params object containing parameters
 * @param {Object} params.story story object
 * @param {Object} params.publisherConfig the publisher config - same as "/api/v1/config"
 * @param {Object} params.ampConfig AMP specific config coming from platform - same as "/api/v1/amp/config"
 * @param {Array} params.relatedStories [OPTIONAL] Related stories array
 * @param {String} params.seo [OPTIONAL] ready to use SEO string that can be put in the document head
 * @param {Object} params.opts [OPTIONAL] opts object containing customizations and configs
 * @param {Object} params.infiniteScrollInlineConfig [OPTIONAL] JSON inline config needed by infinite scroll
 * @returns {function} the renderToString function
 */

export function ampifyStory({
  story,
  publisherConfig,
  ampConfig,
  relatedStories,
  seo = "",
  opts = {},
  infiniteScrollInlineConfig
}: AmpifyStoryTypes) {
  const config = { publisherConfig, ampConfig, opts };
  const template = getTemplate({ story, config, relatedStories, infiniteScrollInlineConfig });
  return renderToString(template, seo);
}

const getTemplate = ({ story, config, relatedStories, infiniteScrollInlineConfig }) => {
  const storyType = get(story, "story-template");
  const customTemplate = get(config, ["opts", "templates", storyType], null);
  const propsForTemplate = {
    story,
    config,
    relatedStories,
    infiniteScrollInlineConfig
  };
  if (customTemplate) return customTemplate(propsForTemplate);

  switch (storyType) {
    default:
      return <GenericStory {...propsForTemplate} />;
  }
};
