import React, { Fragment } from "react";
import styled from "styled-components";
import { RelatedStoryCard } from "../related-story-card";
import { RelatedStoriesTypes } from "./types";
import { withStoryAndConfig } from "../../context";
import { base64FallbackImage } from "../../helpers/image-helpers";
import { Spacer } from "../../atoms";
import get from "lodash.get";

export const Heading = styled.h2`
  font-size: ${(props) => props.theme.font.size.l};
`;

export const RelatedStoriesBase = ({
  stories,
  story,
  config,
  heading = "Also Read",
  aspectRatio = [16, 9]
}: RelatedStoriesTypes) => {
  const relatedStoriesRender = get(config, ["opts", "render", "relatedStoriesRender"], null);

  if (relatedStoriesRender) return relatedStoriesRender({ relatedStories: stories, config, story });
  return stories && stories.length ? (
    <Fragment>
      <Spacer token="m" />
      <Heading>{heading}</Heading>
      <div>
        {stories.map((relatedStory) => (
          <RelatedStoryCard
            key={relatedStory.id}
            story={relatedStory}
            fallbackSrc={get(config, ["ampConfig", "fallback-image-url"], base64FallbackImage)}
            aspectRatio={aspectRatio}
          />
        ))}
      </div>
    </Fragment>
  ) : null;
};

export const RelatedStories = withStoryAndConfig(RelatedStoriesBase);
