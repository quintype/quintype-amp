import React, { Fragment } from "react";
import { StoryElement, Image } from "../../../atoms";
import { WebStoryPageComponentsTypes, AnimationTypes } from "./types";
import { getFigcaptionText } from "../../../molecules/hero-image/hero-image";
import styled from "styled-components";
import { withStoryAndConfig } from "../../../context";
import { getAnimationProps } from "./web-story-page-components.helpers";

const WebStoryPageComponentsBase = ({ card, config, story }: WebStoryPageComponentsTypes) => {
  const titleElement = card["story-elements"].find((el) => el.type === "title");
  const textElements = card["story-elements"].filter((el) => el.type === "text");
  const imageElement = card["story-elements"].find((el) => el.type === "image");
  const { imageAnimation, textAnimation }: AnimationTypes = getAnimationProps(config, story);
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
            lightbox={false}
            {...imageAnimation}
          />
        </amp-story-grid-layer>
      )}
      {(titleElement || textElements.length || imageElement) && (
        <amp-story-grid-layer template="thirds">
          <TextWrapper>
            <div {...textAnimation}>
              {titleElement && <StoryElement element={titleElement} />}
              {textElements.length > 0 &&
                textElements.map((textElement) => <StoryElement key={textElement.id} element={textElement} />)}
              {imageElement && (
                <ImageDetails
                  dangerouslySetInnerHTML={{
                    __html: getFigcaptionText(imageElement.title, imageElement["image-attribution"]) || ""
                  }}
                />
              )}
            </div>
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

const ImageDetails = styled.div`
  text-align: right;
  font: ${(props) => {
    const fontFamily = props.theme.font.family.primary;
    const fontWeight = props.theme.font.weight.normal;
    const fontSize = props.theme.font.size.tiny;
    return `${fontWeight} ${fontSize} ${fontFamily}`;
  }};
  line-height: ${(props) => props.theme.font.lineHeight.level6};
  div,
  p {
    display: inline-block;
  }
`;

export const WebStoryPageComponents = withStoryAndConfig(WebStoryPageComponentsBase);
