import { Config, PublisherConfig, AMPConfig, OptsTypes } from "../types/config";

export const publisherConfig: PublisherConfig = {
  "cdn-name": "https://thumbor-stg.assettype.com/",
  "text-direction": "ltr",
  "publisher-name": "newslaundry"
};

export const ampConfig: AMPConfig = {
  menu: {
    enabled: true,
    items: [
      {
        title: "Home",
        url: "https://barandbench.com"
      },
      {
        title: "News",
        url: "https://www.barandbench.com/news"
      },
      {
        title: "Dealstreet",
        url: "https://www.barandbench.com/dealstreet"
      },
      {
        title: "Conferences & Paper presentations",
        url: "https://www.barandbench.com/apprentice-lawyer/call-for-papers"
      },
      {
        title: "Recruitment Tracker",
        url: "https://www.barandbench.com/apprentice-lawyer/recruitment-tracker"
      },
      {
        title: "Apprentice Lawyer",
        url: "https://www.barandbench.com/apprentice-lawyer"
      },
      {
        title: "Viewpoint",
        url: "https://www.barandbench.com/view-point"
      },
      {
        title: "Legal Jobs",
        url: "https://www.barandbench.com/legal-jobs"
      }
    ]
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

export const opts: OptsTypes = {
  slots: {
    story: {
      "top-slot": {
        script: `console.log("*********** This is from inside Slot!! ***********")`,
        ampHtml: `<hr/><div class="storyTopSlot1">This Stuff Is Coming From Slot... <a href="google.com">Link To Google</a></div><hr/>`,
        styles: `.storyTopSlot1{background-color: green}`
      }
    }
  }
};

export const config: Config = {
  publisherConfig,
  ampConfig,
  opts
};
