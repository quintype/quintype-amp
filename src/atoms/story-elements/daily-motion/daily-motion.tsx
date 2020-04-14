import React, { Fragment } from "react";
import Helmet from "react-helmet";
import { StoryElementProps } from "../types";
import { Common } from "../../common-types";

type DailyMotionElementProps = StoryElementProps & Common;

const DailyMotion = ({ element, layout = "responsive", width = "16", height = "9" }: DailyMotionElementProps) => {
  const { metadata } = element;
  if (!metadata) return null;

  return (
    <Fragment>
      <Helmet>
        <script
          async={undefined}
          custom-element="amp-dailymotion"
          src="https://cdn.ampproject.org/v0/amp-dailymotion-0.1.js"
        />
      </Helmet>

      <amp-dailymotion data-videoid={metadata["video-id"]} layout={layout} width={width} height={height} />
    </Fragment>
  );
};

export { DailyMotion };
