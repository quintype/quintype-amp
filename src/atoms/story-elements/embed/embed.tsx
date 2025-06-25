import React from "react";
import { StoryElementProps } from "../types";
import { Iframe } from "../../iframe";
import atob from "atob-utf-8";
import { withStoryAndConfig } from "../../../context";
import get from "lodash.get";

export const getIframeContent = (str, regex) => {
  if (/iframe/.test(str)) {
    const regExecArray = regex.exec(str);
    return regExecArray && regExecArray.length > 0 ? regExecArray[0] : null;
  }
  return null;
};

export const DefaultEmbed = ({ element }: StoryElementProps) => {
  console.log("element", element);
  const embedData = element["embed-js"] ? atob(element["embed-js"]) : "";
  const src = getIframeContent(embedData, /(?<=src=["']).*?(?=[*"'])/);
  const scrolling = getIframeContent(embedData, /(?<=scrolling=["']).*?(?=[*"'])/);
  const title = element.subtype || element.title || "";
  if (src) {
    return <Iframe src={src} scrolling={scrolling} title={title} />;
  } else if (embedData) {
    console.log("embedData", embedData);
    return <div dangerouslySetInnerHTML={{ __html: embedData }} />;
  }
  return null;
};

export const getIframeSourceURL = (str: string): string | null => {
  if (/iframe/.test(str)) {
    const regExecArray = /(?<=src=").*?(?=[*"])/.exec(str);
    return regExecArray && regExecArray.length > 0 ? regExecArray[0] : null;
  }
  return null;
};

export const EmbedBase = ({ element, story, config }: StoryElementProps) => {
  const embedRender = get(config, ["opts", "render", "storyElementRender", "embedRender"], null);
  return embedRender ? embedRender({ story, config, element }) : <DefaultEmbed element={element} />;
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
 *  render: {
 *    storyElementRender: {
 *      embedRender: ({ story, config, element }) => <MyCustomEmbed story={story} config={config} storyElement={element} />
 *    }
 *  }
 * })
 * ...
 * ```
 *
 * @category StoryElements
 * @module Embed
 * @component
 */

export const Embed = withStoryAndConfig(EmbedBase);
