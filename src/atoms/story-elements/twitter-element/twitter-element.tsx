import React from "react";
import { StoryElementProps } from "../types";
import { Twitter } from "../../twitter";
import { TwitterTypes } from "../../twitter/types";
import { withStoryAndConfig } from "../../../context";
import { CommonRenderPropTypes } from "../../../types/config";

type TwitterElementProps = StoryElementProps & Omit<TwitterTypes, "data-tweetid">;

export const TwitterElementBase = ({
  element,
  story,
  config,
  ...props
}: TwitterElementProps & CommonRenderPropTypes) => {
  const { metadata } = element;
  if (!(metadata && metadata["tweet-id"])) return null;

  return config.opts && config.opts.twitterElementRender ? (
    config.opts.twitterElementRender({ story, config })
  ) : (
    <Twitter data-tweetid={metadata["tweet-id"]} {...props} />
  );
};

export const TwitterElement = withStoryAndConfig(TwitterElementBase);
