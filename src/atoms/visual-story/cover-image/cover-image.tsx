import React, { Fragment } from "react";
import { withStoryAndConfig } from "../../../context";
import { Image, Spacer } from "../../index";
import { CoverImageProps } from "./types";
import { getAuthorNames } from "../../author/author";
import get from "lodash/get";
import Helmet from "react-helmet";
import styled from "styled-components";

const CoverImageBase = ({ story, config }: CoverImageProps) => {
  const heroImgSrc = story["hero-image-s3-key"];
  const heroImgMetadata = story["hero-image-metadata"];
  const altText = story["hero-image-caption"] || story["hero-image-attribution"] || "";
  const authorNames = getAuthorNames(story.authors);
  const monogram = get(config, ["theme-attributes", "visual-story-monogram"], null);
  const headline = story.headline || "";
  return (
    <Fragment>
      {monogram && (
        <Helmet>
          <style>{`
          .qt-amp-cover-image-monogram {
            position: absolute;
            left: 16px;
            top: 16px;
          }
        `}</style>
        </Helmet>
      )}
      <amp-story-page id="cover">
        <amp-story-grid-layer template="fill">
          <Image
            aspectRatio={[9, 16]}
            width="480"
            height="640"
            metadata={heroImgMetadata}
            slug={heroImgSrc}
            alt={altText}
            lightbox={false}
          />
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical">
          {monogram && (
            <Image layout="fixed" width="48px" height="48px" src={monogram} className="qt-amp-cover-image-monogram" />
          )}
          <StyledHeadline>{headline}</StyledHeadline>
          {authorNames && (
            <Fragment>
              <Spacer token="xs" />
              <p>{authorNames}</p>
            </Fragment>
          )}
        </amp-story-grid-layer>
      </amp-story-page>
    </Fragment>
  );
};

export const CoverImage = withStoryAndConfig(CoverImageBase);

const StyledHeadline = styled.h1`
  margin-top: ${(props) => props.theme.spacing.s};
  line-height: ${(props) => props.theme.font.lineHeight.level2};
  font-weight: bold;
  font-size: ${(props) => props.theme.font.size.huge};
`;
