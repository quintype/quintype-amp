import React from "react";
import { StoryElementProps } from "../types";
import { DailyMotionTypes } from "../../daily-motion/types";
import { DailyMotion } from "../../daily-motion";
import { withStoryAndConfig } from "../../../context";
import get from "lodash.get";

type DailyMotionElementProps = StoryElementProps & Omit<DailyMotionTypes, "data-videoid">;

export const DailyMotionElementBase = ({
  element,
  layout = "responsive",
  width = "16",
  height = "9",
  story,
  config,
  ...props
}: DailyMotionElementProps) => {
  const { metadata } = element;
  const dailyMotionRender = get(config, ["opts", "render", "storyElementRender", "dailyMotionRender"], null);

  if (!(metadata && metadata["video-id"])) return null;

  return dailyMotionRender ? (
    dailyMotionRender({ story, config, element })
  ) : (
    <DailyMotion data-videoid={metadata["video-id"]} layout={layout} width={width} height={height} {...props} />
  );
};

/**
 * DailyMotionElement is a story element.
 * The look of the DailyMotionElement can be changed using the render prop dailyMotionRender. In case dailyMotionRender is passed in the config, it is rendered. Otherwise a default DailyMotionElement is rendered.
 *
 * @param {Object} params object containing parameters passed to the render prop
 * @param {Object} params.story story object
 * @param {Object} params.config config object
 * @param {Object} params.element the story element. This is same as the story element found in the story API response
 *
 * ```javascript
 * ...
 * ampRoutes(app, {
 *    dailyMotionRender: ({ story, config, element }) => <MyCustomDailyMotionElement story={story} config={config} storyElement={element} />
 * })
 * ...
 * ```
 *
 * @category StoryElements
 * @module DailyMotionElement
 * @component
 */

export const DailyMotionElement = withStoryAndConfig(DailyMotionElementBase);
