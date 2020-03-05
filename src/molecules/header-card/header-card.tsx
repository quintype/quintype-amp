import React from "react";
import { withStoryAndConfig } from "../../context";
import { HeaderCardTypes } from "./types";

const HeaderCardBase = ({ story }: HeaderCardTypes) => {
  return <h1>{story.headline}</h1>;
};

const HeaderCard = withStoryAndConfig(HeaderCardBase);

export { HeaderCard };
