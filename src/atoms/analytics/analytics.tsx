import React, { Fragment } from "react";
import { AnalyticsProps } from "./types";
import Helmet from "react-helmet";

const Analytics = ({ type, targets, config, "data-credentials": dataCredentials, id }: AnalyticsProps) => {
  const ampAnalyticsProps = {
    ...(type && { type }),
    ...(id && { id }),
    ...(dataCredentials && { "data-credentials": dataCredentials }),
    ...(config && { config })
  };

  return (
    <Fragment>
      <Helmet>
        <script
          async={undefined}
          custom-element="amp-analytics"
          src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"
        />
      </Helmet>
      <amp-analytics {...ampAnalyticsProps}>
        {targets && Object.keys(targets).length > 0 && (
          <script type="application/json" dangerouslySetInnerHTML={{ __html: JSON.stringify(targets) }} />
        )}
      </amp-analytics>
    </Fragment>
  );
};

export { Analytics };
