import React, { Fragment } from "react";
import { StoryElement } from "../../../atoms";
import { WebStoryPageComponentsTypes } from "./types";
import styled from "styled-components";
import { withStoryAndConfig } from "../../../context";
import { getImageAnimationProps } from "./web-story-page-components.helpers";
import { FocusedImage } from "quintype-js";

const WebStoryPageComponentsBase = ({ card, config }: WebStoryPageComponentsTypes) => {
  const titleElement = card["story-elements"].find((el) => el.type === "title");
  const textElements = card["story-elements"].filter((el) => el.type === "text");
  const imageElement = card["story-elements"].find((el) => el.type === "image");
  const imageAnimationProps = getImageAnimationProps(config);

  return (
    <Fragment>
      {imageElement && (
        <amp-story-grid-layer template="fill">
          <WebStoryImage
            altText={imageElement.title || imageElement["image-attribution"]}
            slug={imageElement["image-s3-key"]}
            metadata={imageElement["image-metadata"]}
            config={config}
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
  overflow-y: scroll;
  color: ${(props) => props.theme.color.white};
  position: absolute;
  bottom: 0;
  padding: 48px 24px;
  width: 100%;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(10, 10, 10, 0.35) 48%, rgba(0, 0, 0, 0.75));
`;

export const WebStoryImage = ({ altText = "", slug, metadata, config, ...props }) => {
  const imgSrc = metadata ? new FocusedImage(slug, metadata).path([9, 16], { w: 1200 }) : `${slug}?w=1200`;
  const imageCdn = config.publisherConfig["cdn-image"];
  const attrs = {
    width: "480",
    height: "640",
    layout: "responsive",
    alt: altText,
    src: `//${imageCdn}/${imgSrc}`,
    ...props
  };
  return <amp-img {...attrs} />;
};

export const WebStoryPageComponents = withStoryAndConfig(WebStoryPageComponentsBase);
