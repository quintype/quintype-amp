import React from "react";
import { StoryElementProps } from "../types";
import { InstagramTypes } from "../../instagram/types";
import { Instagram } from "../../instagram";
import { withStoryAndConfig } from "../../../context";
import { CommonRenderPropTypes } from "../../../types/config";

type InstagramElementProps = StoryElementProps & Omit<InstagramTypes, "data-shortcode">;

const getInstagramID = (url: string) => {
  const exec = /instagram\.com\/p\/([^#\&\?]*)\//.exec(url);
  return exec ? exec[1] : null;
};

export const DefaultInstagramElement = ({
  element,
  layout = "responsive",
  width = "16",
  height = "9",
  ...props
}: InstagramElementProps) => {
  const { metadata } = element;
  let instagramID: string | null = null;

  if (metadata && metadata["instagram-id"]) {
    instagramID = metadata["instagram-id"];
  } else if (metadata && metadata["instagram-url"]) {
    instagramID = getInstagramID(metadata["instagram-url"]);
  }
  return instagramID ? (
    <Instagram data-shortcode={instagramID} layout={layout} width={width} height={height} {...props} />
  ) : null;
};

export const InstagramElementBase = ({ element, story, config }: StoryElementProps & CommonRenderPropTypes) => {
  return config.opts && config.opts.storyElementRender ? (
    config.opts.storyElementRender({ story, config })
  ) : (
    <DefaultInstagramElement element={element} story={story} config={config} />
  );
};
export const InstagramElement = withStoryAndConfig(InstagramElementBase);
