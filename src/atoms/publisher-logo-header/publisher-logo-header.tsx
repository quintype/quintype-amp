import React from "react";
import { PublisherLogoHeaderTypes } from "./types";

export const PublisherLogoHeader = ({
  logoSrc,
  width = "200px",
  height = "50px",
  publisherName
}: PublisherLogoHeaderTypes) => {
  return (
    <a href="/">
      <amp-img alt={publisherName} src={logoSrc} width={width} height={height} />
    </a>
  );
};
