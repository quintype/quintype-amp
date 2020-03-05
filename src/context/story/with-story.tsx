import React, { useContext } from "react";
import { StoryContext } from "./story-context";

const withStory = (BaseComponent) => (props) => {
  const storyFromContext = useContext(StoryContext);
  return <BaseComponent story={storyFromContext} {...props} />;
};

export { withStory };
