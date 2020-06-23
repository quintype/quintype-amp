import React, { Fragment } from "react";
import styled from "styled-components";
import { Image, DateTime, Spacer } from "../../atoms";
import { RelatedStoryCardTypes, ImageForStoryTypes } from "./types";
import { getHumanizedDateTime } from "../../utils/date-time";

const Wrapper = styled.div`
  margin: ${(props) => `0 0 ${props.theme.spacing.l} 0`};
  border-bottom: ${(props) => `2px solid ${props.theme.color.mono1}`};
`;
const StyledAnchor = styled.a`
  text-decoration: none;
`;
const Headline = styled.h1`
  font-family: ${(props) => props.theme.font.family.primary};
  font-size: ${(props) => props.theme.font.size.l};
  color: ${(props) => props.theme.color.black};
  font-weight: bold;
`;

export const RelatedStoryCard = ({ story, aspectRatio, fallbackSrc }: RelatedStoryCardTypes) => {
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
    <Wrapper>
      <StyledAnchor href={url}>
        <ImageForStory
          metadata={imgMetadata}
          s3Key={imgS3Key}
          aspectRatio={aspectRatio}
          altText={imgCaption || imgAttr || "image"}
          fallbackSrc={fallbackSrc}
        />
        <Headline>{headline}</Headline>
        <DateTime formattedDate={humanizedDate} />
        <Spacer token="s" />
      </StyledAnchor>
    </Wrapper>
  );
};

const imagePresent = ({ metadata, s3Key }) => {
  return !!(metadata && Object.keys(metadata).length && s3Key);
};

const ImageForStory = ({ metadata, s3Key, aspectRatio, altText, fallbackSrc }: ImageForStoryTypes) => (
  <Fragment>
    {imagePresent({ metadata, s3Key }) ? (
      <Image metadata={metadata} slug={s3Key} aspectRatio={aspectRatio} alt={altText} />
    ) : (
      <amp-img
        alt={altText || "fallback image"}
        width={aspectRatio[0]}
        height={aspectRatio[1]}
        layout="responsive"
        src={fallbackSrc}
      />
    )}
  </Fragment>
);
