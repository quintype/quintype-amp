import React, { Fragment } from "react";
import { PublisherLogoHeaderTypes } from "./types";
import { withConfig } from "../../context";
import get from "lodash/get";
import { Head } from "../index";

export const PublisherLogoHeaderBase = ({ config, visualStoryConfig }: PublisherLogoHeaderTypes) => {
  const publisherName = get(config, ["publisherConfig", "publisher-name"], "");
  const logo = get(config, ["ampConfig", "logo-url"], null);
  const visualStoriesConfig = get(config, ["opts", "featureConfig", "visualStories"]) || [];
  const logoAlignment = visualStoryConfig && (Array.isArray(visualStoriesConfig) === false ? visualStoryConfig.logoAlignment : visualStoryConfig.customTemplatelogoAlignment);
  const logoUrl = visualStoryConfig && (Array.isArray(visualStoriesConfig) === false ?  visualStoryConfig.logoUrl : visualStoryConfig.customTemplatelogoUrl) || logo;

  if (!logo) return null;
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
          <amp-img alt={publisherName} src={logoUrl} layout="fill" />
        </div>
      ) : (
        <a href="/">
          <amp-img class="logo-align-center" alt={publisherName} src={logo} layout="fill" />
        </a>
      )}
    </Fragment>
  );
};

export const PublisherLogoHeader = withConfig(PublisherLogoHeaderBase);
