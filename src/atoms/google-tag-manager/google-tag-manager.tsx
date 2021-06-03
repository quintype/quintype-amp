import React from "react";
import { Analytics } from "../analytics";
import { withConfig } from "../../context";

const GoogleTagManagerBase = ({ config }) => {
  const gtmID = config.ampConfig["gtm-id"];
  if (!gtmID) return null;

  return (
    <Analytics
      config={`https://www.googletagmanager.com/amp.json?id=${gtmID}&gtm.url=SOURCE_URL`}
      data-credentials="include"
    />
  );
};

const GoogleTagManager = withConfig(GoogleTagManagerBase);
export { GoogleTagManager, GoogleTagManagerBase };
