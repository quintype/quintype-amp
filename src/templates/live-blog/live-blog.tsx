// slots: top, bottom, after every card, after every alternate card
// overrides: card info ("updated at" line after every card)
// config:
//  - ascending/descending order of "card-added-at" time
//  - show/hide "added at"; "updated at"
//  - max items per page
//  - poll-interval

import React from "react";
import { CommonTemplateTypes } from "../common-template-types";
import { Layout } from "../../atoms";

export const LiveBlog = ({ story, config }: CommonTemplateTypes) => {
  return (
    <Layout story={story} config={config}>
      <div>Live blog goes here</div>
    </Layout>
  );
};
