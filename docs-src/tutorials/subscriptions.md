
Subscriptions feature is to restrict a reader from reading a particular content on the page. That particular content is called as a Premium content which is only available when a reader pays for it. The amount to be paid and duration will be mentioned in the Subscription plan. There can be single or multiple plans available and the reader is allowed to buy one or more plans. After the plan expires, the reader needs to buy a plan again to access a premium content.

Subscriptions feature includes showing full content to a subscriber, a metering message to an anonymous user, or a snippet followed by a subscription upsell message to a user who has exhausted their metered quota.

A reader when opens a particular story he sees a block of text which hides the rest of the content (premium content). That block of text is known as Hard paywall. There is another paywall, which is known as Metered Paywall. This is used to mention the reader that the story they are reading is under subscription but they are able to read it because they are under Metering. Metering is a story under subscription which is shown as a free story to the reader. We can set the number of stories to be under this Metering in the subscription platform. When the limit exceeds the reader gets to see a hard paywall.

AMP paywall and subscription support gives control over which content can be accessed by a reader and with what restrictions, based on the reader’s subscription status, number of views, and other factors.


## Terminology
* Authorization endpoint : Authorization is an endpoint which returns the Entitlements object containing values whether to give access to the reader or not.
* Fallback Entitlement: The values configured under this section will be used as a fallback when all the services fail.
* Pingback endpoint: This endpoint is called automatically when the Reader has started viewing the document. One of the main goals of the Pingback is for the Publisher to update metering information.
* Metering : It is implemented with a metered paywall which typically allows access to a set number(this value is set in the subscription platform) of articles before requiring a subscription.
* Subscriber: A Reader who purchases a subscription plan and has access to premium content.
* Subscription: It is a particular subscriber’s access to premium content which is behind a hard paywall.
* Hard paywall: This restricts access to readers from viewing premium content without a subscription. Access to that content is given only after the reader is subscribed i.e., he must be a Subscriber.
* readerID : The Reader ID is an anonymous and unique ID created by the AMP ecosystem. It is unique for each Reader/Publisher pair - a Reader is identified differently to two different Publishers and it is a non-reversible ID.


# How Subscriptions work ?

1. The AMP Runtime calls the Authorization endpoint of all configured services.
2. If all services fail to respond, the fallback entitlement will be used.
3. The AMP Runtime uses the response to either hide or show different sections as defined by the Attributes.
4. Attributes like `subscriptions-action="subscribe"` to subscribe button and `subscriptions-action="login"` to login button are added.
5. The AMP Runtime will pick the URL for login and subscribe buttons from the `config` and opens in a popup.
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

2. The HTTPS URL for the Authorization and Pingback Endpoints i.e., `authorizationUrl` and `pingbackUrl` respectively are to be added to the services object along with the query parameters `readerId`, `sourceUrl` and `returnUrl`. When configuring the URLs for these endpoints, the Publisher can use [substitution variables](https://amp.dev/documentation/components/amp-subscriptions/#url-variables), for example to pass `returnUrl` to the server. These keys are functions where `story` is passed in. Below is an example of the URLs for publishers using [AccessType](https://www.quintype.com/products/accesstype) as Subscription platform -

```jsx
 services: {
   authorizationUrl: ({ story }) =>
    `https://amplib-web.qtstage.io/api/access/v1/stories/${story["story-content-id"]}/amp-access?key=1MMmdsHimbytzjKXYGcv8Xwj&accesstype_integration_id=14&readerId=READER_ID`,
  pingbackUrl: ({ story }) =>
    `https://amplib-web.qtstage.io/api/access/v1/stories/${story["story-content-id"]}/amp-pingback?key=1MMmdsHimbytzjKXYGcv8Xwj&accesstype_integration_id=14&readerId=READER_ID`,
  ...
}
```

3. Login page must created in the frontend and it will open as a result of a `login` action. The URL for the login page can be provided here `services -> actions -> login`.

```jsx
{
  "actions": {
    "login": "https://pub.com/amp-login?rid=READER_ID&url=SOURCE_URL",
    ...
  }
}
```

4. Subscription page must be created in the frontend and it will open as a result of a `subscribe` action. The URL for the subscribe page can be provided here `services -> actions -> subscribe`.

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

# Attributes

The AMP Runtime uses the response of authorization and pingback endpoints to either hide or show different sections as defined by the Attributes. Using these attributes, Paywall is constructed.

### subscription-action

In order to present the Reader with specific experiences, we need to provide specific actions which are declared in the "actions" configuration and can be marked up using `subscriptions-action` attribute.

As mentioned in the integration section, the available values for actions are `login` and `subscribe`. `login` will trigger the Login page of the selected service and `subscribe`  will trigger the Subscribe page of the selected service.

For example, this button will execute the "subscribe" action:

```js
<button subscriptions-action="subscribe" subscriptions-display="NOT granted">
  Subscribe now
</button>
```

By default, the actions are hidden and must be explicitly be shown using the `subscriptions-display` expression.

### subscriptions-display

As well as showing/hiding premium and fallback content, there are more ways to customise the document using the `subscriptions-display` attribute which uses expressions for actions and dialogs. The value of `subscriptions-display` is a boolean expression.

Values in the `data` object of an Entitlements response can be used to build expressions. In this example the value of `isLoggedIn` is in the data object and is used to conditionally show UI for login - 

```js
<div class="StyledLine" subscriptions-actions subscriptions-display="NOT granted AND NOT data.isLoggedIn">
  <p>Already a user ?</p>
  <button subscriptions-action="login" subscriptions-display="NOT granted AND NOT data.isLoggedIn">
    <span> Log in</span>
  </button>
</div>
```

### subscriptions-dialog

The paywall dialogs are shown automatically based on the authorization/entitlements response.

The element on which `subscriptions-dialog` dialog is specified is a `<template>` element in which case it will be initially rendered before being displayed as a dialog. The renderComponent is wrapped with the `<templete>` tag to be sure.

For example, this is our metered paywall -

```js
<template class="amp-subscriptions-dialog" type="amp-mustache" subscriptions-dialog subscriptions-display="granted AND grantReason = 'METERING'">
{{#data.numberRemaining}}
  <p class="StyledText">You are left with {{data.numberRemaining}} free articles.</p>
{{/data.numberRemaining}}
{{#data.isLast}}
  <div class="StyledMeter">
    <p class="StyledText">You have exceeded free stories limit for this month</p>
    <div>
      <div class="StyledButton" subscriptions-actions subscriptions-display="granted">
        <button subscriptions-action="subscribe" subscriptions-display="granted">
          <span class="SubscribeMessage">Subscribe</span>
        </button>
      </div>
      {{^data.isLoggedIn}}
      <div class="MeteredStyledLine" subscriptions-actions subscriptions-display="granted">
        <p>Already a user ?</p>
        <button subscriptions-action="login" subscriptions-display="granted">
          <span> Log in</span>
        </button>
      </div>
      {{/data.isLoggedIn}}
    </div>
  </div>
  {{/data.isLast}}
</template>`
```
This uses the `amp-mustache` script along with the `amp-subscriptions` script.
For the content to render depending on the value of the data object, it should be wrapped with mustache as shown above in the snippet code.
For metered paywall content, the content must be wrapped with `{{#data.numberRemaining}}` and `{{/data.numberRemaining}}`.
For metered exhausted paywall content, the content must be wrapped with `{{#data.isLast}}` and `{{/data.isLast}}`.
For rendering a login button on the paywall when the reader is not logged in, the content can be wrapped with `{{^data.isLoggedIn}}` and `{{/data.isLoggedIn}}`. `^` this implies NOT.
By replacing, `^` with `#` then, the particular content will be rendered when the reader is logged in.

For more attributes to use, please free to check this [documentation](https://amp.dev/documentation/components/amp-subscriptions/#attributes)


# Paywalls

## Hard paywall

This `SubscriberAccessPaywall` component is the hard paywall. The look of the `SubscriberAccessPaywall` can be changed using the render prop `paywallRender`. In case `paywallRender` is passed in the config, it is rendered. Otherwise a default `SubscriberAccessPaywall` is rendered.
Render Prop should be passed like below :

 ```jsx
  ampRoutes(app, {
    render: {
      subscriptionRender: {
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
The paywall looks like below -

<div>
  <div style="display: inline-block; width: 100%; text-align: center; border: 2px solid black;"><img style="width:50%" src="./subscriptions/hard_paywall.png"></div>
</div>


### Scenario 2

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
The paywall looks like below -

<div>
  <div style="display: inline-block; width: 100%; text-align: center; border: 2px solid black;"><img style="width:50%" src="./subscriptions/hard_paywall_sub.png"></div>
</div>

## Metered Paywall

This `MeteredPaywall` component is the Metering paywall. The look of the `MeteredPaywall` can be changed using the render prop `meterRender`. In case `meterRender` is passed in the config, it is rendered. Otherwise a default `MeteredPaywall` is rendered.
`MeteredPaywall` component renders both metered and meter exhausted paywalls depending the the `numberRemaining` and `isLast` key values. The same `renderProp` can be used to change both the meterings.
Render Prop should be passed like below :

```jsx
  ampRoutes(app, {
  render: {
    subscriptionRender: {
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
The paywall dialog looks like below -

<div>
  <div style="display: inline-block; width: 100%; text-align: center; border: 2px solid black;"><img style="width:50%" src="./subscriptions/metered_paywall.png"></div>
</div>


### Scenario 2

Response for an anonymous Reader who has read 5 out of 5 free articles. This renders the meter exhausted paywall with subscribe and login buttons.

```jsx
  "granted": true,
  "grantReason": "METERING",
  "data" : {
    "isLoggedIn": false,
    "numberRemaining": 5,
    "isLast": true,
  }
}
```
The paywall dialog looks like below -

<div>
  <div style="display: inline-block; width: 100%; text-align: center; border: 2px solid black;"><img style="width:50%" src="./subscriptions/meter_exhausted_login.png"></div>
</div>

### Scenario 3

Response for an anonymous Reader who has read 5 out of 5 free articles and is logged in. This renders the meter exhausted paywall with subscribe.

```jsx
  "granted": true,
  "grantReason": "METERING",
  "data" : {
    "isLoggedIn": true,
    "numberRemaining": 5,
    "isLast": true,
  }
}
```
The paywall dialog looks like below -

<div>
  <div style="display: inline-block; width: 100%; text-align: center; border: 2px solid black;"><img style="width:50%" src="./subscriptions/meter_exhausted_sub.png"></div>
</div>

