# ⚡ Quintype Amp ⚡

### To Start Storybook:

`npm run storybook`

### Note about writing commit messages

It's important to follow [these guidelines](https://www.conventionalcommits.org/en/v1.0.0/), as versions (major/minor/patch) are released based on commit messages

**cheat sheet:**

- `<type>[optional scope]: <description>`
- commit of the type `fix` patches a bug in your codebase (this correlates with `PATCH` in semantic versioning)
- commit of the type `feat` introduces a new feature to the codebase (this correlates with `MINOR` in semver
- commit of type `BREAKING CHANGE:`, or appends a `!` after the type/scope, introduces a breaking API change (correlating with `MAJOR` in semantic versioning)
- Other types: `build:`, `chore:`, `ci:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`

### Publishing

- To publish, just run `npm publish` on master branch after your changes are reviewed and merged. This repo uses [standard-version](https://www.npmjs.com/package/standard-version) that takes care of updating changelog, bumping version as per semver, creating tags. Also, if you run publish in master, [documentation](https://developers.quintype.com/quintype-amp) gets updated
- If you run `npm publish` on some other branch, the package is released as a `prerelease` and docs aren't updated

### API Reference

- #### Core Functions: renderToString

  - Pass this function your `<Layout>` component and it will either return a string containing the amp HTML, or an error object

- #### RenderLessComponents

  - Analytics(amp-analytics)
  - GoogleTagManager
  - ComScore
  - Google Analytics
  - Quintype Analytics
  - ChartBeat

#### Opts

- relatedStoriesRender - Render props to replace html generated from AMP Templates with whatever is passed by the user. A React render function which accepts stories as a parameter.

### NOTES:

- You can't directly copy and paste scripts for amp components in the library. Because `<script async custom-element="amp-access" src="https://cdn.ampproject.org/v0/amp-access-0.1.js"></script>` has boolean attribute `async`. React changes `async` (any boolean attr) to `async="true"`, which fails amp validation (see issue https://github.com/facebook/react/issues/9230). The workaround is to give `async=""` for JS and `async={undefined}` for TS
- you might get warning `Warning: componentWillMount has been renamed, and is not recommended for use.`. This is an issue with react-helmet (See issue https://github.com/nfl/react-helmet/issues/499)
- When the Amp Sidebar is opened, you notice a black mask all over where the links are not clickable. This is because storybook renders Amp HTML inside an IFrame. This issue doesn't occur when Amp HTML is rendered normally. This issue happens only on storybook.
