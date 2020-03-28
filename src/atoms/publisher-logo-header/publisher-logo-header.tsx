import React from "react";
import { PublisherLogoHeaderTypes } from "./types";

export const PublisherLogoHeader = ({ logoSrc }: PublisherLogoHeaderTypes) => {
  return (
    <a href="/">
      <amp-img alt="Publisher Logo" src={logoSrc} width="200px" height="50px" />
    </a>
  );
};
