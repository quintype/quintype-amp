import React, { Fragment } from "react";
import { StoryElementProps } from "../types";
import getYouTubeID from "@rvgpl/get-youtube-id";
import { Common } from "../../common-types";
import Helmet from "react-helmet";
import styled from "styled-components";

const StyledYouTube = styled.div.attrs(({ inlineStyles }: StyledYouTubeTypes) => ({
  style: inlineStyles
}))<StyledYouTubeTypes>``;

export interface StyledYouTubeTypes {
  inlineStyles?: object;
}

type YouTubeProps = StoryElementProps & Common;

const YouTube = ({ element, layout = "responsive", width = "480", height = "270", inlineStyles }: YouTubeProps) => {
  const youtubeID = element.url && getYouTubeID(element.url);

  if (!youtubeID) {
    return null;
  }

  return (
    <Fragment>
      <Helmet>
        <script async={undefined} custom-element="amp-youtube" src="https://cdn.ampproject.org/v0/amp-youtube-0.1.js" />
      </Helmet>
      <StyledYouTube inlineStyles={inlineStyles}>
        <amp-youtube data-videoid={youtubeID} layout={layout} width={width} height={height} />
      </StyledYouTube>
    </Fragment>
  );
  // return
};

export { YouTube };
