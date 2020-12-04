#### How to integrate/enable visual stories for malibu apps:

- Assuming ampLib integration is already done, make sure visual stories are enabled for your account. Please talk to Quintype support for this
- Once enabled, you need to add the route `/ampstories/*` as a static route in your malibu app.
  To do this, go to the file `app/server/routes.js` and add the following to `STATIC_ROUTES`

```
{
    path: "/ampstories/*",
    pageType: PAGE_TYPE.VISUAL_STORY,
    exact: true
  }
```

- next, go to file `app/isomorphic/constants.js` and add the following inside `PAGE_TYPE` object `VISUAL_STORY: "visual-story"`
- That's it. You might want to enable ads on your visual stories. Please pass ad slot from `featureConfig`, read on to know how.

<hr />

#### Intro:

AMP [Visual Stories](https://amp.dev/about/stories/) consist of `pages`. These are in turn made up of `layers` containing basic amp `elements`. Read [this](https://amp.dev/documentation/guides-and-tutorials/start/visual_story/parts_of_story/?format=stories) for more info.

<img src="./visual-stories/visual_story_parts.png" alt="Parts of a visual story">

- The first visual story page shows the hero image, headline, author name and publisher logo.
- Every subsequent visual story page corresponds to a Quintype story card (i.e. the second visual story page will show the 1st storycard)
- Only the following story elements are supported - image, title, also-read, answer, bigfact, blockquote, blurb, q-and-a, question, quote, summary, title, normal paragraph (text). All other story elements are ignored
- At this point of time our CMS does not support uploading videos, so they're not supported by AmpLib
- At the end, a [bookend](https://amp.dev/documentation/components/amp-story-bookend/?format=stories) (which is an end screen of an AMP story, showcasing sharing and related content) is shown.

<hr />

#### The default visual story template:

Visual stories are rendered using this default template if no other template is chosen. More templates are WIP. It has the following features:

- There can be only one image per story card. If more than one image is added (per card), the first one is displayed
- Similarly, there can be only one `title` story element
- there can be one or more (or a combination of) also-read, answer, bigfact, blockquote, blurb, q-and-a, question, quote, summary, title, normal paragraph story elements. They're positioned at the bottom of the visual story page

<hr />

#### Visual story specific feature configs:

```js
dummyOpts = {
  featureConfig: {
    visualStories: {
      autoAdvanceAfter: "5s",
      bookendUrl: "/amp/api/v1/bookend.json",
      ads: {
        doubleclick: {
          dataSlot: "/1009127/FOO_AMP_TOP"
        }
      },
      animation: {
        image: {
          animateIn: "zoom-in",
          animateInDuration: "120s",
          animateInDelay: "1s"
        }
      }
    }
  }
};
```

1. `autoAdvanceAfter`: (String) Optional. Sets the time after which the page automatically advances. If omitted, the page will not automatically advance. Example: "500ms", "3s"
2. `bookendUrl`: (String) Optional. The endpoint called by the bookend component. Defaults to `/amp/api/v1/bookend.json` if nothing is passed. If an endpoint is passed, please make sure that the route exists in your app and that it returns data in a valid format. `storyId` and `sectionId` are passed as query parameters. Refer [docs](https://amp.dev/documentation/components/amp-story-bookend/?format=stories)
3. ad slot: (String) Optional. Example "/1009443/PUBLISHER_AMP_TOP" `featureConfig` > `visualStories` > `ads` > `doubleclick` > `dataSlot` sets the ad slot for visual stories. Ads are dynamically inserted, please read [docs](https://amp.dev/documentation/components/amp-story-auto-ads/?format=stories)
4. `animation`: (object) Optional. `animation` > `image` applies animation props to the story image. We accept `animateIn`, `animateInDuration` and `animateInDelay`. Refer [docs](https://amp.dev/documentation/guides-and-tutorials/start/visual_story/animating_elements/?format=stories)
