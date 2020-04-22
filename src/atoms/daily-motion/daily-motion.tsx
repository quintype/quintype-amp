import React, { Fragment } from "react";
import Helmet from "react-helmet";
import { DailyMotionTypes } from "./types";

const DailyMotion = ({
  layout = "responsive",
  width = "16",
  height = "9",
  "data-videoid": videoID,
  ...props
}: DailyMotionTypes) => {
  return (
    <Fragment>
      <Helmet>
        <script
          async={undefined}
          custom-element="amp-dailymotion"
          src="https://cdn.ampproject.org/v0/amp-dailymotion-0.1.js"
        />
      </Helmet>

      <amp-dailymotion data-videoid={videoID} layout={layout} width={width} height={height} {...props} />
    </Fragment>
  );
};

export { DailyMotion };
