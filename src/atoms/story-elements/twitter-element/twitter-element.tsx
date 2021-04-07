import React from "react";
import { StoryElementProps } from "../types";
import { Twitter } from "../../twitter";
import { TwitterTypes } from "../../twitter/types";
import { withStoryAndConfig } from "../../../context";
import get from "lodash.get";

type TwitterElementProps = StoryElementProps & Omit<TwitterTypes, "data-tweetid">;

export const TwitterElementBase = ({ element, story, config, ...props }: TwitterElementProps) => {
  const { metadata } = element;
  const twitterElementRender = get(config, ["opts", "render", "storyElementRender", "twitterElementRender"], null);
  const title = element.subtype || element.title || "";
  if (!(metadata && metadata["tweet-id"])) return null;

  return twitterElementRender ? (
    twitterElementRender({ story, config, element })
  ) : (
    <Twitter data-tweetid={metadata["tweet-id"]} {...props} title={title} />
  );
};
/**
 * TwitterElement is a story element.
 * The look of the TwitterElement can be changed using the render prop twitterElementRender. In case twitterElementRender is passed in the config, it is rendered. Otherwise a default TwitterElement is rendered.
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
 *      twitterElementRender: ({ story, config, element }) => <MyCustomTwitterElement story={story} config={config} storyElement={element}  />
 *    }
 *  }
 * })
 * ...
 * ```
 *
 * @category StoryElements
 * @module TwitterElement
 * @component
 */
export const TwitterElement = withStoryAndConfig(TwitterElementBase);
