import get from "lodash.get";

export const getServicesParams = (story, config) => {
  const authUrlFunction = get(config, ["opts", "featureConfig", "subscriptions", "services", "authorizationUrl"], null);
  const pingbackUrlFunction = get(config, ["opts", "featureConfig", "subscriptions", "services", "pingbackUrl"], null);
  const loginPage = get(config, ["opts", "featureConfig", "subscriptions", "services", "actions", "login"], null);
  const subscriptionPage = get(
    config,
    ["opts", "featureConfig", "subscriptions", "services", "actions", "subscribe"],
    null
  );

  const authorizationUrl = authUrlFunction && authUrlFunction({ story, config });
  const pingbackUrl = pingbackUrlFunction && pingbackUrlFunction({ story, config });
  const loginPageUrl = loginPage && loginPage({ story, config });
  const subscriptionPageUrl = subscriptionPage && subscriptionPage({ story, config });

  if (!authorizationUrl || !loginPageUrl || !subscriptionPageUrl)
    throw new Error(
      "Please pass params required for AMP subscriptions. Required params are authorizationUrl, actions.login, actions.subscribe"
    );

  const services = [
    {
      authorizationUrl,
      pingbackUrl,
      actions: {
        login: loginPageUrl,
        subscribe: subscriptionPageUrl
      }
    }
  ];
  return services;
};
export const getScoreParams = (config) => {
  const supportsViewer = get(config, ["opts", "featureConfig", "subscriptions", "score", "supportsViewer"], 0);
  const isReadyToPay = get(config, ["opts", "featureConfig", "subscriptions", "score", "isReadyToPay"], 0);
  const score = {
    supportsViewer,
    isReadyToPay
  };
  return score;
};

export const getFallbackEntitlementParams = (config) => {
  const source = get(config, ["opts", "featureConfig", "subscriptions", "fallbackEntitlement", "source"], "fallback");
  const grantedFunction = get(
    config,
    ["opts", "featureConfig", "subscriptions", "fallbackEntitlement", "granted"],
    null
  );
  const grantReasonFunction = get(
    config,
    ["opts", "featureConfig", "subscriptions", "fallbackEntitlement", "grantReason"],
    null
  );
  const numberRemaining = get(
    config,
    ["opts", "featureConfig", "subscriptions", "fallbackEntitlement", "data", "numberRemaining"],
    1
  );
  const isLast = get(
    config,
    ["opts", "featureConfig", "subscriptions", "fallbackEntitlement", "data", "isLast"],
    false
  );
  const isLoggedInFunction = get(
    config,
    ["opts", "featureConfig", "subscriptions", "fallbackEntitlement", "data", "isLoggedIn"],
    null
  );
  const granted = grantedFunction && grantedFunction({ config });
  const grantReason = grantReasonFunction && grantReasonFunction({ config });
  const isLoggedIn = isLoggedInFunction && isLoggedInFunction({ config });

  const fallbackEntitlement = {
    source,
    granted,
    grantReason,
    data: {
      numberRemaining,
      isLast,
      isLoggedIn
    }
  };
  return fallbackEntitlement;
};

export const subscriptionsEnabled = (story, config): boolean => {
  const authUrlFunction = get(config, ["opts", "featureConfig", "subscriptions", "services", "authorizationUrl"], null);
  const authUrl = authUrlFunction && authUrlFunction({ story, config });
  return !!authUrl;
};
