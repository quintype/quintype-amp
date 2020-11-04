import React, { Fragment } from "react";
import { Image, StoryElement } from "../../../atoms";
import { WebStoryPageComponentsTypes } from "./types";
import { Gradient } from "../shared-components";
import styled from "styled-components";
// import { matchStoryElement } from "../../../helpers/match-story-element";

export const WebStoryPageComponents = ({ card }: WebStoryPageComponentsTypes) => {
  const title = card["story-elements"].find((el) => el.type === "title");
  const text = card["story-elements"].filter((el) => el.type === "text");
  const image = card["story-elements"].find((el) => el.type === "image");

  return (
    <Fragment>
      {image && (
        <amp-story-grid-layer template="fill">
          <Image
            metadata={image.metadata}
            aspectRatio={[9, 21]}
            slug={image["image-s3-key"]}
            alt={image.title || image["image-attribution"]}
            lightbox={false}
          />
        </amp-story-grid-layer>
      )}
      <Gradient />
      {(title || text.length) && (
        <amp-story-grid-layer template="thirds">
          <div grid-area="lower-third">
            <TextWrapper>
              {title && <StoryElement element={title} />}
              {text.map((textElement) => (
                <StoryElement key={textElement.id} element={textElement} />
              ))}
            </TextWrapper>
          </div>
        </amp-story-grid-layer>
      )}
    </Fragment>
  );
};

const TextWrapper = styled.div`
  color: ${(props) => props.theme.color.white};
`;
