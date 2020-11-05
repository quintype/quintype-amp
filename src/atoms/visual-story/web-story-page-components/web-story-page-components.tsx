import React, { Fragment } from "react";
import { Image, StoryElement } from "../../../atoms";
import { WebStoryPageComponentsTypes } from "./types";
import { Gradient } from "../shared-components";
import styled from "styled-components";

export const WebStoryPageComponents = ({ card }: WebStoryPageComponentsTypes) => {
  const titleElement = card["story-elements"].find((el) => el.type === "title");
  const textElements = card["story-elements"].filter((el) => el.type === "text");
  const imageElement = card["story-elements"].find((el) => el.type === "image");

  return (
    <Fragment>
      {imageElement && (
        <amp-story-grid-layer template="fill">
          <Image
            metadata={imageElement.metadata}
            aspectRatio={[9, 21]}
            slug={imageElement["image-s3-key"]}
            alt={imageElement.title || imageElement["image-attribution"]}
            lightbox={false}
          />
        </amp-story-grid-layer>
      )}
      <Gradient />
      {(titleElement || textElements.length) && (
        <amp-story-grid-layer template="thirds">
          <div grid-area="lower-third">
            <TextWrapper>
              {titleElement && <StoryElement element={titleElement} />}
              {textElements.map((textElement) => (
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
