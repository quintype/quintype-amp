import React from "react";
import styled from "styled-components";
import { withStory } from "../../context";
import { IncompatibleBannerTypes } from "./types";
import get from "lodash.get";

const BannerWrapper = styled.div`
  background-color: ${(props) => props.theme.color.mono4};
  text-align: center;
  line-height: ${(props) => props.theme.font.lineHeight.level5};
  padding: 10px;
  z-index: ${(props) => props.theme.zIndex.z1};
`;

const IncompatibleBannerBase = ({ story }: IncompatibleBannerTypes) => {
  const isAmpSupported = get(story, "is-amp-supported", null);
  return (
    !isAmpSupported && (
      <BannerWrapper>
        Some of the elements in this story are not compatible with AMP. To view the complete story, please{" "}
        <a href={story.url}>click here</a>
      </BannerWrapper>
    )
  );
};

export const IncompatibleBanner = withStory(IncompatibleBannerBase);
