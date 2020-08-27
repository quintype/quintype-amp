import React, { Fragment } from "react";
import styled from "styled-components";
import { RelatedStoryCard } from "../related-story-card";
import { RelatedStoriesTypes } from "./types";
import { withStoryAndConfig } from "../../context";
import { base64FallbackImage } from "../../helpers/image-helpers";
import { Spacer } from "../../atoms";
import get from "lodash.get";
import { StoryPageSlots } from "../../molecules/slots";

const { RelatedStoryCardSlot } = StoryPageSlots;

export const Heading = styled.h2`
  font-size: ${(props) => props.theme.font.size.l};
`;

export const RelatedStoriesBase = ({
  story,
  config,
  heading = "Also Read",
  aspectRatio = [16, 9]
}: RelatedStoriesTypes) => {
  const relatedStories = get(config, ["opts", "featureConfig", "relatedStories", "stories"], null);
  if (!relatedStories || !relatedStories.length) return null;
  const relatedStoriesRender = get(config, ["opts", "render", "relatedStoriesRender"], null);
  if (relatedStoriesRender) return relatedStoriesRender({ relatedStories, config, story });
  return (
    <Fragment>
      <Spacer token="m" />
      <Heading>{heading}</Heading>
      <div>
        {relatedStories.map((relatedStory, idx) => (
          <Fragment key={relatedStory.id}>
            <RelatedStoryCard
              story={relatedStory}
              fallbackSrc={get(config, ["ampConfig", "fallback-image-url"], base64FallbackImage)}
              aspectRatio={aspectRatio}
            />
            <RelatedStoryCardSlot story={story} config={config} index={idx} relatedStory={relatedStory} />
          </Fragment>
        ))}
      </div>
    </Fragment>
  );
};

export const RelatedStories = withStoryAndConfig(RelatedStoriesBase);
