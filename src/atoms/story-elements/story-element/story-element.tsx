import React from "react";
import { matchStoryElement } from "../../../helpers/match-story-element";
import { Spacer } from "../../spacer";

const StoryElement = (props) => {
  const { element, setInvalidBanner } = props;
  const Component = matchStoryElement(element);
  if (!Component) {
    setInvalidBanner(true);
    return null;
  }
  return (
    <React.Fragment>
      <Component element={element} {...props} />
      <Spacer token="s" />
    </React.Fragment>
  );
};

export { StoryElement };
