import React from "react";
import { StoryElementProps } from "../types";
import { InstagramTypes } from "../../instagram/types";
import { Instagram } from "../../instagram";

type InstagramElementProps = StoryElementProps & Omit<InstagramTypes, "data-shortcode">;

const getInstagramID = (url: string) => {
  const exec = /instagram\.com\/p\/([^#\&\?]*)\//.exec(url);
  return exec ? exec[1] : null;
};

const InstagramElement = ({
  element,
  layout = "responsive",
  width = "16",
  height = "9",
  ...props
}: InstagramElementProps) => {
  const { metadata } = element;
  let instagramID: string | null = null;

  if (metadata && metadata["instagram-id"]) {
    instagramID = metadata["instagram-id"];
  } else if (metadata && metadata["instagram-url"]) {
    instagramID = getInstagramID(metadata["instagram-url"]);
  }
  return instagramID ? (
    <Instagram data-shortcode={instagramID} layout={layout} width={width} height={height} {...props} />
  ) : null;
};

export { InstagramElement };
