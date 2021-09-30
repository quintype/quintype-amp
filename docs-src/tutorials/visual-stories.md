#### How to integrate/enable visual stories for malibu apps:

- Assuming ampLib integration is already done, make sure visual stories are enabled for your account. Please talk to Quintype support for this
- Update `@quintype/framework` to latest (v4.5.11 at the time of writing this) by running `npm i @quintype/framework@latest`
- next, you need to add the route `/ampstories/*` as a static route in your malibu app.
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

- The first visual story page shows the hero image, headline, author name, and publisher logo.
- Every subsequent visual story page corresponds to a Quintype story card (i.e. the second visual story page will show the 1st storycard).
- Only the following story elements are supported - image, title, also-read, answer, bigfact, blockquote, blurb, q-and-a, question, quote, summary, title, normal paragraph (text). All other story elements are ignored.
- At this point of time our CMS does not support uploading videos, so they're not supported by AmpLib.
- At the end, a [bookend](https://amp.dev/documentation/components/amp-story-bookend/?format=stories) (which is an end screen of an AMP story, showcasing sharing and related content) is shown.
- There can be only one image per story card. If more than one image is added (per card), the first one is displayed. If image caption and attribution are added, they're positioned at the bottom right with a pipe separator. We also support only Image caption/attribution. The `Rich Text Image Fields` feature which is available in Bold is also supported.
- Similarly, there can be only one `title` story element.
- There can be one or more (or a combination of) also-read, answer, bigfact, blockquote, blurb, q-and-a, question, quote, summary, title, normal paragraph story elements. They're positioned at the bottom of the visual story page.

<hr />

### Customizing visual stories

By default, visual stories have no animations; just a simple image with text at the bottom. However you can add animation effects using featureConfig. Please go through these [docs](https://amp.dev/documentation/guides-and-tutorials/start/visual_story/animating_elements/?format=stories) for choosing animation effects.

Sample featureConfig:

```js
dummyOpts = {
  featureConfig: {
    visualStories: {
      logoAlgnment: "left",
      logoUrl:
        "https://thumbor-stg.assettype.com/malibu/2021-07/eb879d94-c255-46eb-9944-dc361d3da0c0/malibu_16_svg.png",
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
4. `animation`: (object) Optional.

- `animation` > `image` applies animation props to the story image. We accept `animateIn`, `animateInDuration` and `animateInDelay`.
- `animation` > `text` applies animation props to the story text. We accept `animateIn`, `animateInDuration` and `animateInDelay`. Refer [docs](https://amp.dev/documentation/guides-and-tutorials/start/visual_story/animating_elements/?format=stories).

5. `logoAlignment` : (string/function) Optional. Aligns the publisher logo on the cover page of the visual story. Possible values are left, center and right. If omitted it aligns the logo in the centre.

6. `logoUrl` : (string/function) Optional. We restricted the logo size should be `96*96`, this will help to improve seo. [docs](https://developers.google.com/search/docs/advanced/appearance/web-stories-creation-best-practices). If omitted it take the `logo-url` from `/api/v1/amp/config` API.

#### Visual story templates:

You can also create upto three different templates for visual stories. `featureConfig.visualStories` can either be an object like shown above, or an array of such objects. The 0th element of this array will be the featureConfig for the 1st template, and so on. Templates can be selected using _story attributes_ feature in BOLD.

```js
dummyOpts = {
  featureConfig: {
    visualStories: [
      {
        logoAlgnment: "left",
        logoUrl: "https://thumbor-stg.assettype.com/malibu/2021-07/eb879d94-c255-46eb-9944-dc361d3da0c0/malibu_16_svg.png",
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
      },
      {
         logoAlgnment: "right",
        logoUrl: "other logo url",
        ....
        // featureConfig for template 2
      }
    ]
  }
};
```

Currently, visual stories have 3 types of themes or templates that can be configured through story attributes from our CMS.

- Image - `zoom-in`, text - {}: This template is the default template which will have the image in zoom-in while text will be constant at the bottom. you can set `theme-1` as story attribute in bold for rendering this template. If there are no story attributes are set in bold, this template will render as default.
- Image - `zoom-out`, text - `fly-in-bottom` : This template will show the image `zoom-out` with `fly-in-bottom` text. you can set `theme-2` as story attributes to render this template.
- Image - `fade-in`, text - `fly-in-left`: This template will show the image `fade-in` with `fly-in-left` text. you can set `theme-3` as story attributes to render this template.

Above are the default templates, these can be overriden from feature config (as we’ve shown already).

#### Creating story attribute

- In the editor, open the story and click on manage icon

<img src="./visual-stories/manage.png" alt="Parts of a visual story">

- Click on `Attributes` button
- Click on `Create` button
  - Name - `Visual Story Theme`
  - Type - `Story`
  - Data type - `Multiple Values`
  - Multiple values - create three thems : `theme-1`, `theme-2` and `theme-3`.

<img src="./visual-stories/story-attribute-create.png" alt="Parts of a visual story">

- Click on create.

#### Setting story attributes for visual story

- Click on `Add New` -> `Story` : This will open new window with `text` story by default.
- Click on `TEXT` and select the visual story as template
- Click on `Manage` -> `Show Advanced Options` -> `ATTRIBUTES`
- Select the respective theme which you wanted to render from the story attributes field.

<img src="./visual-stories/visual-story.png" alt="Parts of a visual story">

<hr />

#### Special note for zoom-in animation effect:

If you've enabled the `zoom-in` animation effect with a long animation duration, you might have noticed that the grey image background is visible below the image.
This happens when the images used in visual stories aren't of an appropriate aspect ratio.

ampLib has placed a class called `qt-amp-visual-story-img-cover` on the cover image and `qt-amp-visual-story-img` on the remaining images. These classes can be targeted via CSS to add styles/css transitions if you wish

Example:

```js
import React, { Fragment } from "react";
import { AMP } from "@quintype/amp";

// pass TopSlot to ampRoutes function
export const TopSlot = (props) => {
  const storyTemplate = props.story["story-template"]
  if (storyTemplate === "visual-story") return <VisualStoryTopSlot {...props} />
  return (
    // your non-visualStory slot logic goes here
  );
};

const VisualStoryTopSlot = ({ story, config }) => {
  const { Head } = AMP;
  return (
    <Head>
      <style>{`
        amp-story-page[active] .qt-amp-visual-story-img > img {
          animation: zoom 10s linear forwards;
        }
        amp-story-page[active] .qt-amp-visual-story-img-cover > img {
          animation: zoom 10s linear forwards;
        }
        @keyframes zoom{0%{transform:scale(1)}100%{transform:scale(1.3)}}
      `}</style>
    </Head>
  );
};
```

After this, please make sure to disable all the image related animations in featureConfig, since they're now redundant.
