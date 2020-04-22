import React from "react";
import { StoryElementProps } from "../types";
import { DailyMotionTypes } from "../../daily-motion/types";
import { DailyMotion } from "../../daily-motion";

type DailyMotionElementProps = StoryElementProps & Omit<DailyMotionTypes, "data-videoid">;

const DailyMotionElement = ({
  element,
  layout = "responsive",
  width = "16",
  height = "9",
  ...props
}: DailyMotionElementProps) => {
  const { metadata } = element;
  if (!(metadata && metadata["video-id"])) return null;

  return <DailyMotion data-videoid={metadata["video-id"]} layout={layout} width={width} height={height} {...props} />;
};

export { DailyMotionElement };
