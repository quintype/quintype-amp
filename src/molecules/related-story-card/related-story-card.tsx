import React, { Fragment } from "react";
import styled from "styled-components";
import { Image, Author } from "../../atoms";
import { RelatedStoryCardTypes } from "./types";

const CardWrapper = styled.a`
  text-decoration: none;
  flex: 1 1 0;
  margin: 10px;
`;
const Headline = styled.h1`
  font-family: ${(props) => props.theme.font.family.primary};
  font-size: ${(props) => props.theme.font.size.l};
  color: ${(props) => props.theme.color.black};
  font-weight: bold;
`;

export const RelatedStoryCard = ({ story, aspectRatio, fallbackSrc }: RelatedStoryCardTypes) => {
  const {
    authors,
    headline,
    url,
    "hero-image-metadata": imgMetadata,
    "hero-image-s3-key": imgS3Key,
    "hero-image-attribution": imgAttr,
    "hero-image-caption": imgCaption
  } = story;
  return (
    <CardWrapper href={url}>
      <ImageForStory
        metadata={imgMetadata}
        s3Key={imgS3Key}
        aspectRatio={aspectRatio}
        altText={imgCaption || imgAttr || "image"}
        fallbackSrc={fallbackSrc}
      />
      <Headline>{headline}</Headline>
      <Author authors={authors} />
    </CardWrapper>
  );
};

const imagePresent = ({ metadata, s3Key }) => {
  return !!(metadata && Object.keys(metadata).length && s3Key);
};

const ImageForStory = ({ metadata, s3Key, aspectRatio, altText, fallbackSrc }) => (
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
