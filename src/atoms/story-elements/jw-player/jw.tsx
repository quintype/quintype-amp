import React, { Fragment } from "react";
import Helmet from "react-helmet";
import { withStoryAndConfig } from "../../../context";
import get from "lodash.get";
import { Common } from "../../../atoms/common-types";
import { Config } from "../../../types/config";
import { Story, StoryElement } from "../../../types/story";

export interface JwElementTypes {
  story: Story;
  config: Config;
  element: StoryElement;
}

export interface DefaultJwTypes extends Common {
  element: StoryElement;
}

export const DefaultJwPlayer = ({ element, layout = "responsive", width = "16", height = "9" }: DefaultJwTypes) => {
  const { "player-id": playerId, "video-id": videoId } = get(element, ["metadata"], {}) || {};

  if (!playerId || !videoId) {
    return null;
  }

  return (
    <Fragment>
      <Helmet>
        <script async custom-element="amp-jwplayer" src="https://cdn.ampproject.org/v0/amp-jwplayer-0.1.js" />
      </Helmet>
      <amp-jwplayer data-player-id={playerId} data-media-id={videoId} layout={layout} width={width} height={height} />
    </Fragment>
  );
};

export const JwPlayerBase = ({ element, story, config }: JwElementTypes) => {
  const jwPlayerElementRender = get(config, ["opts", "render", "storyElementRender", "jwPlayerElementRender"], null);

  return jwPlayerElementRender ? (
    jwPlayerElementRender({ story, config, element })
  ) : (
    <DefaultJwPlayer element={element} />
  );
};

/**
 * JwPlayer is a story element.
 * The look of the JwPlayer can be changed using the render prop jwPlayerElementRender. In case jwPlayerElementRender is passed in the config, it is rendered. Otherwise a default JwPlayer is rendered.
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
 *      jwPlayerElementRender: ({ story, config, element }) => <MyCustomJwPlayer story={story} config={config} storyElement={element} />
 *    }
 *  }
 * })
 * ...
 * ```
 *
 * @category StoryElements
 * @module JwPlayer
 * @component
 */
export const JwPlayer = withStoryAndConfig(JwPlayerBase);
