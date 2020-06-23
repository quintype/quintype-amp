import React from "react";
import { StoryElementProps } from "../types";
import { Iframe } from "../../iframe";
import atob from "atob";
import { withStoryAndConfig } from "../../../context";
import get from "lodash.get";

export const DefaultEmbed = ({ element }: StoryElementProps) => {
  const embedData = element["embed-js"] ? atob(element["embed-js"]) : "";
  const src = getIframeSourceURL(embedData);
  return src ? <Iframe src={src} /> : null;
};

export const getIframeSourceURL = (str: string): string | null => {
  if (/iframe/.test(str)) {
    const regExecArray = /(?<=src=").*?(?=[*"])/.exec(str);
    return regExecArray && regExecArray.length > 0 ? regExecArray[0] : null;
  }
  return null;
};

export const EmbedBase = ({ element, story, config }: StoryElementProps) => {
  const embedRender = get(config, ["opts", "storyElementRender", "embedRender"], null);
  return embedRender ? (
    embedRender({ story, config, element })
  ) : (
    <DefaultEmbed element={element} story={story} config={config} />
  );
};

/**
 * Embed is a story element.
 * The look of the Embed can be changed using the render prop embedRender. In case embedRender is passed in the config, it is rendered. Otherwise a default Embed is rendered.
 *
 * @param {Object} params object containing parameters passed to the render prop
 * @param {Object} params.story story object
 * @param {Object} params.config config object
 * @param {Object} params.element the story element. This is same as the story element found in the story API response
 *
 * ```javascript
 * ...
 * ampRoutes(app, {
 *    embedRender: ({ story, config, element }) => <MyCustomEmbed story={story} config={config} storyElement={element} />
 * })
 * ...
 * ```
 *
 * @category StoryElements
 * @module Embed
 * @component
 */

export const Embed = withStoryAndConfig(EmbedBase);
