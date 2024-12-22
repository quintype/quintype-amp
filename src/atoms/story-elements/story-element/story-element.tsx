import React, { Fragment } from "react";
import { matchStoryElement } from "../../../helpers/match-story-element";
import { Spacer } from "../../spacer";
import { StoryElementTypes } from "./types";
import { DefaultStoryElementSlot } from "../../../molecules/slots/story-page-slots";

export const StoryElement = ({ element, noSpacer, storyElementIdx, cardIdx, counter, ...props }: StoryElementTypes) => {
  const Component = matchStoryElement(element);
  return (
    <Fragment>
      <Component element={element} counter={counter} {...props} />
      {!noSpacer && <Spacer token="s" />}
      <DefaultStoryElementSlot cardIdx={cardIdx} storyElementIdx={storyElementIdx} storyElement={element} />
    </Fragment>
  );
};
