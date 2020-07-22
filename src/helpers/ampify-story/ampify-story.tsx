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
 * @param {Object} params [mandatory] object containing parameters
 * @param {Object} params.story [mandatory] story object
 * @param {Object} params.publisherConfig [mandatory] the publisher config - same as "/api/v1/config"
 * @param {Object} params.ampConfig [mandatory] AMP specific config coming from platform - same as "/api/v1/amp/config"
 * @param {String} params.seo ready to use SEO string that can be put in the document head
 * @param {Object} params.opts opts object containing customizations and configs
 * @param {Object} params.opts.templates object containing custom templates. Keys are template names and values are functions (render props) returning react component template
 * @param {Object} params.opts.slots object containing slots
 * @param {Object} params.opts.slots.story story page slots
 * @param {function} params.opts.slots.story.top-slot render prop for story page top-slot
 * @param {function} params.opts.slots.story.bottom-slot render prop for story page bottom-slot
 * @param {Object} params.opts.render object containing render props that override existing components
 * @param {function} params.opts.render.headerCardRender
 * @param {function} params.opts.render.relatedStoriesRender
 * @param {function} params.opts.render.infiniteScrollRender
 * @param {Object} params.opts.render.storyElementRender Object containing renders for story elements
 * @param {function} params.opts.render.storyElementRender.bigfactElementRender
 * @param {function} params.opts.render.storyElementRender.answerElementRender
 * @param {function} params.opts.render.storyElementRender.questionElementRender
 * @param {function} params.opts.render.storyElementRender.summaryElementRender
 * @param {function} params.opts.render.storyElementRender.textElementRender
 * @param {function} params.opts.render.storyElementRender.youtubeElementRender
 * @param {function} params.opts.render.storyElementRender.vidibleElementRender
 * @param {function} params.opts.render.storyElementRender.twitterElementRender
 * @param {function} params.opts.render.storyElementRender.titleElementRender
 * @param {function} params.opts.render.storyElementRender.instagramElementRender
 * @param {function} params.opts.render.storyElementRender.imageGalleryElementRender
 * @param {function} params.opts.render.storyElementRender.imageElementRender
 * @param {function} params.opts.render.storyElementRender.facebookElementRender
 * @param {function} params.opts.render.storyElementRender.embedRender
 * @param {function} params.opts.render.storyElementRender.dailyMotionRender
 * @param {function} params.opts.render.storyElementRender.blockquoteRender
 * @param {function} params.opts.render.storyElementRender.blurbRender
 * @param {function} params.opts.render.storyElementRender.alsoReadRender
 * @param {Object} params.opts.featureConfig config for amp lib features
 * @param {Array} params.opts.featureConfig.relatedStories Related stories array
 * @param {String} params.opts.featureConfig.infiniteScrollInlineConfig JSON inline config needed by infinite scroll
 * @returns {function} the renderToString function
 */

export function ampifyStory({ story, publisherConfig, ampConfig, seo = "", opts = {} }: AmpifyStoryTypes) {
  const config = { publisherConfig, ampConfig, opts };
  const template = getTemplate({ story, config, seo });
  return renderToString(template, seo);
}

const getTemplate = ({ story, config, seo }) => {
  const storyType = story["story-template"];
  const customTemplate = get(config, ["opts", "templates", storyType], null);
  if (customTemplate) return customTemplate({ story, config, seo });

  switch (storyType) {
    default:
      return <GenericStory story={story} config={config} />;
  }
};
