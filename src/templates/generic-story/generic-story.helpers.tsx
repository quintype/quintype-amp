// import React from "react";
import get from "lodash.get";
// import { StoryElement } from "../../atoms";
// import { Fragment } from "react";
// import { BodyAd } from "../../molecules/ads";

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

// export const displayCardsWithoutBodyAd = ({ story, config }) => {
//   const cardsVisibleForBlockedStory = get(
//     config,
//     ["publisherConfig", "layout", "no-of-visible-cards-in-a-blocked-story"],
//     1
//   );
//   const isAccessible = story.access === "subscription";
//   const grantReason = get(
//     config,
//     ["opts", "featureConfig", "subscriptions", "fallbackEntitlement", "grantReason"],
//     null
//   );
//   const isOnMetering = grantReason === "METERING";
//   const cardsAccessible = (cardIdx) => cardIdx < cardsVisibleForBlockedStory;
//   const cards = story.cards;
//   const visibleCards = cards.slice(0, 2);
//   const cardsBehindPaywall = cards.slice(2);
//   return (
//     <>
//       <section>
//         {visibleCards.map((card) => {
//           const storyCard = card["story-elements"].map((element) => (
//             <StoryElement key={element.id} element={element} />
//           ));
//           return isAccessible && !isOnMetering && <Fragment key={card.id}>{storyCard}</Fragment>;
//         })}
//       </section>
//       <section className="paywall" subscriptions-section="content">
//         {cardsBehindPaywall.map((card, cardIdx) => {
//           const storyCard = card["story-elements"].map((element) => (
//             <StoryElement key={element.id} element={element} />
//           ));
//           return (
//             cardsAccessible(cardIdx) && isAccessible && !isOnMetering && <Fragment key={card.id}>{storyCard}</Fragment>
//           );
//         })}
//       </section>
//       {cards.map((card) => {
//         const storyCard = card["story-elements"].map((element) => <StoryElement key={element.id} element={element} />);
//         return (!isAccessible || isOnMetering) && <Fragment key={card.id}>{storyCard}</Fragment>;
//       })}
//     </>
//   );
// };
// export const displayCardsWithBodyAd = ({ story }) => {
//   const templateName = "default";
//   const canDisplayBodyAd = (cardIdx) => cardIdx === 0;
//   story.cards.map((card, cardIdx) => {
//     const storyCard = card["story-elements"].map((element) => <StoryElement key={element.id} element={element} />);
//     return canDisplayBodyAd(cardIdx) ? (
//       <Fragment key={card.id}>
//         {storyCard}
//         <BodyAd templateName={templateName} />
//       </Fragment>
//     ) : (
//       ""
//     );
//   });
// };
