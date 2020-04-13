import React, { Fragment } from "react";
import { StoryElementProps } from "../types";
import getYouTubeID from "@rvgpl/get-youtube-id";
import { Common } from "../../common-types";
import Helmet from "react-helmet";

type YouTubeProps = StoryElementProps & Common;

const YouTube = ({ element, layout = "responsive", width = "480", height = "270" }: YouTubeProps) => {
  const youtubeID = element.url && getYouTubeID(element.url);

  if (!youtubeID) {
    return null;
  }

  return (
    <Fragment>
      <Helmet>
        <script async={undefined} custom-element="amp-youtube" src="https://cdn.ampproject.org/v0/amp-youtube-0.1.js" />
      </Helmet>
      <amp-youtube data-videoid={youtubeID} layout={layout} width={width} height={height} />
    </Fragment>
  );
  // return
};

export { YouTube };
