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

  const visualStoriesConfig = get(config, ["opts", "featureConfig", "visualStories"], {});

  // To support PB config
  const isLogoAlignmentAFunction = typeof visualStoriesConfig.logoAlignment === "function";
  const getLogoAlignment = isLogoAlignmentAFunction
    ? visualStoriesConfig.logoAlignment(config)
    : visualStoriesConfig.logoAlignment;

  const isLogoUrlAFunction = typeof visualStoriesConfig.logoUrl === "function";
  const getLogoUrl = isLogoUrlAFunction ? visualStoriesConfig.logoUrl(config) : visualStoriesConfig.logoUrl;

  let logoAlignment = getLogoAlignment;
  let logoUrl = getLogoUrl;

  if (Array.isArray(visualStoriesConfig)) {
    const visualStoryTheme = get(story, ["metadata", "story-attributes", "visualstorytheme"], []);
    const theme = get(visualStoryTheme, [0]);

    // if theme 2, it will pick up value from 2nd array
    // if theme 3, it will pick up value from 3rd array
    // else, it will pick up from 1st array
    const isTheme2 = theme === "theme-2";
    const isTheme3 = theme === "theme-3" ? 2 : 0;
    const isTheme = isTheme2 ? 1 : isTheme3;

    // To support PB config
    const isLogoAlignmentTheme = typeof visualStoriesConfig[isTheme].logoAlignment === "function";
    const getLogoAlignmentTheme = isLogoAlignmentTheme
      ? visualStoriesConfig[isTheme].logoAlignment(config)
      : visualStoriesConfig[isTheme].logoAlignment;

    const isLogoUrlTheme = typeof visualStoriesConfig[isTheme].logoUrl === "function";
    const getLogoUrlTheme = isLogoUrlTheme
      ? visualStoriesConfig[isTheme].logoUrl(config)
      : visualStoriesConfig[isTheme].logoUrl;

    (logoAlignment = visualStoriesConfig[isTheme] && getLogoAlignmentTheme),
      (logoUrl = visualStoriesConfig[isTheme] && getLogoUrlTheme);
  }

  const visualStoryConfig = { logoUrl, logoAlignment };

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
  font-family: ${(props) => props.theme.font.family.primary};
  word-break: break-word;
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
