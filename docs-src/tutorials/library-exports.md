Import AMP components like this:

```jsx
import { AMP } from "@quintype/amp";
const { Author, DateLastPublished, Layout, Slots } = AMP;
const { StoryPageSlots } = Slots;
const { TopSlot, BottomSlot } = StoryPageSlots;
```

#### Special mentions:

- [Layout]{@link module:Layout} component - wrap components that use context in `<Layout /`
- [Head]{@link module:Head} component - use `<Head>` component to put tags in the HTML document head

<hr />

The library exports following components. Check each component's API documentation for more info.

| Name           | children                 | Grand Children            | type       | description                                                                                                 |
| -------------- | ------------------------ | ------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------- |
| renderToString | -                        | -                         | Function   | Used internally. The user need not use this directly <a href="global.html#renderToString">documentation</a> |
| ampifyStory    | -                        | -                         | Function   | Used internally. The user need not use this directly <a href="global.html#ampifyStory">documentation</a>    |
| AMP            |                          |                           | **Object** |                                                                                                             |
|                | **Atoms**                |                           |            |                                                                                                             |
| ↳              | Carousel                 | -                         | Component  |                                                                                                             |
| ↳              | Image                    | -                         | Component  |                                                                                                             |
| ↳              | Layout                   | -                         | Component  |                                                                                                             |
| ↳              | Facebook                 | -                         | Component  |                                                                                                             |
| ↳              | Twitter                  | -                         | Component  |                                                                                                             |
| ↳              | Footer                   | -                         | Component  |                                                                                                             |
| ↳              | Iframe                   | -                         | Component  |                                                                                                             |
| ↳              | Section                  | -                         | Component  |                                                                                                             |
| ↳              | Spacer                   | -                         | Component  |                                                                                                             |
| ↳              | Author                   | -                         | Component  |                                                                                                             |
| ↳              | DateTime                 | -                         | Component  |                                                                                                             |
| ↳              | StoryElement             | -                         | Component  |                                                                                                             |
| ↳              | StoryElements            |                           | **Object** |                                                                                                             |
|                | ↳                        | Text                      | Component  |                                                                                                             |
|                | ↳                        | Summary                   | Component  |                                                                                                             |
|                | ↳                        | Question                  | Component  |                                                                                                             |
|                | ↳                        | Answer                    | Component  |                                                                                                             |
|                | ↳                        | Bigfact                   | Component  |                                                                                                             |
|                | ↳                        | Pending                   | Component  |                                                                                                             |
|                | ↳                        | BlockQuote                | Component  |                                                                                                             |
|                | ↳                        | ImageElement              | Component  |                                                                                                             |
|                | ↳                        | Blurb                     | Component  |                                                                                                             |
|                | ↳                        | AlsoRead                  | Component  |                                                                                                             |
|                | ↳                        | YouTube                   | Component  |                                                                                                             |
|                | ↳                        | Embed                     | Component  |                                                                                                             |
|                | ↳                        | DailyMotionElement        | Component  |                                                                                                             |
|                | ↳                        | TwitterElement            | Component  |                                                                                                             |
|                | ↳                        | FacebookElement           | Component  |                                                                                                             |
|                | ↳                        | InstagramElement          | Component  |                                                                                                             |
|                | ↳                        | VidibleElement            | Component  |                                                                                                             |
|                | ↳                        | Title                     | Component  |                                                                                                             |
|                | ↳                        | ImageGalleryElement       | Component  |                                                                                                             |
| ↳              | DfpAd                    | -                         | Component  |                                                                                                             |
| ↳              | PublisherLogoHeader      | -                         | Component  |                                                                                                             |
| ↳              | HamburgerMenu            | -                         | Component  |                                                                                                             |
| ↳              | icons                    |                           | **Object** |                                                                                                             |
|                | ↳                        | Hamburger                 | Component  |                                                                                                             |
|                |                          | Bell                      | Component  |                                                                                                             |
| ↳              | SocialShareIcon          | -                         | Component  |                                                                                                             |
| ↳              | IncompatibleBanner       | -                         | Component  |                                                                                                             |
| ↳              | DailyMotion              | -                         | Component  |                                                                                                             |
| ↳              | Head                     | -                         | Component  |                                                                                                             |
| ↳              | Instagram                | -                         | Component  |                                                                                                             |
| ↳              | O2Player                 | -                         | Component  |                                                                                                             |
| ↳              | WebPush                  | -                         | Component  |                                                                                                             |
| ↳              | WebPushWidget            | -                         | Component  |                                                                                                             |
| ↳              | WebengageSubscribeButton | -                         | Component  |                                                                                                             |
| ↳              | Analytics                | -                         | Component  |                                                                                                             |
| ↳              | GoogleAnalytics          | -                         | Component  |                                                                                                             |
| ↳              | GoogleTagManager         | -                         | Component  |                                                                                                             |
| ↳              | ComScore                 | -                         | Component  |                                                                                                             |
| ↳              | QuintypeAnalytics        | -                         | Component  |                                                                                                             |
| ↳              | LightboxGallery          | -                         | Component  |                                                                                                             |
| ↳              | ChartBeat                | -                         | Component  |                                                                                                             |
| ↳              | InfiniteScroll           | -                         | Component  |                                                                                                             |
|                | **Molecules**            |                           |            |                                                                                                             |
| ↳              | HeaderCard               | -                         | Component  |                                                                                                             |
| ↳              | HeroImage                | -                         | Component  |                                                                                                             |
| ↳              | Navbar                   | -                         | Component  |                                                                                                             |
| ↳              | AmpAds                   |                           | **Object** |                                                                                                             |
|                | ↳                        | TopAd                     | Component  |                                                                                                             |
|                | ↳                        | BodyAd                    | Component  |                                                                                                             |
|                | ↳                        | BottomAd                  | Component  |                                                                                                             |
| ↳              | RelatedStoryCard         | -                         | Component  |                                                                                                             |
| ↳              | RelatedStories           | -                         | Component  |                                                                                                             |
| ↳              | Slots                    |                           | **Object** |                                                                                                             |
|                | ↳                        | StoryPageSlots.TopSlot    | Component  |                                                                                                             |
|                | ↳                        | StoryPageSlots.BottomSlot | Component  |                                                                                                             |
| ↳              | WebEngage                | -                         | Component  |                                                                                                             |
| ↳              | DateLastPublished        | -                         | Component  |                                                                                                             |
| ↳              | DateUpdated              | -                         | Component  |                                                                                                             |
| ↳              | SocialShareHeader        | -                         | Component  |                                                                                                             |
