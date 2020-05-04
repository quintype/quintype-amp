import React from "react";
import { StoryElementProps } from "../types";
import { Facebook } from "../../facebook";
import { FacebookTypes } from "../../facebook/types";
type FacebookElementProps = StoryElementProps & Omit<FacebookTypes, "data-href" | "data-embed-as">;

const embedAs = {
  "facebook-post": "post",
  "facebook-video": "video"
};

const FacebookElement = ({ element, ...props }: FacebookElementProps) => {
  const { metadata } = element;
  if (!(metadata && metadata.provider && metadata["facebook-url"])) {
    return null;
  }
  return <Facebook data-href={metadata["facebook-url"]} data-embed-as={embedAs[metadata.provider]} {...props} />;
};

export { FacebookElement };
