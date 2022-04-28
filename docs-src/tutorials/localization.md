# Localization

Keywords hardcoded in the default story template provided by AMP library can be translated to other languages by making use of localization feature. Pass the translation of the below words as an object to AmpLib via `opts` > `featureConfig` > `localization`, check `localization` in the [opts tutorial]{@tutorial opts} for the API.
If the translation isn't provided, fallback english words will be used.

Keyword : Object key

- By : by
- Published : published
- Updated : updated
- Also read : alsoRead
- Updated at : updatedAt

```js
// sample
const sampleOpts = {
  localization: {
   translations: {"by": "द्वारा",
    "published": "प्रकाशित"}
  ...
  }
}
```
