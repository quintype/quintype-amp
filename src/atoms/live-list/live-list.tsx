import React, { Fragment } from "react";
import { LiveListTypes, LiveListAttrs } from "./types";
import { Helmet } from "react-helmet";
import { withStoryAndConfig } from "../../context";
import get from "lodash.get";

const LiveListBase = ({
  story,
  children,
  "data-poll-interval": dataPollInterval,
  "data-max-items-per-page": dataMaxItemsPerPage
}: LiveListTypes) => {
  const id = `story-${story.id}`;
  const disabled = get(story, ["metadata", "is-closed"], true);
  const attributes: LiveListAttrs = {
    "data-poll-interval": dataPollInterval || "30000",
    "data-max-items-per-page": dataMaxItemsPerPage || "1000"
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
      </Helmet>
      <amp-live-list id={id} {...attributes}>
        <button update="" on={`tap:${id}.update`}>
          Tap to update
        </button>
        <div items="">{children}</div>
      </amp-live-list>
    </Fragment>
  );
};

export const LiveList = withStoryAndConfig(LiveListBase);
