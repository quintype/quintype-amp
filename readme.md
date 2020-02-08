# ⚡ Quintype Amp ⚡

### To Compile:
```npx webpack```

### API Reference
- #### Adding custom styles:
    - if you pass custom styles, all the default styles (to all components) are ignored
    - the `<Layout>` component accepts prop `customStyles`. Pass all your custom styles to this prop as a string. You may do so by writing all styles in a file, reading them serverside using `fs.readFileSync`and passing them as a prop to the layout component.
    - The library components themselves have been given classnames. You can apply styles by targeting these classes in your css
        - componetnt `AmpBlurb` has class name `amp-se-blurb`
        - `AmpBlockQuote` has classname `amp-se-blockquote`

### NOTES:
- You can't directly copy and paste scripts for amp components in the library. Because ```<script async custom-element="amp-access" src="https://cdn.ampproject.org/v0/amp-access-0.1.js"></script>``` has boolean attribute `async`. React changes `async` (any boolean attr) to `async="true"`, which fails amp validation (see issue https://github.com/facebook/react/issues/9230). The workaround is to give `async=""` for JS and `async={undefined}` for TS
- you might get warning `Warning: componentWillMount has been renamed, and is not recommended for use.`. This is an issue with react-helmet (See issue https://github.com/nfl/react-helmet/issues/499)

### Tech Notes:
- The <Layout> component, which is the parent of all components, takes a props `customStyles`
- It passes down boolean `ignoreDefaultStyles` as context.
- Each component checks the context. If `ignoreDefaultStyles: true`, it renders html component with some class. Else it renders a styled component with default styles