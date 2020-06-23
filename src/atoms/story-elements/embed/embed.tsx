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
    embedRender({ story, config })
  ) : (
    <DefaultEmbed element={element} story={story} config={config} />
  );
};

/**
 * Embed is a story element.
 * The look of the Embed can be changed using the render prop embedRender. In case embedRender is passed in the config, it is rendered. Otherwise a default Embed is rendered.
 *
 * ```javascript
 * ...
 * ampRoutes(app, {
 *    embedRender: ({ story, config }) => <MyCustomEmbed story={story} config={config} />
 * })
 * ...
 * ```
 *
 * @category StoryElements
 * @module Embed
 * @component
 */

export const Embed = withStoryAndConfig(EmbedBase);
