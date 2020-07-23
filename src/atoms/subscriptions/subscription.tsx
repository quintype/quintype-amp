import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
// import { SubscriptionProps } from "./types";

export const Subscription = () => {
  // const ampSubscriptionProps = {
  //   ...(services && { services }),
  //   ...(score && { score }),
  //   ...(fallbackEntitlement && { fallbackEntitlement })
  // };
  return (
    <Fragment>
      <Helmet>
        <script
          async={undefined}
          custom-element="amp-subscriptions"
          src="https://cdn.ampproject.org/v0/amp-subscriptions-0.1.js"
        />
        <script type="application/json" id="amp-subscriptions">
          {JSON.stringify({
            services: [
              {
                authorizationUrl: "https://www.vikatan.com",
                pingbackUrl: "https://pub.com/amp-pingback?rid=READER_ID&url=SOURCE_URL",
                actions: {
                  login: "https://www.google.com",
                  subscribe: "https://www.facebook.com"
                }
              }
            ],
            score: {
              supportsViewer: 10,
              isReadyToPay: 9
            },
            fallbackEntitlement: {
              source: "fallback",
              granted: false,
              grantReason: "SUBSCRIBER",
              data: {
                isLoggedIn: false,
                articlesRead: 4,
                articlesLeft: 1,
                articleLimit: 5
              }
            }
          })}
        </script>
      </Helmet>
    </Fragment>
  );
};
