import React, { Fragment } from "react";
import Helmet from "react-helmet";
import { withStoryAndConfig } from "../../../context";
import get from "lodash.get";
import { BrightcoveElementTypes, DefaultBrightcoveElementTypes } from "./types";

export const DefaultBrightcove = ({
  element,
  layout = "responsive",
  width = "480",
  height = "270"
}: DefaultBrightcoveElementTypes) => {
  return (
    <Fragment>
      <Helmet>
        <script async custom-element="amp-brightcove" src="https://cdn.ampproject.org/v0/amp-brightcove-0.1.js" />
      </Helmet>
      <amp-brightcove
        data-account={get(element, ["metadata", "account-id"])}
        data-player={get(element, ["metadata", "player-id"])}
        data-embed="default"
        data-video-id={get(element, ["metadata", "video-id"])}
        layout={layout}
        width={width}
        height={height}
      />
    </Fragment>
  );
};
export const BrightcoveBase = ({ element, story, config }: BrightcoveElementTypes) => {
  const brightcoveElementRender = get(
    config,
    ["opts", "render", "storyElementRender", "brightcoveElementRender"],
    null
  );

  return brightcoveElementRender ? (
    brightcoveElementRender({ story, config, element })
  ) : (
    <DefaultBrightcove element={element} />
  );
};
/**
 * Brightcove is a story element.
 * The look of the Brightcove can be changed using the render prop BrightcoveElementRender. In case BrightcoveElementRender is passed in the config, it is rendered. Otherwise a default Brightcove is rendered.
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
 *      brightcoveElementRender: ({ story, config, element }) => <MyCustomBrightcove story={story} config={config} storyElement={element} />
 *    }
 *  }
 * })
 * ...
 * ```
 *
 * @category StoryElements
 * @module Brightcove
 * @component
 */
export const Brightcove = withStoryAndConfig(BrightcoveBase);
