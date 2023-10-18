import React, { Fragment } from "react";
import getYouTubeID from "@rvgpl/get-youtube-id";
import Helmet from "react-helmet";
import { withStoryAndConfig } from "../../../context";
import get from "lodash.get";
import { YoutubeElementTypes, DefaultYoutubeElementTypes } from "./types";

export const DefaultYouTube = ({
  element,
  layout = "responsive",
  width = "480",
  height = "270"
}: DefaultYoutubeElementTypes) => {
  const youtubeID = element.url && getYouTubeID(element.url);

  if (!youtubeID) {
    return null;
  }

  return (
    <Fragment>
      <Helmet>
        <script async={undefined} custom-element="amp-youtube" src="https://cdn.ampproject.org/v0/amp-youtube-0.1.js" />
      </Helmet>
      <amp-youtube data-videoid={youtubeID} layout={layout} width={width} height={height}>
      {/* <amp-img
        src={`https://i.ytimg.com/vi/${youtubeID}/hqdefault_live.jpg`}
        placeholder={true}
        layout="fill"
      /> */}
      </amp-youtube>
    </Fragment>
  );
};
export const YouTubeBase = ({ element, story, config }: YoutubeElementTypes) => {
  const youtubeElementRender = get(config, ["opts", "render", "storyElementRender", "youtubeElementRender"], null);

  return youtubeElementRender ? youtubeElementRender({ story, config, element }) : <DefaultYouTube element={element} />;
};
/**
 * YouTube is a story element.
 * The look of the YouTube can be changed using the render prop youtubeElementRender. In case youtubeElementRender is passed in the config, it is rendered. Otherwise a default YouTube is rendered.
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
 *      youtubeElementRender: ({ story, config, element }) => <MyCustomYouTube story={story} config={config} storyElement={element} />
 *    }
 *  }
 * })
 * ...
 * ```
 *
 * @category StoryElements
 * @module YouTube
 * @component
 */
export const YouTube = withStoryAndConfig(YouTubeBase);
