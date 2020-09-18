AMP paywall and subscription support gives control over which content can be accessed by a Reader and with what restrictions, based on the Reader’s subscription status, number of views, and other factors.

# How It works ?

1. The AMP Runtime calls the Authorization endpoint of all configured services.
2. If all services fail to respond, the fallback entitlement will be used.
3. The AMP Runtime uses the response to either hide or show different sections as defined by the Attributes.
4. Attributes like `subscriptions-action="subscribe"` to subscribe button and `subscriptions-action="login"` to login button are added. 
5. The AMP Runtime will pick the URL from the `config` and opens it in a popup.
6. After the story has been shown to the Reader, AMP Runtime calls the Pingback endpoint that can be used to update the countdown meter (number of free views used).
7. The `amp-subscriptions` script is added only for a story behind subscription paywall, i.e., `story.access === “subscription`.
8. `amp-subscriptions` relies on the [Schema.org](https://schema.org/) page-level configuration for two main properties.
   * The product ID that the user must be granted to view the content: `productID`
   * Whether this content requires this product at this time: `isAccessibleForFree`.
   These properties are added to `NewsArticle` and `Article` schema which are publisher specific.
9. Paywall will be displayed if it is a premium story (based on the access key).
10. Access is driven through the Authorization URL.
11. In a premium story, Header card will always be shown.
12. If a user is on metering, full story will be shown.
13. Number of cards to be displayed on a premium story for a non-subscriber will be decided based on the `no-of-visible-cards-in-a-blocked-story` key from publisher config, `api/v1/config`, if provided, else it falls back to the default value which is ` 1 ` (the first card).
14. Paywalls are overridable with the help of Render Props.


# How to Integrate ?

To integrate this feature, follow the below steps -

1. The `amp-subscriptions` component must be configured using JSON configuration.


|          Property           |     value     |        Description                                     |
| -------------- | ------------------------ | ------------------------- |
| `services`            |        `<array>` of `<object>`       |  This `array` is Mandatory and must include: one local service and Zero or more vendor services. |
| `score`               |        `<object>`                    |  Determines which service is selected if no valid entitlements are returned. This is optional. |
| `fallbackEntitlement` |        `<object>`                    |  Determines what level of access the Reader should have if all services fail to respond to the Authorization requests. This is optional. |


This configuration must be added to the `featureConfig`. It can be accessed via `opts.featureConfig.subscriptions`.

```jsx
 featureConfig: {
     subscriptions: {
      services: [
        {
        "authorizationUrl": ({story}) => `https://pub.com/amp-authorisation?rid=READER_ID&url=SOURCE_URL`,
        "pingbackUrl": ({story}) => `https://pub.com/amp-pingback?rid=READER_ID&url=SOURCE_URL`,
        actions: { login: "https://pub.com/login", subscribe: "https://pub.com/subscribe" }
        }
      ],
      score: { supportsViewer: 10, isReadyToPay: 9 },
      fallbackEntitlement: {
        source: "fallback”,
        granted: true,
        grantReason: "SUBSCRIBER",
        data: {
            "isLoggedIn": false,
            "numberRemaining": 4,
            "isLast": false
         }
      }
    }
 }
```

2. The HTTPS URL for the Authorization and Pingback Endpoints i.e., `authorizationUrl` and `pingbackUrl` respectively are to be added to the services object along with the query parameters `readerId`, `sourceUrl` and `returnUrl`. These are functions where `story` is passed in.

3. The login page will open as a result of a `login` action. The URL for the login page can be provided here `services -> actions -> login`.

```jsx
{
  "actions": {
    "login": "https://pub.com/amp-login?rid=READER_ID&url=SOURCE_URL",
    ...
  }
}
```

4. The subscribe page will open as a result of a `subscribe` action. The URL for the subscribe page can be provided here `services -> actions -> subscribe`.

```jsx
{
  "actions": {
    "subscribe": "https://pub.com/amp-subscribe?rid=READER_ID&url=SOURCE_URL",
    ...
  }
}
```

5. If all configured services fail to get the entitlements, the entitlement configured under `fallbackEntitlement` section will be used as a fallback entitlement. Default values can be added here.

```jsx
{
  "fallbackEntitlement": {
    "source": "fallback",
    "granted": true,
    "grantReason": "SUBSCRIBER",
    "data": {
      "isLoggedIn": false
    }
  }
}
```

6. The `data` object which is inside the `fallbackEntitlement` object can be used for messaging related to metering or article count orelse left empty. `numberRemaining` tells the number of free metered articles left. The number of free metered stories to be shown is set on the subscription platform. `isLast` is a boolean value which shows `true` when the reader is reading his last free metered story. The values inside the `data` object can be customized.

```jsx
{
  "fallbackEntitlement": {
    "source": "fallback",
    "granted": true,
    "grantReason": "SUBSCRIBER",
    "data": {
      "isLoggedIn": false,
      "numberRemaining": 4,
      "isLast": false,
    }
  }
}
```

# Paywalls

## Hard paywall

This `SubscriberAccessPaywall` component is the hard paywall. The look of the `SubscriberAccessPaywall` can be changed using the render prop `paywallRender`. In case `paywallRender` is passed in the config, it is rendered. Otherwise a default `SubscriberAccessPaywall` is rendered.
Render Prop should be passed like below :

 ```jsx
  ampRoutes(app, {
    render?: {
      subscriptionRender? : {
          paywallRender: ({ config, services, score, fallbackEntitlement }) => <MyCustomPaywall config={config} services={services} score={score} fallbackEntitlement={fallbackEntitlement} />
        })
      }
    }
```

This paywall is rendered when the user is a subscriber/non-subscriber or is logged/not-logged into their account.

### Scenario 1

Response for a user who has read all the free stories and is not subscribed or logged in. The paywall renders with both subscribe and login buttons along with the message provided.

```jsx
{
    "granted": false,
    "grantReason": "SUBSCRIBER",
    "data": {
      "isLoggedIn": false
    }
}
```

### Scenario 2

Response for a user who has  read all free stories and is subscribed but not logged in. The paywall renders with login button along with the message provided.

```jsx
{
    "granted": true,
    "grantReason": "SUBSCRIBER",
    "data": {
      "isLoggedIn": false
    }
}
```

### Scenario 3

Response for a user who has read all free stories and is not subscribed but logged in. The paywall renders with subscribe button along with the message provided.

```jsx
{
    "granted”: false,
    "grantReason": "SUBSCRIBER",
    "data": {
      "isLoggedIn": true
    }
}
```

## Metered Paywall

This `MeteredPaywall` component is the Metering paywall. The look of the `MeteredPaywall` can be changed using the render prop `meterRender`. In case `meterRender` is passed in the config, it is rendered. Otherwise a default `MeteredPaywall` is rendered.
`MeteredPaywall` component renders both metered and meter exhausted paywalls depending the the `numberRemaining` and `isLast` key values. The same `renderProp` can be used to change both the meterings.
Render Prop should be passed like below :

```jsx
  ampRoutes(app, {
  render?: {
    subscriptionRender? : {
        meterRender: ({ config, services, score, fallbackEntitlement }) => <MyCustomMeteredPaywall config={config} services={services} score={score} fallbackEntitlement={fallbackEntitlement} />
       })
      }
    }
```

This paywall is rendered when the user is on metering. The subscribe and login buttons are displayed when the metering is exhausted. Note that the close button design and animations are from `amp-subscriptions` script and they cannot be changed.


### Scenario 1

Response for an anonymous Reader who has read 4 out of 5 free articles.

```jsx
{
  "granted": true,
  "grantReason": "METERING",
  "data" : {
    "isLoggedIn": false,
    "numberRemaining": 4,
    "isLast": false,
  }
}
```

### Scenario 2

Response for an anonymous Reader who does not have access because they have read 5 out of 5 free articles. This renders the meter exhausted paywall.

```jsx
  "granted": false,
  "data" : {
    "isLoggedIn": false,
    "numberRemaining": 5,
    "isLast": true,
  }
}
```
