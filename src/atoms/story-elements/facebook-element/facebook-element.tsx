import React from "react";
import { StoryElementProps } from "../types";
import { Facebook } from "../../facebook";
import { FacebookTypes } from "../../facebook/types";
import { withStoryAndConfig } from "../../../context";
import get from "lodash.get";

type FacebookElementProps = StoryElementProps & Omit<FacebookTypes, "data-href" | "data-embed-as">;

const embedAs = {
  "facebook-post": "post",
  "facebook-video": "video"
};

export const FacebookElementBase = ({ element, story, config, ...props }: FacebookElementProps) => {
  const { metadata } = element;
  const facebookElementRender = get(config, ["opts", "storyElementRender", "facebookElementRender"], null);

  if (!(metadata && metadata.provider && metadata["facebook-url"])) {
    return null;
  }
  return facebookElementRender ? (
    facebookElementRender({ story, config })
  ) : (
    <Facebook data-href={metadata["facebook-url"]} data-embed-as={embedAs[metadata.provider]} {...props} />
  );
};

/**
 * FacebookElement is a story element.
 * The look of the FacebookElement can be changed using the render prop facebookElementRender. In case facebookElementRender is passed in the config, it is rendered. Otherwise a default FacebookElement is rendered.
 *
 * ```javascript
 * ...
 * ampRoutes(app, {
 *    facebookElementRender: ({ story, config }) => <MyCustomFacebookElement story={story} config={config} />
 * })
 * ...
 * ```
 *
 * @category StoryElements
 * @module FacebookElement
 * @component
 */

export const FacebookElement = withStoryAndConfig(FacebookElementBase);
