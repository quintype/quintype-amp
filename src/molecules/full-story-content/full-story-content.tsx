// This file should not exist. Move all components inside appropriate atoms/molecules

import React from "react";
import { StoryElement } from "../../atoms";
import { Fragment } from "react";
import { BodyAd } from "../ads";
import { StoryPageSlots } from "../slots";

const { DefaultStoryCardSlot } = StoryPageSlots;

// Renders all the cards in the story
export const FullStoryContent = ({ story }) => {
  const counter = { ads: 0, paragraphs: 0 };

  return story.cards.map((card, cardIdx) => {
    return (
      <Fragment key={card.id}>
        {card["story-elements"].map((element, storyElementIdx) => (
          <StoryElement
            key={element.id}
            element={element}
            cardIdx={cardIdx}
            storyElementIdx={storyElementIdx}
            counter={counter}
          />
        ))}
        {cardIdx === 0 && <BodyAd />}
        <DefaultStoryCardSlot index={cardIdx} card={card} />
      </Fragment>
    );
  });
};
