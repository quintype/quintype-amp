import React from "react";
import styled from "styled-components";
import { withStory } from "../../context";

const StyledBanner = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 60px;
  line-height: 50px;
  background-color: ${(props) => props.theme.color.mono4};
`;

const InvalidBannerBase = ({ story }) => {
  const storyUrl = story.url;
  return (
    <StyledBanner>
      Some of the elements in this story are not compatible with AMP. To view the complete story, please{" "}
      <a href={storyUrl}>click here</a>
    </StyledBanner>
  );
};

export const InvalidBanner = withStory(InvalidBannerBase);
