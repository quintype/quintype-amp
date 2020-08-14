import React, { Fragment } from "react";
import { matchStoryElement } from "../../../helpers/match-story-element";
import { Spacer } from "../../spacer";
import { StoryElementTypes } from "./types";

export const StoryElement = ({ element, noSpacer, ...props }: StoryElementTypes) => {
  const Component = matchStoryElement(element);
  if (!Component) return null;
  return (
    <Fragment>
      <Component element={element} {...props} />
      {!noSpacer && <Spacer token="s" />}
    </Fragment>
  );
};
