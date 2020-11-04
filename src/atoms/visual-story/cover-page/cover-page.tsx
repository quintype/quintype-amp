import React, { Fragment } from "react";
import { withStoryAndConfig } from "../../../context";
import { Image, Spacer, PublisherLogoHeader } from "../../index";
import { CoverPageProps } from "./types";
import { getAuthorNames } from "../../author/author";
import { Gradient } from "../shared-components";
import styled from "styled-components";

const CoverPageBase = ({ story }: CoverPageProps) => {
  const heroImgSrc = story["hero-image-s3-key"];
  if (!heroImgSrc) return null;
  const heroImgMetadata = story["hero-image-metadata"];
  const altText = story["hero-image-caption"] || story["hero-image-attribution"] || "";
  const authorNames = getAuthorNames(story.authors);
  const headline = story.headline || "";
  return (
    <Fragment>
      <amp-story-page id="cover">
        <amp-story-grid-layer template="fill">
          <Image aspectRatio={[9, 21]} metadata={heroImgMetadata} slug={heroImgSrc} alt={altText} lightbox={false} />
        </amp-story-grid-layer>
        <Gradient />
        <amp-story-grid-layer template="vertical">
          <LogoWrapper>
            <PublisherLogoHeader />
          </LogoWrapper>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="thirds">
          <div grid-area="lower-third">
            <StyledTextWrapper>
              <StyledHeadline>{headline}</StyledHeadline>
              {authorNames && (
                <Fragment>
                  <Spacer token="xs" />
                  <StyledAuthors>{authorNames}</StyledAuthors>
                </Fragment>
              )}
            </StyledTextWrapper>
          </div>
        </amp-story-grid-layer>
      </amp-story-page>
    </Fragment>
  );
};

export const CoverPage = withStoryAndConfig(CoverPageBase);

const StyledTextWrapper = styled.div`
  color: ${(props) => props.theme.color.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;
const StyledHeadline = styled.h1`
  margin-top: ${(props) => props.theme.spacing.s};
  line-height: ${(props) => props.theme.font.lineHeight.level2};
  font-weight: bold;
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
