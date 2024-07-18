// This file should not exist. Move all components inside appropriate atoms/molecules

import React from "react";
import get from "lodash.get";
import { StoryElement } from "../../atoms";
import { Fragment } from "react";
import { BodyAd } from "../ads";
import { StoryPageSlots } from "../slots";

const { DefaultStoryCardSlot } = StoryPageSlots;

// Renders all the cards in the story
export const FullStoryContent = ({ story, config }) => {
  return story.cards.map((card, cardIdx) => {
    const gulfNewsRender = get(config, ["opts", "render", "storyCardRender", "gulfNewsRender"], null);
    if (gulfNewsRender) return gulfNewsRender({ story, config, card });
    return (
      <Fragment key={card.id}>
        {card["story-elements"].map((element, storyElementIdx) => (
          <StoryElement key={element.id} element={element} cardIdx={cardIdx} storyElementIdx={storyElementIdx} />
        ))}
        {cardIdx === 0 && <BodyAd />}
        <DefaultStoryCardSlot index={cardIdx} card={card} />
      </Fragment>
    );
  });
};
