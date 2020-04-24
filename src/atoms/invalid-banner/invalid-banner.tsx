import React from "react";
import styled, { css, withTheme } from "styled-components";
import { withStory } from "../../context";
import { InvalidBannerTypes } from "./types";
import { genStyles } from "../../helpers/gen-styles";
import get from "lodash.get";

const bannerWrapperBase = css`
  position: absolute;
  top: 60px;
  background-color: ${(props) => props.theme.color.mono4};
  width: 100%;
  text-align: center;
  line-height: ${(props) => props.theme.font.lineHeight.level5};
`;
const styledBannerBase = css`
  margin: 15px 10px;
`;
const InvalidBannerBase = ({ story, style, theme }: InvalidBannerTypes) => {
  const wrapperStyles = get(style, "wrapper", null);
  const bannerStyles = get(style, "banner", null);
  const BannerWrapper = styled.div`
    ${genStyles(bannerWrapperBase, wrapperStyles, theme)}
  `;
  const StyledBanner = styled.div`
    ${genStyles(styledBannerBase, bannerStyles, theme)}
  `;
  const storyUrl = story.url;
  return (
    <BannerWrapper>
      <StyledBanner>
        Some of the elements in this story are not compatible with AMP. To view the complete story, please{" "}
        <a href={storyUrl}>click here</a>
      </StyledBanner>
    </BannerWrapper>
  );
};

export const InvalidBanner = withTheme(withStory(InvalidBannerBase));
