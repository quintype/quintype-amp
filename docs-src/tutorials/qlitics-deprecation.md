# Qlitics Analytics Deprecation

## Overview

The `QuintypeAnalytics` component (qlitics) has been **completely deprecated and disabled**. The component now returns `null` and no longer makes any analytics requests.

## Current Behavior

- **Always returns `null`** - No analytics requests are made
- **Shows deprecation warning** in all environments
- **Ignores all configuration** - No settings can re-enable it
- **No breaking changes** - Templates continue to work

## Migration

### Remove from Templates

Since the component no longer functions, remove it from your templates:

```jsx
// Remove these lines from your templates:
<QuintypeAnalytics />
```



## Important Notes

- **No direct replacement** for qlitics story view tracking
- **No configuration** can re-enable the component
- **Deprecation warning** will show in console
- **Future versions** will remove the component entirely 
