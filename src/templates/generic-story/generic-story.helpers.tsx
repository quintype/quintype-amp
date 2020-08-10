import get from "lodash.get";

export const getServicesParams = ({ story, config }) => {
  const authUrlFunction = get(config.opts, ["featureConfig", "subscriptions", "services", "authorizationUrl"], null);
  const pingbackUrlFunction = get(config, ["opts", "featureConfig", "subscriptions", "services", "pingbackUrl"], null);
  const loginPageUrl = get(config, ["opts", "featureConfig", "subscriptions", "services", "actions", "login"], null);
  const subscriptionPageUrl = get(
    config,
    ["opts", "featureConfig", "subscriptions", "services", "actions", "subscribe"],
    null
  );

  const authUrl = authUrlFunction && authUrlFunction({ story });
  const pingbackUrl = pingbackUrlFunction && pingbackUrlFunction({ story });
  const services = [
    {
      authorizationUrl: authUrl,
      pingbackUrl,
      actions: {
        login: loginPageUrl,
        subscribe: subscriptionPageUrl
      }
    }
  ];
  return services;
};
export const getScoreParams = ({ config }) => {
  const supportsViewer = get(config, ["opts", "featureConfig", "subscriptions", "score", "supportsViewer"], null);
  const isReadyToPay = get(config, ["opts", "featureConfig", "subscriptions", "score", "isReadyToPay"], null);
  const score = {
    supportsViewer,
    isReadyToPay
  };
  return score;
};

export const getFallbackEntitlementParams = ({ config }) => {
  const source = get(config, ["opts", "featureConfig", "subscriptions", "fallbackEntitlement", "source"], null);
  const granted = get(config, ["opts", "featureConfig", "subscriptions", "fallbackEntitlement", "granted"], null);
  const grantReason = get(
    config,
    ["opts", "featureConfig", "subscriptions", "fallbackEntitlement", "grantReason"],
    null
  );
  const numberRemaining = get(
    config,
    ["opts", "featureConfig", "subscriptions", "fallbackEntitlement", "data", "numberRemaining"],
    null
  );
  const isLast = get(config, ["opts", "featureConfig", "subscriptions", "fallbackEntitlement", "data", "isLast"], null);
  const isLoggedIn = get(
    config,
    ["opts", "featureConfig", "subscriptions", "fallbackEntitlement", "data", "isLoggedIn"],
    null
  );

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
