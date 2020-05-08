# ⚡ Quintype Amp ⚡

### To Start Storybook:

`npm run storybook`

### Publishing

To publish the package, bump the version using sematic versioning in `package.json` and `package-lock.json`. Merge it to master branch. Switch to `master` branch which has the latest unpublished version. Make sure you are logged in to npm cli. Publish the package to npm by running `npm run dist`, once it is published you need to create a new release of the package by going to the [releases page on Github](https://github.com/quintype/quintype-amp/releases)

### API Reference

- #### Adding custom styles:

  - if you pass custom styles, all the default styles (to all components) are ignored
  - the `<Layout>` component accepts prop `customStyles`. Pass all your custom styles to this prop as a string. You may do so by writing all styles in a file, reading them serverside using `fs.readFileSync`and passing them as a prop to the layout component.
  - The library components themselves have been given classnames. You can apply styles by targeting these classes in your css
    - Component `AmpBlurb` has class name `amp-se-blurb`
    - `AmpBlockQuote` has classname `amp-se-blockquote`

- #### Core Functions: renderToString
  - Pass this function your `<Layout>` component and it will either return a string containing the amp HTML, or an error object
- #### RenderLessComponents
      	- Analytics(amp-analytics)
      	- GoogleTagManager
      	- ComScore
      	- Google Analytics
      	- Quintype Analytics

### Tech Notes:

- The `<Layout>` component, which is the parent of all components, takes a props `customStyles`
- It passes down boolean `ignoreDefaultStyles` as context.
- Each component checks the context. If `ignoreDefaultStyles: true`, it renders html component with some class. Else it renders a styled component with default styles

### NOTES:

- You can't directly copy and paste scripts for amp components in the library. Because `<script async custom-element="amp-access" src="https://cdn.ampproject.org/v0/amp-access-0.1.js"></script>` has boolean attribute `async`. React changes `async` (any boolean attr) to `async="true"`, which fails amp validation (see issue https://github.com/facebook/react/issues/9230). The workaround is to give `async=""` for JS and `async={undefined}` for TS
- you might get warning `Warning: componentWillMount has been renamed, and is not recommended for use.`. This is an issue with react-helmet (See issue https://github.com/nfl/react-helmet/issues/499)
- When the Amp Sidebar is opened, you notice a black mask all over where the links are not clickable. This is because storybook renders Amp HTML inside an IFrame. This issue doesn't occur when Amp HTML is rendered normally. This issue happens only on storybook.