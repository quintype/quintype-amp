import React, { Fragment } from "react";
import { PublisherLogoHeaderTypes } from "./types";
import { withConfig } from "../../context";
import get from "lodash/get";
import { Head } from "../index";

export const PublisherLogoHeaderBase = ({ config, visualStoryConfig }: PublisherLogoHeaderTypes) => {
  const publisherName = get(config, ["publisherConfig", "publisher-name"], "");
  const logo = get(config, ["ampConfig", "logo-url"], null);
  const logoAlignment = get(visualStoryConfig, ["logoAlignment"], "");
  const width = 600;
  if (!logo) return null;

  const logoUrl = get(visualStoryConfig, ["logoUrl"], logo);

  return (
    <Fragment>
      <Head>
        <style>{`
          .logo-align-left img {
            object-fit: contain;
            min-width: auto;
            width: auto;
            margin: inherit;
          }

          .logo-align-right img {
            min-width: auto;
            width: auto;
            margin-right: inherit;
            object-fit: contain;
          }

          .logo-align-center img {
            object-fit: contain;
          }
        `}</style>
      </Head>
      {logoAlignment ? (
        <div className={`logo-align-${logoAlignment}`}>
          <amp-img alt={publisherName} src={`${logoUrl}?w=${width}`} layout="fill" />
        </div>
      ) : (
        <a href="/">
          <amp-img class="logo-align-center" alt={publisherName} src={`${logo}?w=${width}`} layout="fill" />
        </a>
      )}
    </Fragment>
  );
};

export const PublisherLogoHeader = withConfig(PublisherLogoHeaderBase);
