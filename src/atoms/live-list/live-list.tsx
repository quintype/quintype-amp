import React, { Fragment } from "react";
import { LiveListTypes, LiveListAttrs } from "./types";
import { Helmet } from "react-helmet";
import { withStoryAndConfig } from "../../context";
import get from "lodash.get";

export const LiveListBase = ({ story, config, children }: LiveListTypes) => {
  const id = `story-${story.id}`;
  const disabled = get(story, ["metadata", "is-closed"], false);
  const attributes: LiveListAttrs = {
    "data-poll-interval": get(config, ["opts", "featureConfig", "liveBlog", "dataPollInterval"], null) || "30000",
    "data-max-items-per-page": get(config, ["opts", "featureConfig", "liveBlog", "dataMaxItemsPerPage"], null) || "1000"
  };
  if (disabled) attributes.disabled = "";
  return (
    <Fragment>
      <Helmet>
        <script
          async={undefined}
          custom-element="amp-live-list"
          src="https://cdn.ampproject.org/v0/amp-live-list-0.1.js"
        />
        <style>{`
          .qt-amp-live-blog-refresh-btn{
            margin: 0 auto;
            width: 150px;
            height: 30px;
            font-size: 16px;
          }
        `}</style>
      </Helmet>
      <amp-live-list id={id} {...attributes}>
        <button className="qt-amp-live-blog-refresh-btn" update="" on={`tap:${id}.update`}>
          Tap to refresh
        </button>
        <div items="">{children}</div>
      </amp-live-list>
    </Fragment>
  );
};

export const LiveList = withStoryAndConfig(LiveListBase);
