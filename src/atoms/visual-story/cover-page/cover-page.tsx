import React, { Fragment } from "react";
import { withStoryAndConfig } from "../../../context";
import { Image, Spacer, PublisherLogoHeader } from "../../index";
import { AmpStoryPage } from "../index";
import { CoverPageProps } from "./types";
import { getAuthorNames } from "../../author/author";
import styled from "styled-components";

export const CoverPageBase = ({ story }: CoverPageProps) => {
  const heroImgSrc = story["hero-image-s3-key"];
  const heroImgMetadata = story["hero-image-metadata"];
  const altText = story["hero-image-caption"] || story["hero-image-attribution"] || "";
  const authorNames = getAuthorNames(story.authors);
  const headline = story.headline || "";
  return (
    <Fragment>
      <AmpStoryPage id="cover">
        <amp-story-grid-layer template="fill">
          {heroImgSrc ? (
            <Image aspectRatio={[9, 21]} metadata={heroImgMetadata} slug={heroImgSrc} alt={altText} lightbox={false} />
          ) : (
            <FullLengthDiv />
          )}
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical">
          <LogoWrapper>
            <PublisherLogoHeader />
          </LogoWrapper>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="thirds">
          <StyledTextWrapper>
            <StyledHeadline>{headline}</StyledHeadline>
            {authorNames && (
              <Fragment>
                <Spacer token="xs" />
                <StyledAuthors>{authorNames}</StyledAuthors>
              </Fragment>
            )}
          </StyledTextWrapper>
        </amp-story-grid-layer>
      </AmpStoryPage>
    </Fragment>
  );
};

export const CoverPage = withStoryAndConfig(CoverPageBase);

const StyledTextWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 32px;
  color: ${(props) => props.theme.color.white};
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
`;
const StyledHeadline = styled.h1`
  margin-top: ${(props) => props.theme.spacing.s};
  line-height: ${(props) => props.theme.font.lineHeight.level2};
  font-weight: ${(props) => props.theme.font.weight.medium};
  font-size: ${(props) => props.theme.font.size.huge};
`;
const StyledAuthors = styled.p`
  font-size: ${(props) => props.theme.font.size.xs};
`;
const LogoWrapper = styled.div`
  position: relative;
  height: 50px;
  margin: auto;
`;
const FullLengthDiv = styled.div`
  height: 100%;
`;
