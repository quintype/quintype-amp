import React, { Fragment } from "react";
import get from "lodash.get";
import Helmet from "react-helmet";
import { withStoryAndConfig } from "../../../context";
import { StoryElementProps } from "../types";
import { TiktokTypes } from "./types";

type TiktokElementProps = StoryElementProps & Omit<TiktokTypes, "data-src">;

export const Tiktok = (props: TiktokTypes) => {
  const { width, height } = props;
  const setDefaultLayout = !width || !height;
  const componentProps: TiktokTypes = setDefaultLayout
    ? {
        ...props,
        width: "325",
        height: "575"
      }
    : props;

  return (
    <Fragment>
      <Helmet>
        <script async={undefined} custom-element="amp-tiktok" src="https://cdn.ampproject.org/v0/amp-tiktok-0.1.js" />
      </Helmet>
      <amp-tiktok {...componentProps} />
    </Fragment>
  );
};

export const TiktokElementBase = ({ element, story, config, ...props }: TiktokElementProps) => {
  const { metadata } = element;
  const tiktokElementRender = get(config, ["opts", "render", "storyElementRender", "tiktokElementRender"], null);
  if (!(metadata && metadata["tiktok-video-id"])) return null;

  return tiktokElementRender ? (
    tiktokElementRender({ story, config, element })
  ) : (
    <Tiktok data-src={metadata["tiktok-video-id"]} {...props} />
  );
};
/**
 * TiktokElement is a story element.
 * The look of the TiktokElement can be changed using the render prop tiktokElementRender. In case tiktokElementRender is passed in the config, it is rendered. Otherwise a default TiktokElement is rendered.
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
 *    tiktokElementRender: ({ story, config, element }) => <MyCustomTiktokElement story={story} config={config} storyElement={element}  />
 *    }
 *  }
 * })
 * ...
 * ```
 *
 * @category StoryElements
 * @module TiktokElement
 * @component
 */
export const TiktokElement = withStoryAndConfig(TiktokElementBase);
