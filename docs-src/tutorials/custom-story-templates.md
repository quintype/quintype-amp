The custom story templates give you a blank canvas to create whatever you wish and pass it to the library via {@tutorial opts}

Pass an object containing your custom templates to the `templates` key of the `opts` object.
This is what your server/app.js file might look like

```jsx
...
ampRoutes(app, {
  templates: {
    text: ({ story, config, seo }) => (
      <CustomTextStoryTemplate
        story={story}
        config={config}
        seo={seo}
    ),
    "live-blog": (props) => <CustomLiveBlogStoryTemplate {...props}>
  }
})
...
```

- pass a function that returns your template (react component)
- this function takes an object as a parameter having the foll keys:
  - `story` - <span id="storyConfig_link">the story object that platform gives</span>
  - `config` - an object containing `publisherConfig`, `ampConfig` and `opts`. The `publisherConfig` is the same as response of _/api/v1/config_. The`ampConfig` is an amp-specific config given by _api/v1/amp/config_. `opts` contains an object inside it called `featureConfig` which provides config needed by features like inline config for infinite scroll, related stories etc.
- `CustomTextStoryTemplate` is the template you've built using AMP library components and/or your own amp html. All your text stories will render this template.
- `text`, `live-blog` are the story template names. <b><em>They must match the `story-template` in platform's story api response</em></b>

```

To see what all the library exports, go to {@tutorial library-exports}
```
