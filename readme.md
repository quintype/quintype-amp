# ⚡ Quintype Amp ⚡

- [Documentation](https://developers.quintype.com/quintype-amp)
- For integrating in malibu, refer [this](https://developers.quintype.com/malibu/tutorial/amp-library-integration.html) doc
- Track lighthouse metrics [here](https://lighthouse-ci.staging.quinpress.com/app/projects/amplib/dashboard)

### Note about writing commit messages

It's important to follow [these guidelines](https://www.conventionalcommits.org/en/v1.0.0/), as versions (major/minor/patch) are released based on commit messages

- `<type>[optional scope]: <description>`
- example: `docs: add tutorial for amp-subscriptions`
- example: `refactor(story-elements): move all story elements to new directory`

##### Types:
- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to our CI configuration files and scripts
- `docs`: Documentation only changes
- `BREAKING CHANGE`: introduces a breaking API change - major version release
- `feat`: A new feature - minor release
- `fix`: A bug fix - patch release
- `perf`: A code change that improves performance
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `style`: Changes that do not affect the meaning of the code
- `test`: Adding missing tests or correcting existing tests

### Workflow / Publishing

This repo uses [standard-version](https://www.npmjs.com/package/standard-version) that takes care of updating changelog, bumping version as per [semver](https://semver.org/), creating tags
To work on a feature

1. Pull latest master, create a feature branch
2. Make your changes. If you need to publish a beta version for testing, run npm publish --tag beta
3. Once done, open a PR. Get changes reviewed & approved
4. Once approved, squash and merge feature branch into master
5. From master, run `npm publish`. If you don't have admin access to directly push to master, you will need help of someone who does.

### Useful NPM scripts

- **storybook** starts storybook
- **docs:build** compiles jsDoc documentation and serves it on port 3001. Note that there's no hot reloading for docs. This is like running https://developers.quintype.com/quintype-amp on local
- **docs:deploy** compiles & deploys docs to https://developers.quintype.com/quintype-amp
- **build** bundles code by running webpack in development mode. Useful for debugging
- **test** runs jest in watch mode

### NOTES:

- the component plugin of better-docs uses parcel as a bundler, you have to install it globally
- You can't directly copy and paste scripts for amp components in the library. Because `<script async custom-element="amp-access" src="https://cdn.ampproject.org/v0/amp-access-0.1.js"></script>` has boolean attribute `async`. React changes `async` (any boolean attr) to `async="true"`, which fails amp validation (see issue https://github.com/facebook/react/issues/9230). The workaround is to give `async=""` for JS and `async={undefined}` for TS
- you might get warning `Warning: componentWillMount has been renamed, and is not recommended for use.`. This is an issue with react-helmet (See issue https://github.com/nfl/react-helmet/issues/499)
