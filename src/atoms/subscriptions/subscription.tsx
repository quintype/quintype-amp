import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { SubscriptionProps } from "./types";
import { withStoryAndConfig } from "../../context";
import {
  getServicesParams,
  getScoreParams,
  getFallbackEntitlementParams,
  subscriptionsEnabled
} from "./subscriptions.helpers";

const SubscriptionBase = ({ story, config }: SubscriptionProps) => {
  if (!subscriptionsEnabled(story, config)) return null;

  const services = getServicesParams(story, config);
  const score = getScoreParams(config);
  const fallbackEntitlement = getFallbackEntitlementParams(config);

  return (
    <Fragment>
      <Helmet>
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
        <script type="application/json" crossorigin="anonymous" id="amp-subscriptions">
          {JSON.stringify({
            services,
            score,
            fallbackEntitlement
          })}
        </script>
      </Helmet>
    </Fragment>
  );
};

export const Subscription = withStoryAndConfig(SubscriptionBase);
