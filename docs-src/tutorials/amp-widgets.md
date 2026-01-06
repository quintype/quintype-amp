# AMP Widgets Configuration

AMP widgets can be configured in two ways: through the Page Builder (PB) UI or via custom configuration for publishers.

- Ability to insert custom widgets in up to 6 slots (after story card 1–6).
- Widgets give flexibility to add any type. Adding valid types will always work, while adding invalid AMP HTML tags can cause unpredictable behavior (e.g., ads not showing up).
- There is no validation of AMP code done on Amp Library side.
- The BOLD ads (Header, Footer & Body-Ad) will coexist with the newly added custom ads/widgets .
- Manual AMP-validation check has to be done before passing widget code in both PB / FE.
- Individual story type ad configuration is not supported.
- No PB Preview for AMP ads.

## Page Builder Configuration
Page Builder provides an option to configure widgets directly through the UI. This is the standard way to manage widgets for stories. ![Alt text](image.png) 

## Custom Publisher Configuration
For custom publishers, you can provide the widget configuration through `ampConfig` in your `ampRoutes` setup. This allows for dynamic or code-based widget definitions.

### Example Configuration

You can pass a `customAmpWidgets` function to the `ampRoutes` configuration. This function should return an array of widget objects.

```javascript
ampRoutes(app, {
  getAdditionalConfig: additionalConfigGetter,
  enableAmp: (config) => get(config, ['pbConfig', 'general', 'amp', 'amp-story-pages'], true),
  customAmpWidgets: getCustomWidgetsForAmpStory,
  // ... other options
});
```

Sample `customAmpWidgets` function is given below:

```
function getCustomWidgetsForAmpStory() {
  const customWidgets = [
    {
      "enable" : true,
      'code': `<amp-fx-flying-carpet height="300px">
                      <amp-ad width="300" height="600" layout="fixed"
                        type="doubleclick"
                        data-slot="/5463099287/PB-AMP-300x600"
                        data-loading-strategy="prefer-viewability-over-views">
                      </amp-ad>
                    </amp-fx-flying-carpet>`
    },
    {
      "enable" : true,
      'code': `<amp-ad
      width="300"
      height="200"
      layout="fixed"
      type="doubleclick"
      data-slot="/5463099287/PB-AMP-300x200"
      data-loading-strategy="prefer-viewability-over-views"></amp-ad>`
    },
   ....
  ];

  return customWidgets;
}
```

### Required Scripts
Ensure that you include the necessary AMP scripts in the `<head>` of your `layout.ejs` file for the components you are using. 

```
<script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script>
<script 
  async custom-element="amp-fx-flying-carpet" 
  src="https://cdn.ampproject.org/v0/amp-fx-flying-carpet-0.1.js">
<script>
```

## Notes
-  AMP supports 6 positions: After Card 1, 2... to 6 , If a story has fewer than X cards, that slot is simply ignored (AMP code is not rendered).
- Header and footer ads continue to be injected only by BOLD.
- PB allows publishers to paste compatible custom widget (ie., amp validated code) in a multi-line input field , same is applicable when passed from custom FE .
- We can render any tags passed from custom widgets. Whether they work as expected depends on if the widget code added is AMP compliant.
  - *Example*: If the publisher adds `amp-sticky-ad` in the widget and forgets to add the required script in the head, we will render the widget but no ad is loaded.
- The AMP library itself doesn't restrict the number of ads. The ad provider may choose not to serve many creatives.
