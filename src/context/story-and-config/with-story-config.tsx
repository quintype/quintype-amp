import React, { useContext } from "react";
import { StoryContext } from "../story/story-context";
import { ConfigContext } from "../config/config-context";

const withStoryAndConfig = (BaseComponent) => (props) => {
  const configFromContext = useContext(ConfigContext);
  const storyFromContext = useContext(StoryContext);
  return <BaseComponent story={storyFromContext} config={configFromContext} {...props} />;
};

export { withStoryAndConfig };
