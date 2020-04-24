# ⚡ Quintype Amp ⚡

### To Start Storybook:

`npm run storybook`

### Publishing

To publish the package, bump the version using sematic versioning in `package.json` and `package-lock.json`. Merge it to master branch. Switch to `master` branch which has the latest unpublished version. Make sure you are logged in to npm cli. Publish the package to npm by running `npm run dist`, once it is published you need to create a new release of the package by going to the [releases page on Github](https://github.com/quintype/quintype-amp/releases)

### API Reference

- #### Core Functions: renderToString

  - Pass this function your `<Layout>` component and it will either return a string containing the amp HTML, or an error object

- ### Notes:

  - You can't directly copy and paste scripts for amp components in the library. Because `<script async custom-element="amp-access" src="https://cdn.ampproject.org/v0/amp-access-0.1.js"></script>` has boolean attribute `async`. React changes `async` (any boolean attr) to `async="true"`, which fails amp validation (see issue https://github.com/facebook/react/issues/9230). The workaround is to give `async=""` for JS and `async={undefined}` for TS
  - you might get warning `Warning: componentWillMount has been renamed, and is not recommended for use.`. This is an issue with react-helmet (See issue https://github.com/nfl/react-helmet/issues/499)

- ### Custom Styling

  - Most library componets take `style` and `theme` props, using which one can add custom styles and change the CSS theme to that component
  - The `theme` prop is an object containing key-value pairs of theme tokens. These will override the default theme tokens
  - The `style` prop is an object, from which the component takes CSS for the different sub-components
  - Refer the info below to know what keys can be present in the style prop for a given component

    | Component Name | takes style/theme prop? | `key` name |     applies styles to     |
    | :------------: | :---------------------: | :--------: | :-----------------------: |
    |     Author     |           Yes           |   author   | the outermost wrapper div |
    |    Carousel    |           Yes           |  carousel  | the outermost wrapper div |
    |  DailyMotion   |           No            |   - NA -   |          - NA -           |
    |    DateTime    |           Yes           |  wrapper   | the outermost wrapper div |
    |                |                         |            |                           |
    |                |                         |            |                           |
    |                |                         |            |                           |
    |                |                         |            |                           |
    |                |                         |            |                           |
    |                |                         |            |                           |
    |                |                         |            |                           |
    |                |                         |            |                           |
