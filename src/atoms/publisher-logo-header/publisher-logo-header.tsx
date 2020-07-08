import React, { Fragment } from "react";
import { PublisherLogoHeaderTypes } from "./types";
import { withConfig } from "../../context";
import get from "lodash.get";
import { Head } from "../head";

export const PublisherLogoHeaderBase = ({ config }: PublisherLogoHeaderTypes) => {
  const publisherName = get(config, ["publisherConfig", "publisher-name"], "");
  const logo = get(config, ["ampConfig", "logo-url"], null);
  if (!logo) return null;
  return (
    <Fragment>
      <Head>
        <style>{`
          .qt-amp-publisher-logo-header img {
            object-fit: contain
          }
        `}</style>
      </Head>
      <amp-img class="qt-amp-publisher-logo-header" alt={publisherName} src={logo} layout="fill" />
    </Fragment>
  );
};

export const PublisherLogoHeader = withConfig(PublisherLogoHeaderBase);
