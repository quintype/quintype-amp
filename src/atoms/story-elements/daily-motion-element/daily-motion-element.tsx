import React from "react";
import { StoryElementProps } from "../types";
import { DailyMotionTypes } from "../../daily-motion/types";
import { DailyMotion } from "../../daily-motion";
import { CommonRenderPropTypes } from "../../../types/config";
import { withStoryAndConfig } from "../../../context";

type DailyMotionElementProps = StoryElementProps & Omit<DailyMotionTypes, "data-videoid">;

export const DailyMotionElementBase = ({
  element,
  layout = "responsive",
  width = "16",
  height = "9",
  story,
  config,
  ...props
}: DailyMotionElementProps & CommonRenderPropTypes) => {
  const { metadata } = element;
  if (!(metadata && metadata["video-id"])) return null;

  return config.opts && config.opts.dailyMotionRender ? (
    config.opts.dailyMotionRender({ story, config })
  ) : (
    <DailyMotion data-videoid={metadata["video-id"]} layout={layout} width={width} height={height} {...props} />
  );
};

export const DailyMotionElement = withStoryAndConfig(DailyMotionElementBase);
