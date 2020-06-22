import React, { Fragment } from "react";
import { StoryElementProps } from "../types";
import getYouTubeID from "@rvgpl/get-youtube-id";
import { Common } from "../../common-types";
import Helmet from "react-helmet";
import styled from "styled-components";

const StyledYoutube = styled.div.attrs(({ style }: { style?: object }) => ({
  style: style
}))``;
type YouTubeProps = StoryElementProps & Common & { inlineStyles?: object };

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
      <StyledYoutube style={inlineStyles}>
        <amp-youtube data-videoid={youtubeID} layout={layout} width={width} height={height} />
      </StyledYoutube>
    </Fragment>
  );
  // return
};

export { YouTube };
