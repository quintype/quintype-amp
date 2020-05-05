import React, { Fragment } from "react";
import { matchStoryElement } from "../../../helpers/match-story-element";
import { Spacer } from "../../spacer";

export const StoryElement = ({ element, ...props }) => {
  const Component = matchStoryElement(element);
  return (
    <Fragment>
      <Component element={element} {...props} />
      <Spacer token="s" />
    </Fragment>
  );
};
