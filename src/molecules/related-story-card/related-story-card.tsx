import React, { Fragment } from "react";
import styled from "styled-components";
import { Image, DateTime, Spacer } from "../../atoms";
import { RelatedStoryCardTypes, ImageForStoryTypes } from "./types";
import { getHumanizedDateTime } from "../../utils/date-time";

const Wrapper = styled.div.attrs(({ style }: { style?: object }) => ({
  style
}))`
  margin: ${(props) => `0 0 ${props.theme.spacing.l} 0`};
  border-bottom: ${(props) => `2px solid ${props.theme.color.mono1}`};
`;
const StyledAnchor = styled.a.attrs(({ style }: { style?: object }) => ({
  style
}))`
  text-decoration: none;
`;
const Headline = styled.h1.attrs(({ style }: { style?: object }) => ({
  style
}))`
  font-family: ${(props) => props.theme.font.family.primary};
  font-size: ${(props) => props.theme.font.size.l};
  color: ${(props) => props.theme.color.black};
  font-weight: bold;
`;

export const RelatedStoryCard = ({
  story,
  aspectRatio,
  fallbackSrc,
  anchorInlineStyles,
  headlineInlineStyles,
  wrapperInlineStyles
}: RelatedStoryCardTypes) => {
  const {
    headline,
    url,
    "hero-image-metadata": imgMetadata,
    "hero-image-s3-key": imgS3Key,
    "hero-image-attribution": imgAttr,
    "hero-image-caption": imgCaption,
    "last-published-at": lastPublishedAt
  } = story;
  const humanizedDate = getHumanizedDateTime({
    dateFormat: "do MMM, yyyy 'at' p",
    timeZone: "Asia/Kolkata",
    timeStamp: lastPublishedAt
  });
  return (
    <Wrapper style={wrapperInlineStyles}>
      <StyledAnchor href={url} style={anchorInlineStyles}>
        <ImageForStory
          metadata={imgMetadata}
          s3Key={imgS3Key}
          aspectRatio={aspectRatio}
          altText={imgCaption || imgAttr || "image"}
          fallbackSrc={fallbackSrc}
        />
        <Headline style={headlineInlineStyles}>{headline}</Headline>
        <DateTime formattedDate={humanizedDate} />
        <Spacer token="s" />
      </StyledAnchor>
    </Wrapper>
  );
};

const imagePresent = ({ metadata, s3Key }) => {
  return !!(metadata && Object.keys(metadata).length && s3Key);
};

const StyledImageForStory = styled.div.attrs(({ style }: { style?: object }) => ({
  style
}))``;

const ImageForStory = ({ metadata, s3Key, aspectRatio, altText, fallbackSrc, inlineStyles }: ImageForStoryTypes) => (
  <Fragment>
    {imagePresent({ metadata, s3Key }) ? (
      <Image metadata={metadata} slug={s3Key} aspectRatio={aspectRatio} alt={altText} />
    ) : (
      <StyledImageForStory style={inlineStyles}>
        <amp-img
          alt={altText || "fallback image"}
          width={aspectRatio[0]}
          height={aspectRatio[1]}
          layout="responsive"
          src={fallbackSrc}
        />
      </StyledImageForStory>
    )}
  </Fragment>
);
