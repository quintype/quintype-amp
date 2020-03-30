export const publisherConfig = {
  "cdn-image": "thumbor-stg.assettype.com"
};

export const ampConfig = {
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
  doubleclick: {
    "top-ad": {
      width: 300,
      height: 250,
      "unit-path": "/5463099287/AMP_Top"
    },
    "body-ad": {
      width: 300,
      height: 250,
      "unit-path": "/5463099287/AMP_Body"
    },
    "bottom-ad": {
      width: 300,
      height: 250,
      "unit-path": "/5463099287/AMP_Bottom"
    }
  },
  "google-client-id-api": false,
  "invalid-elements-strategy": "redirect-to-web-version",
  "google-analytics-tracking-id": "UA-ABCDEFG"
};

export const config = {
  publisherConfig,
  ampConfig
};
