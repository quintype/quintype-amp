import React, { Fragment } from "react";
import { StoryElement, Image } from "../../../atoms";
import { WebStoryPageComponentsTypes, AnimationTypes } from "./types";
import { getFigcaptionText } from "../../../molecules/hero-image/hero-image";
import styled from "styled-components";
import { withStoryAndConfig } from "../../../context";
import { getAnimationProps } from "./web-story-page-components.helpers";
import get from "lodash/get";
import { VideoWebStory } from "../../video-web-story";
import { VideoClipStory } from "../../video-clip-story";

const WebStoryPageComponentsBase = ({ card, config, story }: WebStoryPageComponentsTypes) => {
  const titleElement = card["story-elements"].find((el) => el.type === "title");
  const textElements = card["story-elements"].filter((el) => el.type === "text" && el.subtype !== "cta");
  const imageElement = card["story-elements"].find((el) => el.type === "image");
  const heroImgSrc = story["hero-image-s3-key"];
  const videoElement = card["story-elements"].find((el) => el.type === "jsembed");
  const videoClipElement = card["story-elements"].find((el) => el.type === "video" && el.subtype === "video-clip");

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
      {videoElement && <VideoWebStory videoElement={videoElement} imageElement={imageElement} heroImage={heroImgSrc} />}
      {videoClipElement && (
        <VideoClipStory videoClipElement={videoClipElement} imageElement={imageElement} heroImage={heroImgSrc} />
      )}
      {imageElement && !videoElement && (
        <amp-story-grid-layer template="fill">
          <Image
            class="qt-amp-visual-story-img"
            slug={imageElement["image-s3-key"]}
            metadata={imageElement["image-metadata"]}
            aspectRatio={[480, 640]}
            alt={imageElement.title || imageElement["image-attribution"]}
            lightbox={false}
            story={story}
            {...imageAnimation}
          />
        </amp-story-grid-layer>
      )}
      {(titleElement || textElements.length || imageElement) && !videoElement && (
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
  max-height: 100%;
  color: ${(props) => props.theme.color.white};
  position: absolute;
  bottom: 0;
  padding: 24px;
  width: 100%;
  display: flex;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.1) 5%,
    rgba(0, 0, 0, 0.6) 50%,
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
