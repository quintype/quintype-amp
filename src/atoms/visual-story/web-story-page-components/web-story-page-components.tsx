import React, { Fragment } from "react";
import { StoryElement, Image } from "../../../atoms";
import { WebStoryPageComponentsTypes, AnimationTypes } from "./types";
import { getFigcaptionText } from "../../../molecules/hero-image/hero-image";
import styled from "styled-components";
import { withStoryAndConfig } from "../../../context";
import { getAnimationProps } from "./web-story-page-components.helpers";
import get from "lodash/get";
import { VideoWebStory } from "../../video-web-story";
import { getVideoElement } from "../../../utils/utils";

const WebStoryPageComponentsBase = ({ card, config, story }: WebStoryPageComponentsTypes) => {
  const titleElement = card["story-elements"].find((el) => el.type === "title");
  const textElements = card["story-elements"].filter((el) => el.type === "text" && el.subtype !== "cta");
  const imageElement = card["story-elements"].find((el) => el.type === "image");
  const heroImgSrc = story["hero-image-s3-key"];
  const videoElement = getVideoElement(card);

  const { imageAnimation, textAnimation }: AnimationTypes = getAnimationProps(config, story);
  const ctaElements = card["story-elements"].filter((el) => el.subtype === "cta");
  const visualStoriesConfig = get(config, ["opts", "featureConfig", "visualStories"], {});
  let outlinkProps = {};
  if (visualStoriesConfig.outlinkProps) {
    outlinkProps =
      typeof visualStoriesConfig.outlinkProps === "function"
        ? visualStoriesConfig.outlinkProps()
        : visualStoriesConfig.outlinkProps;
  }

  return (
    <Fragment>
      {videoElement && (
        <VideoWebStory
          videoElement={videoElement}
          imageElement={imageElement}
          heroImage={heroImgSrc}
          videoId={`video-${card.id}`}
        />
      )}
      {imageElement && !videoElement && (
        <amp-story-grid-layer template="fill">
          <Image
            class="qt-amp-visual-story-img"
            slug={imageElement["image-s3-key"]}
            metadata={imageElement["image-metadata"]}
            aspectRatio={[480, 640]}
            alt={imageElement["alt-text"] || imageElement.title || imageElement["image-attribution"]}
            lightbox={false}
            story={story}
            {...imageAnimation}
          />
        </amp-story-grid-layer>
      )}
      {(titleElement || textElements.length || imageElement) && (
        <amp-story-grid-layer template="thirds">
          <TextWrapper>
            <div {...textAnimation} style={{ alignSelf: "flex-end" }}>
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
      {/**
       * Outlink component should be the last component on story.
       * Check the Placement section in Doc
       * https://amp.dev/documentation/components/amp-story-page-outlink/
       **/}

      {ctaElements.map((ele) => {
        const url = get(ele, ["metadata", "cta-url"]);
        const title = get(ele, ["metadata", "cta-title"]);
        return (
          ele.metadata && (
            <amp-story-page-outlink key={ele.title} layout="nodisplay" {...outlinkProps}>
              <a href={url}>{title}</a>
            </amp-story-page-outlink>
          )
        );
      })}
    </Fragment>
  );
};

const TextWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 24px;
  color: ${(props) => props.theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(100%);
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5));
    z-index: -1;
  }

  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);

  p {
    font-size: 18px;
    line-height: normal;
  }
`;

const ImageDetails = styled.div`
  text-align: right;
  font: ${(props) => {
    const fontFamily = props.theme.font.family.primary;
    const fontWeight = props.theme.font.weight.normal;
    const fontSize = props.theme.font.size.tiny;
    return `${fontWeight} ${fontSize} ${fontFamily}`;
  }};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  line-height: ${(props) => props.theme.font.lineHeight.level6};
  div,
  p {
    display: inline-block;
  }
`;

export const WebStoryPageComponents = withStoryAndConfig(WebStoryPageComponentsBase);
