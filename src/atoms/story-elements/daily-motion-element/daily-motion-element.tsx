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
  const dailyMotionRender = get(config, ["opts", "storyElementRender", "dailyMotionRender"], null);

  if (!(metadata && metadata["video-id"])) return null;

  return dailyMotionRender ? (
    dailyMotionRender({ story, config })
  ) : (
    <DailyMotion data-videoid={metadata["video-id"]} layout={layout} width={width} height={height} {...props} />
  );
};

export const DailyMotionElement = withStoryAndConfig(DailyMotionElementBase);
