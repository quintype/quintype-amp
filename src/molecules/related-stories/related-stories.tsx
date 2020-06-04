import React, { Fragment } from "react";
import styled from "styled-components";
import { RelatedStoryCard } from "../related-story-card";
import { RelatedStoriesTypes } from "./types";
import { withConfig } from "../../context";
import { base64FallbackImage } from "../../helpers/image-helpers";
import { Spacer } from "../../atoms";
import get from "lodash.get";

export const Heading = styled.h2.attrs(({ inlineStyles }: HeadingTypes) => ({
  style: inlineStyles
}))<HeadingTypes>`
  font-size: ${(props) => props.theme.font.size.l};
`;
export interface HeadingTypes {
  inlineStyles?: object;
}
export const RelatedStoriesBase = ({
  stories,
  config,
  heading,
  aspectRatio = [16, 9],
  inlineStyles
}: RelatedStoriesTypes) => {
  return stories && stories.length ? (
    <Fragment>
      <Spacer token="m" />
      <Heading inlineStyles={inlineStyles}>{heading || "Also Read"}</Heading>
      <div>
        {stories.map((story) => (
          <RelatedStoryCard
            key={story.id}
            story={story}
            fallbackSrc={get(config, ["ampConfig", "fallback-image-url"], base64FallbackImage)}
            aspectRatio={aspectRatio}
          />
        ))}
      </div>
    </Fragment>
  ) : null;
};

export const RelatedStories = withConfig(RelatedStoriesBase);
