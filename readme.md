# ⚡ Quintype Amp ⚡

## To Compile:
```npx webpack```

## NOTES:
- You can't directly copy and paste scripts for amp components in the library. Because ```<script async custom-element="amp-access" src="https://cdn.ampproject.org/v0/amp-access-0.1.js"></script>``` has boolean attribute `async`. React changes `async` (any boolean attr) to `async="true"`, which fails amp validation (see issue https://github.com/facebook/react/issues/9230). The workaround is to give `async=""` for JS and `async={undefined}` for TS
- you might get warning `Warning: componentWillMount has been renamed, and is not recommended for use.`. This is an issue with react-helmet (See issue https://github.com/nfl/react-helmet/issues/499)