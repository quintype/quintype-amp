import React, { Fragment } from "react";
import { PublisherLogoHeaderTypes } from "./types";
import { withConfig } from "../../context";
import get from "lodash/get";
import { Head } from "../index";

export const PublisherLogoHeaderBase = ({ config, visualStoryConfig }: PublisherLogoHeaderTypes) => {
  const publisherName = get(config, ["publisherConfig", "publisher-name"], "");
  const logo = get(config, ["ampConfig", "logo-url"], null);
  const logoAlignment = visualStoryConfig && visualStoryConfig.logoAlignment;
  const logoUrl = (visualStoryConfig && visualStoryConfig.logoUrl) || logo;

  if (!logo) return null;
  return (
    <Fragment>
      <Head>
        <style>{`
          .qt-amp-publisher-logo-header img {
            object-fit: contain
          }
          .header-logo-wrapper {
            display: flex;
          }
          .left {
            justify-content: start;
          }
          .center {
            justify-content: center;
          }
          .right {
            justify-content: end;
            margin-right: 5px;
          }
        `}</style>
      </Head>
      {logoAlignment ? (
        <div className={`header-logo-wrapper ${logoAlignment}`}>
          <amp-img class="qt-amp-publisher-logo-header" alt={publisherName} src={logoUrl} width="96" height="96" />
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
