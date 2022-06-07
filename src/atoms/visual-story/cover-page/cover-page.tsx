import React, { Fragment } from "react";
import get from "lodash/get";
import { withStoryAndConfig } from "../../../context";
import { Spacer, PublisherLogoHeader, Image } from "../../index";
import { AmpStoryPage } from "../index";
import { CoverPageProps } from "./types";
import { getAuthorNames } from "../../author/author";
import styled from "styled-components";
import { getAnimationProps } from "../web-story-page-components/web-story-page-components.helpers";
import { AnimationTypes } from "../web-story-page-components/types";
import { Head } from "../../head";

export const CoverPageBase = ({ story, config }: CoverPageProps) => {
  const heroImgSrc = story["hero-image-s3-key"];
  const heroImgMetadata = story["hero-image-metadata"];
  const altText = story["hero-image-caption"] || story["hero-image-attribution"] || "";
  const authorNames = getAuthorNames(story.authors);
  const { imageAnimation, textAnimation }: AnimationTypes = getAnimationProps(config, story);
  const headline = story.headline || "";

  let logoAlignmentThemeBased = get(config, ["opts", "featureConfig", "visualStories", "logoAlignment"], null);
  let logoUrlThemeBased = get(config, ["opts", "featureConfig", "visualStories", "logoUrl"], null);

  const visualStoriesConfigWithThemes = get(config, ["opts", "featureConfig", "visualStories"]) || [];
  if (Array.isArray(visualStoriesConfigWithThemes)) {
    const visualStoryTheme = get(story, ["metadata", "story-attributes", "visualstorytheme"], []) || [];
    const theme = visualStoryTheme[0];
    switch (theme) {
      case "theme-2":
        logoAlignmentThemeBased = visualStoriesConfigWithThemes[1] && (typeof visualStoriesConfigWithThemes[1].logoAlignment === "function" ? visualStoriesConfigWithThemes[1].logoAlignment(config) : visualStoriesConfigWithThemes[1].logoAlignment);
        logoUrlThemeBased = visualStoriesConfigWithThemes[1] && (typeof visualStoriesConfigWithThemes[1].logoUrl === "function" ? visualStoriesConfigWithThemes[1].logoUrlThemeBased(config) : visualStoriesConfigWithThemes[1].logoUrl);
        break;
      case "theme-3":
        logoAlignmentThemeBased = visualStoriesConfigWithThemes[2] && (typeof visualStoriesConfigWithThemes[2].logoAlignment === "function" ? visualStoriesConfigWithThemes[2].logoAlignment(config) : visualStoriesConfigWithThemes[2].logoAlignment);
        logoUrlThemeBased = visualStoriesConfigWithThemes[2] && (typeof visualStoriesConfigWithThemes[2].logoUrl === "function" ? visualStoriesConfigWithThemes[2].logoUrlThemeBased(config) : visualStoriesConfigWithThemes[2].logoUrl);
        break;
      default:
        null
        logoAlignmentThemeBased = visualStoriesConfigWithThemes[0] && (typeof visualStoriesConfigWithThemes[0].logoAlignment === "function" ? visualStoriesConfigWithThemes[0].logoAlignment(config) : visualStoriesConfigWithThemes[0].logoAlignment);
        logoUrlThemeBased = visualStoriesConfigWithThemes[0] && (typeof visualStoriesConfigWithThemes[0].logoUrl === "function" ? visualStoriesConfigWithThemes[0].logoUrlThemeBased(config) : visualStoriesConfigWithThemes[0].logoUrl);
    }
  }

  const visualStoryConfig = { logoAlignmentThemeBased, logoUrlThemeBased };
  
  return (
    <Fragment>
      <AmpStoryPage id="cover">
        <amp-story-grid-layer template="fill">
          {heroImgSrc ? (
            <Image
              class="qt-amp-visual-story-img-cover"
              aspectRatio={[480, 640]}
              alt={altText}
              slug={heroImgSrc}
              metadata={heroImgMetadata}
              lightbox={false}
              {...imageAnimation}
            />
          ) : (
            <FullLengthDiv />
          )}
        </amp-story-grid-layer>
        <Head>
          <style>{`
            .padding-top {
              padding-top: 20px;
            }
          `}</style>
        </Head>
        <amp-story-grid-layer template="vertical" class=" padding-top">
          <LogoWrapper>
            <PublisherLogoHeader visualStoryConfig={visualStoryConfig} />
          </LogoWrapper>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="thirds">
          <StyledTextWrapper>
            <div {...textAnimation}>
              <StyledHeadline className="qt-amp-visual-story-cover-headline">{headline}</StyledHeadline>
              {authorNames && (
                <Fragment>
                  <Spacer token="xs" />
                  <StyledAuthors>{authorNames}</StyledAuthors>
                </Fragment>
              )}
            </div>
          </StyledTextWrapper>
        </amp-story-grid-layer>
      </AmpStoryPage>
    </Fragment>
  );
};

export const CoverPage = withStoryAndConfig(CoverPageBase);

const StyledTextWrapper = styled.div`
  width: 100%;
  max-height: 100%;
  position: absolute;
  bottom: 0;
  padding: 32px;
  color: ${(props) => props.theme.color.white};
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.2) 5%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 0.75)
  );
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
