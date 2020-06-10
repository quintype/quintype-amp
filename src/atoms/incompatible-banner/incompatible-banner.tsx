import React from "react";
import styled from "styled-components";
import { withStory } from "../../context";
import get from "lodash.get";
import { StyledBannerTypes, IncompatibleBannerTypes } from "./types";
export const StyledBanner = styled.div.attrs(({ inlineStyles }: StyledBannerTypes) => ({
  style: inlineStyles
}))<StyledBannerTypes>`
  margin: 15px 10px;
`;
const BannerWrapper = styled.div`
  position: absolute;
  top: 60px;
  background-color: ${(props) => props.theme.color.mono4};
  width: 100%;
  text-align: center;
  line-height: ${(props) => props.theme.font.lineHeight.level5};
`;

const IncompatibleBannerBase = ({ story, inlineStyles }: IncompatibleBannerTypes) => {
  const isAmpSupported = get(story, "is-amp-supported", null);
  return (
    !isAmpSupported && (
      <BannerWrapper>
        <StyledBanner inlineStyles={inlineStyles}>
          Some of the elements in this story are not compatible with AMP. To view the complete story, please{" "}
          <a href={story.url}>click here</a>
        </StyledBanner>
      </BannerWrapper>
    )
  );
};

export const IncompatibleBanner = withStory(IncompatibleBannerBase);
