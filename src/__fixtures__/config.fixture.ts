import { AMPConfig, PublisherConfig, Config } from "../types/config";

export const publisherConfig: PublisherConfig = {
  "cdn-name": "thumbor-stg.assettype.com"
};

export const ampConfig: AMPConfig = {
  menu: {
    enabled: false
  },
  fonts: {
    primary: {
      url: "Open+Sans:300,400,600,700",
      family: '"Open Sans", sans-serif'
    },
    secondary: {
      url: "PT+Serif:400,400italic,700,700italic",
      family: "sans-serif"
    }
  },
  colors: {
    primary: "#294f32",
    secondary: "#763194",
    "footer-background": "#FDBD10",
    "footer-text-color": "#FDBD10",
    "header-background": "#dd0b4d",
    "section-text-color": "#f4e842"
  },
  "logo-url": "https://thumbor-stg.assettype.com/ace/2018-02/f0ba1430-8c21-49a3-a5cf-50c88ce9ec74/martian3.jpg",
  ads: {
    "top-ad": {
      type: "industrybrains",
      width: 300,
      height: 250,
      "data-width": "300",
      "data-height": "250",
      "data-cid": "19626-3798936394"
    },
    "story-ad": {
      type: "a9",
      width: "300",
      height: "250",
      "data-amzn_assoc_ad_mode": "auto",
      "data-divid": "amzn-assoc-ad-fe746097-f142-4f8d-8dfb-45ec747632e5",
      "data-recomtype": "async",
      "data-adinstanceid": "fe746097-f142-4f8d-8dfb-45ec747632e5",
      "data-aax_size": "300x250",
      "data-aax_pubname": "test123",
      "data-aax_src": "302"
    },
    "bottom-ad": {
      type: "taboola",
      width: "400",
      height: "300",
      layout: "responsive",
      "data-publisher": "amp-demo",
      "data-mode": "thumbnails-a",
      "data-placement": "Ads Example",
      "data-article": "auto"
    },
    "bottom-sticky-ad": {
      width: "320",
      height: "50",
      type: "doubleclick",
      "data-slot": "/35096353/amptesting/formats/sticky"
    }
  },
  "google-client-id-api": false,
  "invalid-elements-strategy": "redirect-to-web-version",
  "google-analytics-tracking-id": "UA-ABCDEFG"
};

export const config: Config = {
  publisherConfig,
  ampConfig
};
