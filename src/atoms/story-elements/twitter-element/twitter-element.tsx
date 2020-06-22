import React from "react";
import { StoryElementProps } from "../types";
import { Twitter } from "../../twitter";
import { TwitterTypes } from "../../twitter/types";
import { withStoryAndConfig } from "../../../context";
import get from "lodash.get";

type TwitterElementProps = StoryElementProps & Omit<TwitterTypes, "data-tweetid">;

export const TwitterElementBase = ({ element, story, config, ...props }: TwitterElementProps) => {
  const { metadata } = element;
  const twitterElementRender = get(config, ["opts", "storyElementRender", "twitterElementRender"], null);

  if (!(metadata && metadata["tweet-id"])) return null;

  return twitterElementRender ? (
    twitterElementRender({ story, config })
  ) : (
    <Twitter data-tweetid={metadata["tweet-id"]} {...props} />
  );
};

export const TwitterElement = withStoryAndConfig(TwitterElementBase);
