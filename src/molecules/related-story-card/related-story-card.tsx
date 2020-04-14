import React, { Fragment } from "react";
import styled from "styled-components";
import { Image } from "../../atoms";
import { Author } from "../../atoms";

const CardWrapper = styled.a`
  text-decoration: none;
`;
const Headline = styled.h1`
  font-family: ${(props) => props.theme.font.family.primary};
  font-size: ${(props) => props.theme.font.size.l};
  color: ${(props) => props.theme.color.black};
  font-weight: bold;
`;

export const RelatedStoryCard = ({ story }) => {
  const {
    authors,
    headline,
    url,
    "hero-image-metadata": imgMetadata,
    "hero-image-s3-key": imgS3Key,
    "hero-image-attribution": imgAlt
  } = story;
  const image = imagePresent({ imgMetadata, imgS3Key }) ? (
    <Image metadata={imgMetadata} slug={imgS3Key} aspectRatio={[16, 9]} alt={imgAlt || "image"} />
  ) : null;
  return (
    <Fragment>
      <CardWrapper href={url}>
        {image}
        <Headline>{headline}</Headline>
        <Author authors={authors} />
      </CardWrapper>
    </Fragment>
  );
};

const imagePresent = ({ imgMetadata, imgS3Key }) => {
  return !!(imgMetadata && Object.keys(imgMetadata).length && imgS3Key);
};
