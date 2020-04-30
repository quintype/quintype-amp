import React from "react";
import { StoryElementProps } from "../types";
import { Twitter } from "../../twitter";
import { TwitterTypes } from "../../twitter/types";

type TwitterElementProps = StoryElementProps & Omit<TwitterTypes, "data-tweetid">;

const TwitterElement = ({ element, ...props }: TwitterElementProps) => {
  const { metadata } = element;
  if (!(metadata && metadata["tweet-id"])) return null;

  return <Twitter data-tweetid={metadata["tweet-id"]} {...props} />;
};

export { TwitterElement };
