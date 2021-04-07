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
  const facebookElementRender = get(config, ["opts", "render", "storyElementRender", "facebookElementRender"], null);
  const title = element.subtype || element.title || "";
  if (!(metadata && metadata.provider && metadata["facebook-url"])) {
    return null;
  }
  return facebookElementRender ? (
    facebookElementRender({ story, config, element })
  ) : (
    <Facebook
      data-href={metadata["facebook-url"]}
      data-embed-as={embedAs[metadata.provider]}
      title={title}
      {...props}
    />
  );
};

/**
 * FacebookElement is a story element.
 * The look of the FacebookElement can be changed using the render prop facebookElementRender. In case facebookElementRender is passed in the config, it is rendered. Otherwise a default FacebookElement is rendered.
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
 *      facebookElementRender: ({ story, config, element }) => <MyCustomFacebookElement story={story} config={config} storyElement={element} />
 *    }
 *  }
 * })
 * ...
 * ```
 *
 * @category StoryElements
 * @module FacebookElement
 * @component
 */

export const FacebookElement = withStoryAndConfig(FacebookElementBase);
