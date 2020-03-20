import React from "react";
import { matchStoryElement } from "../../../helpers";

const StoryElement = (props) => {
  const { element } = props;
  const Component = matchStoryElement(element);
  return <Component element={element} {...props} />;
};

export { StoryElement };
