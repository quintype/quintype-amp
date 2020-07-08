The default story templates are great for publishers who do not wish to radically change the design or functionality of the default amp story pages.

- setup is very easy
- customization is possible, but within limit
- you automatically get updates/enhancements

At the time of writing, the AMP library only supports the generic story template. But more (video, live-blog) will be added.

## Customizations:

The AMP library gives you control of parts of the story page by providing various **render props**. You are free to build these parts of the story page using AMP library components or amphtml of your choice. Go to {@tutorial opts} for the API reference

#### 1. Slots:

Slots can be thought of as windows that let you "slot in" whatever you need. In story page, we have two slots:

- **top slot** - placed just below the top ad
- **bottom slot** - placed just above the bottom ad

<a id="slots_link" href="./story-page-slots.png" target="_blank">Image For Reference</a>

#### 2. The Header Card:

Using the `headerCardRender` function, customize the entire header card.

Left: is the default header card. Right: custom headerCard

<div>
  <div style="display: inline-block; width: 45%;"><img src="./headerCardRender/without.png"></div>
  <div style="display: inline-block; width: 45%;"><img src="./headerCardRender/with.png"></div>
</div>

#### 3. Related Stories:

`relatedStoriesRender` is the render prop for related stories

Left: default. Right: custom

<div>
  <div style="display: inline-block; width: 45%;"><img src="./relatedStoriesRender/without.png"></div>
  <div style="display: inline-block; width: 45%;"><img src="./relatedStoriesRender/with.png"></div>
</div>

#### 4. Infinite Scroll:

`infiniteScrollRender` is the render prop for infinite scroll

#### 5. Story Elelemts:

You can customize story elements using story element render props.

Left: default text story element. Right: custom

<div>
  <div style="display: inline-block; width: 45%;"><img src="./storyElement-text/without.png"></div>
  <div style="display: inline-block; width: 45%;"><img src="./storyElement-text/with.png"></div>
</div>
