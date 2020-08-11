import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { SubscriptionProps } from "./types";

export const Subscription = ({ services, score, fallbackEntitlement }: SubscriptionProps) => {
  return (
    <Fragment>
      <Helmet>
        <link rel="preload" as="script" href="https://cdn.ampproject.org/v0/amp-subscriptions-0.1.js" />
        <link rel="preload" as="script" href="https://cdn.ampproject.org/v0/amp-mustache-0.2.js" />
        <script type="application/json" id="amp-subscriptions">
          {JSON.stringify({
            services,
            score,
            fallbackEntitlement
          })}
        </script>
        <script
          async={undefined}
          custom-element="amp-subscriptions"
          src="https://cdn.ampproject.org/v0/amp-subscriptions-0.1.js"
        />
        <script
          async={undefined}
          custom-template="amp-mustache"
          src="https://cdn.ampproject.org/v0/amp-mustache-0.2.js"
        />
      </Helmet>
    </Fragment>
  );
};
