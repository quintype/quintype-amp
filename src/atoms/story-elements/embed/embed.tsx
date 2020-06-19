import React from "react";
import { StoryElementProps } from "../types";
import { Iframe } from "../../iframe";
import atob from "atob";
import { withStoryAndConfig } from "../../../context";
import { CommonRenderPropTypes } from "../../../types/config";

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

export const EmbedBase = ({ element, story, config }: StoryElementProps & CommonRenderPropTypes) => {
  return config.opts && config.opts.storyElementRender && config.opts.storyElementRender.embedRender ? (
    config.opts.storyElementRender.embedRender({ story, config })
  ) : (
    <DefaultEmbed element={element} story={story} config={config} />
  );
};
export const Embed = withStoryAndConfig(EmbedBase);
