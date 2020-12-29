import React, { Fragment } from "react";
import { StoryElement, Image } from "../../../atoms";
import { WebStoryPageComponentsTypes } from "./types";
import styled from "styled-components";
import { withStoryAndConfig } from "../../../context";
import { getImageAnimationProps } from "./web-story-page-components.helpers";
import { isGumlet } from "../../../helpers";

const WebStoryPageComponentsBase = ({ card, config }: WebStoryPageComponentsTypes) => {
  const titleElement = card["story-elements"].find((el) => el.type === "title");
  const textElements = card["story-elements"].filter((el) => el.type === "text");
  const imageElement = card["story-elements"].find((el) => el.type === "image");
  const imageAnimationProps = getImageAnimationProps(config);
  const imgOpts = isGumlet(config) ? { format: "auto" } : {};

  return (
    <Fragment>
      {imageElement && (
        <amp-story-grid-layer template="fill">
          <Image
            class="qt-amp-visual-story-img"
            slug={imageElement["image-s3-key"]}
            metadata={imageElement["image-metadata"]}
            aspectRatio={[480, 640]}
            alt={imageElement.title || imageElement["image-attribution"]}
            opts={imgOpts}
            srcSetOpts={imgOpts}
            lightbox={false}
            {...imageAnimationProps}
          />
        </amp-story-grid-layer>
      )}
      {(titleElement || textElements.length) && (
        <amp-story-grid-layer template="thirds">
          <TextWrapper>
            {titleElement && <StoryElement element={titleElement} />}
            {textElements.map((textElement) => (
              <StoryElement key={textElement.id} element={textElement} />
            ))}
          </TextWrapper>
        </amp-story-grid-layer>
      )}
    </Fragment>
  );
};

const TextWrapper = styled.div`
  max-height: 100%;
  color: ${(props) => props.theme.color.white};
  position: absolute;
  bottom: 0;
  padding: 24px;
  width: 100%;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.2) 5%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 0.75)
  );
`;

export const WebStoryPageComponents = withStoryAndConfig(WebStoryPageComponentsBase);
