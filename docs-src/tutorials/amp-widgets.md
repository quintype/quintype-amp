# AMP Widgets Configuration

AMP widgets can be configured in two ways: through the Page Builder (PB) UI or via custom configuration for publishers.

## Page Builder Configuration
Page Builder provides an option to configure widgets directly through the UI. This is the standard way to manage widgets for stories.

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

The `customAmpWidgets` function is executed safely, so any errors thrown within it will be caught and logged, preventing the application from crashing.

### Required Scripts
Ensure that you include the necessary AMP scripts in the `<head>` of your `layout.ejs` file for the components you are using. 

```html
<script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script>
<script async custom-element="amp-fx-flying-carpet" src="https://cdn.ampproject.org/v0/amp-fx-flying-carpet-0.1.js"></script>
```

## Scope (Phase 1)

### In-Scope
- **Custom Components**: Ability to insert custom AMP components in up to 6 slots (after story card 1–6).
- **Allowed Types**: Widgets give flexibility to add any type. Adding valid types will always work, while adding invalid AMP HTML tags can cause unpredictable behavior (e.g., ads not showing up or AMP page traffic dipping).
- **No Validation**: There is no validation of AMP code done on Amp Library side.
- **Coexistence**: The BOLD ads (Header, Footer & Body-Ad) will coexist with the ads/widgets served via the Custom publisher FE App / PB functionality.

### Out of Scope
- **Individual Story Configuration**: Individual story type ad configuration is not supported.
- **Header/Footer Configuration**: Header/footer ad configuration is still controlled by BOLD only.
- **Validation**: No AMP-validation checks.
- **Preview**: No PB Preview for AMP ads.

## Functional Requirements
- **Positions**: PB will support 6 positions: After Card 1, 2... to 6.
- **Global Settings**: These are global settings applied to all AMP articles, present in the current custom code layout under AMP configuration settings.
- **Slot Logic**: If a story has fewer than X cards, that slot is simply ignored (AMP code is not rendered).
- **Existing Ads**: Header and footer ads continue to be injected only by BOLD.
- **Input Format**: PB allows publishers to paste AMP-compatible HTML in a multi-line input field.
- **Supported Patterns**: Includes any AMP compatible/valid types.

## Risks to be Considered
- **Validation Failures**: Pages may fail AMP validation if publishers paste invalid components.
- **Layout Shifts**: Excessive ad inserts may cause layout shifts or violate Google AMP policies.
- **Misunderstanding**: Publishers may misunderstand that "position = exact appearance".

## Additional Dev Notes
- **Rendering**: We can render any tags passed from custom widgets. Whether they work as expected depends on if the widget code added is AMP compliant.
  - *Example*: If the publisher adds `amp-sticky-ad` in the widget and forgets to add the required script in the head, we will render the widget but no ad is loaded.
- **Ad Limits**: The AMP library itself doesn't restrict the number of ads. The ad provider may choose not to serve many creatives.
