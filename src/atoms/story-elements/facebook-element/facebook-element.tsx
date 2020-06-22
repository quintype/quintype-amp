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
  const facebookElementRender = get(config, ["opts", "storyElementRender", "facebookElementRender"], null);

  if (!(metadata && metadata.provider && metadata["facebook-url"])) {
    return null;
  }
  return facebookElementRender ? (
    facebookElementRender({ story, config })
  ) : (
    <Facebook data-href={metadata["facebook-url"]} data-embed-as={embedAs[metadata.provider]} {...props} />
  );
};

export const FacebookElement = withStoryAndConfig(FacebookElementBase);
