import React, { useContext } from "react";
import { StoryContext } from "../../context/story-context";
import { Story } from "../../types/story";
import { withStoryAndConfig } from "../../context/with-story-config";

const HeaderCardBase = () => {
  const story = useContext(StoryContext) as Story;
  return <h1>{story.headline}</h1>;
};

const HeaderCard = withStoryAndConfig(HeaderCardBase);

export { HeaderCard };
