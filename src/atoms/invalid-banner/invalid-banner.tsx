import React from "react";
import styled from "styled-components";
import { withStory } from "../../context";

const BannerWrapper = styled.div`
  position: absolute;
  top: 60px;
  background-color: ${(props) => props.theme.color.mono4};
  width: 100%;
  text-align: center;
  line-height: ${(props) => props.theme.font.lineHeight.level5};
`;
const StyledBanner = styled.div`
  margin: 15px 10px;
`;

const InvalidBannerBase = ({ story }) => {
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

export const InvalidBanner = withStory(InvalidBannerBase);
