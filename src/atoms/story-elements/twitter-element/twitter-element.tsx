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
/**
 * TwitterElement is a story element.
 * The look of the TwitterElement can be changed using the render prop twitterElementRender. In case twitterElementRender is passed in the config, it is rendered. Otherwise a default TwitterElement is rendered.
 *
 * ```javascript
 * ...
 * ampRoutes(app, {
 *    twitterElementRender: ({ story, config }) => <MyCustomTwitterElement story={story} config={config} />
 * })
 * ...
 * ```
 *
 * @category StoryElements
 * @module TwitterElement
 * @component
 */
export const TwitterElement = withStoryAndConfig(TwitterElementBase);
