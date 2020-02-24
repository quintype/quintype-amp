import React, { useContext } from "react";
import { StoryContext } from "../../context/storyContext";
import { Story } from "../../types/story";

const HeaderCard = () => {
  const story = useContext(StoryContext) as Story;
  return <h1>{story.headline}</h1>;
};

export { HeaderCard };
