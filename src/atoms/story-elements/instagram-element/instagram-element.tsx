import React from "react";
import { StoryElementProps } from "../types";
import { InstagramTypes } from "../../instagram/types";
import { Instagram } from "../../instagram";
import { withStoryAndConfig } from "../../../context";
import get from "lodash.get";
type InstagramElementProps = StoryElementProps & Omit<InstagramTypes, "data-shortcode">;

const getInstagramID = (url: string, isReelSupported: boolean) => {
  const instagramEmbedRegex = isReelSupported
    ? /instagram\.com\/(?:p|reel)\/([^#\&\?\/]+)/
    : /instagram\.com\/p\/([^#\&\?]*)\//;
  const exec = instagramEmbedRegex.exec(url);
  return exec ? exec[1] : null;
};

export const DefaultInstagramElement = ({
  element,
  layout = "responsive",
  width = "16",
  height = "9",
  isReelSupported = false,
  config,
  ...props
}: InstagramElementProps) => {
  const { metadata } = element;
  let instagramID: string | null = null;

  if (metadata && metadata["instagram-id"]) {
    instagramID = metadata["instagram-id"];
  } else if (metadata && metadata["instagram-url"]) {
    instagramID = getInstagramID(metadata["instagram-url"], isReelSupported);
  }
  return instagramID ? (
    <Instagram data-shortcode={instagramID} layout={layout} width={width} height={height} {...props} config={config} />
  ) : null;
};

export const InstagramElementBase = ({ element, story, config }: StoryElementProps) => {
  const instagramElementRender = get(config, ["opts", "render", "storyElementRender", "instagramElementRender"], null);
  const isReelSupported = get(config, ["opts", "featureConfig", "isInstagramReelSupported"], false);
  return instagramElementRender ? (
    instagramElementRender({ story, config, element })
  ) : (
    <DefaultInstagramElement element={element} isReelSupported={isReelSupported} config={config} />
  );
};
/**
 * InstagramElement is a story element.
 * The look of the InstagramElement can be changed using the render prop instagramElementRender. In case instagramElementRender is passed in the config, it is rendered. Otherwise a default InstagramElement is rendered.
 *
 * @param {Object} params object containing parameters passed to the render prop
 * @param {Object} params.story story object
 * @param {Object} params.config config object
 * @param {Object} params.element the story element. This is same as the story element found in the story API response
 *
 * ```javascript
 * ...
 * ampRoutes(app, {
 *  render: {
 *    storyElementRender: {
 *      instagramElementRender: ({ story, config, element }) => <MyCustomInstagramElement story={story} config={config} storyElement={element} />
 *    }
 *  }
 * })
 * ...
 * ```
 *
 * @category StoryElements
 * @module InstagramElement
 * @component
 */
export const InstagramElement = withStoryAndConfig(InstagramElementBase);
