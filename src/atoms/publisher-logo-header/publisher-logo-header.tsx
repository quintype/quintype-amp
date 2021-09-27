import React, { Fragment } from "react";
import { PublisherLogoHeaderTypes } from "./types";
import { withConfig } from "../../context";
import get from "lodash/get";
import { Head } from "../index";

export const PublisherLogoHeaderBase = ({ config, alignLogo = "" }: PublisherLogoHeaderTypes) => {
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
          .common {
            display: flex;
          }
          .left {
            justify-content: start;
          }
          .center {
            justify-content: center;
            align-item: center;
          }
        `}</style>
      </Head>
      {alignLogo ? (
        <div className={`common ${alignLogo}`}>
          <amp-img class="qt-amp-publisher-logo-header" alt={publisherName} src={logo} width="96" height="96" />
        </div>
      ) : (
        <a href="/">
          <amp-img class="qt-amp-publisher-logo-header" alt={publisherName} src={logo} layout="fill" />
        </a>
      )}
    </Fragment>
  );
};

export const PublisherLogoHeader = withConfig(PublisherLogoHeaderBase);
