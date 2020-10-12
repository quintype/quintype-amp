# ⚡ Quintype Amp ⚡

### Note about writing commit messages

It's important to follow [these guidelines](https://www.conventionalcommits.org/en/v1.0.0/), as versions (major/minor/patch) are released based on commit messages

**cheat sheet:**

- `<type>[optional scope]: <description>`
- commit of the type `fix` patches a bug in your codebase (this correlates with `PATCH` in semantic versioning)
- commit of the type `feat` introduces a new feature to the codebase (this correlates with `MINOR` in semver
- commit of type `BREAKING CHANGE:`, or appends a `!` after the type/scope, introduces a breaking API change (correlating with `MAJOR` in semantic versioning)
- Other types: `build:`, `chore:`, `ci:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`

### Workflow / Publishing

This repo uses [standard-version](https://www.npmjs.com/package/standard-version) that takes care of updating changelog, bumping version as per semver, creating tags
To work on a feature

1. Pull latest master, create a feature branch
2. Make your changes. If you need to publish a beta version for testing, run npm publish --tag beta
3. Once done, open a PR. Get changes reviewed & approved
4. Once approved, merge the latest master into feature branch
5. Then run npm publish on feature branch and do a prod release
6. Squash and merge feature branch to master
7. If you've added new docs, go to master, pull the latest and run `npm run docs:deploy`. This will publish docs on https://developers.quintype.com/quintype-amp/

### Useful NPM scripts

- **storybook** starts storybook
- **docs:build** compiles jsDoc documentation and serves it on port 3001. Note that there's no hot reloading for docs. This is like running https://developers.quintype.com/quintype-amp on local
- **docs:deploy** compiles & deploys docs to https://developers.quintype.com/quintype-amp
- **build** bundles code by running webpack in development mode. Useful for debugging
- **test** runs jest in watch mode

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
- infiniteScrollRender
  - params accepted: object containing keys - story, config, inlineConfig
  - inlineConfig contains JSON config to be given inline to script tag (using dangerouslySetInnerHTML). It contains 1st five stories from the amp infinite scroll collection
  - remaining stories come from remote endpoint given as `src` to `</amp-next-page>`. The endpoint to be called is `<https host>/amp/api/v1/amp-infinite-scroll?story-id=<story id>`. It needs story Id to remove current story if it exists from showing in infinite scroll

### NOTES:

- the component plugin of better-docs uses parcel as a bundler, you have to install it globally
- You can't directly copy and paste scripts for amp components in the library. Because `<script async custom-element="amp-access" src="https://cdn.ampproject.org/v0/amp-access-0.1.js"></script>` has boolean attribute `async`. React changes `async` (any boolean attr) to `async="true"`, which fails amp validation (see issue https://github.com/facebook/react/issues/9230). The workaround is to give `async=""` for JS and `async={undefined}` for TS
- you might get warning `Warning: componentWillMount has been renamed, and is not recommended for use.`. This is an issue with react-helmet (See issue https://github.com/nfl/react-helmet/issues/499)
- When the Amp Sidebar is opened, you notice a black mask all over where the links are not clickable. This is because storybook renders Amp HTML inside an IFrame. This issue doesn't occur when Amp HTML is rendered normally. This issue happens only on storybook.
