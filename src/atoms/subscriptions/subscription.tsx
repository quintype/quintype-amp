import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { SubscriptionProps } from "./types";

export const Subscription = ({ services, score, fallbackEntitlement }: SubscriptionProps) => {
  const ampSubscriptionProps = {
    ...(services && { services }),
    ...(score && { score }),
    ...(fallbackEntitlement && { fallbackEntitlement })
  };
  return (
    <Fragment>
      <Helmet>
        <script
          async={undefined}
          custom-element="amp-subscriptions"
          src="https://cdn.ampproject.org/v0/amp-subscriptions-0.1.js"
        />

        <script
          type="application/json"
          id="amp-subscriptions"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ampSubscriptionProps) }}
        />
      </Helmet>
    </Fragment>
  );
};
