Version v4.x.x of [@quintype/framework](https://www.npmjs.com/package/@quintype/framework), which comes bundled with v2.x.x of [@quintype/amp](https://www.npmjs.com/package/@quintype/amp) contains a breaking change to the amp library API.

All the render props used to customize the default templates are now grouped under the `render` key inside the `opts` object.

### Before

```jsx
ampRoutes(app, {
  seo: generateAmpSeo,
  relatedStoriesRender: ({ relatedStories, config }) => <Alsoread stories={relatedStories} config={config} />,
  headerCardRender: ({ story, config }) => <Headercard story={story} config={config} />,
  infiniteScrollRender: ({ story, config, inlineConfig }) => (
    <AmpInfiniteScroll story={story} config={config} inlineConfig={inlineConfig} />
  ),
  storyElementRender: storyElementOverrides
});
```

### After

```jsx
ampRoutes(app, {
  seo: generateAmpSeo,
  render: {
    relatedStoriesRender: ({ relatedStories, config }) => <Alsoread stories={relatedStories} config={config} />,
    headerCardRender: ({ story, config }) => <Headercard story={story} config={config} />,
    infiniteScrollRender: ({ story, config, inlineConfig }) => (
      <AmpInfiniteScroll story={story} config={config} inlineConfig={inlineConfig} />
    ),
    storyElementRender: storyElementOverrides
  }
});
```
