import React, { Fragment } from "react";
import { PublisherLogoHeaderTypes } from "./types";
import { withConfig } from "../../context";
import get from "lodash.get";
import { Head, Image } from "../index";

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
      <a href="/">
        <Image class="qt-amp-publisher-logo-header" alt={publisherName} slug={logo} layout="fill" skipSrcset={true} />
      </a>
    </Fragment>
  );
};

export const PublisherLogoHeader = withConfig(PublisherLogoHeaderBase);
