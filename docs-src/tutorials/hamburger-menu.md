The AMP hamburger menu takes items from a menu group. Which menu group that it takes its items from is decided based on the following logic:

- You can have items from any menu group of your choice. Just pass the slug of the menu group as a featureConfig to amp lib from your FE app and add items to that menu group. Check `sidebarMenu` in `feature config` in [opts tutorial]{@tutorial opts} for details
- else, if you've created a menu group having slug `amp-sidebar-menu` and added items to it, it'll pick those items
- else, if you've created a menu group having slug `sidebar-menu` and added items to it, it'll pick those items
- else it'll pick items from the `default` menu group
- else the sidebar menu is not shown

### Subdomains

Assume you are publisher `www.example.com` and have configured a subdomain `world-news`

Which menu group items are shown inside the hamburger menu on the subdomain is decided based on the following logic:

- 1st priority is given to featureConfig, just like before. So pass the following opts:
  ```js
  const exampleOptsObj = {
    // main domain opts
    featureConfig: {
      sidebarMenu: {
        menuGroupSlug: "general-links"
      }
    },
    "world-news": {
      // opts for "world-news" subdomain
      featureConfig: {
        sidebarMenu: {
          menuGroupSlug: "world-links"
        }
      }
    }
  };
  ```
  your main domain will now show items from menu group having slug `general-links` and your subdomain `https://world-news.example.com` will show items from menu group having slug `world-links`. In this example, you don't _have_ to pass featureConfig for the main domain. Following will also work just fine.
  ```js
  const exampleOptsObj = {
    "world-news": {
      // opts for "world-news" subdomain
      featureConfig: {
        sidebarMenu: {
          menuGroupSlug: "world-links"
        }
      }
    }
  };
  ```
- else, if you've created a menu group having slug `amp-sidebar-menu-world-news` and added items to it, it'll pick those items
- else, if you've created a menu group having slug `sidebar-menu-world-news` and added items to it, it'll pick those items
- else it'll pick items from the `default` menu group
- else the sidebar menu is not shown
