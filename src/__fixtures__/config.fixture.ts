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
      "unit-path": "/35096353/amptesting/formats/sticky"
    },
    "body-ad": {
      width: 300,
      height: 250,
      "unit-path": "/60988533/AMP_Body"
    },
    "bottom-ad": {
      width: 300,
      height: 250,
      "unit-path": "/35096353/amptesting/formats/sticky"
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
        script: `
          <script async custom-element="amp-date-countdown" src="https://cdn.ampproject.org/v0/amp-date-countdown-0.1.js"></script>
          <script async custom-template="amp-mustache" src="https://cdn.ampproject.org/v0/amp-mustache-0.2.js"></script>
        `,
        ampHtml: `<amp-date-countdown height="100" class="ts_wrapper" timestamp-seconds="2147483648"
        layout="fixed-height">
        <template type="amp-mustache">
          <div>This is the top slot</div>
          <div>
            {{d}} days, {{h}} hours, {{m}} minutes and {{s}} seconds until <a class="ts_a" href="https://en.wikipedia.org/wiki/Year_2038_problem">Y2K38</a>.
          </div>
        </template>
      </amp-date-countdown>`,
        styles: `.ts_wrapper {
          background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);
          filter: brightness(0.9);
          margin: 15px 0;
          line-height: 50px;
          text-align: center;
          display: block;
          color: white;
        }
        .ts_a {
          color: inherit;
        }`
      },
      "bottom-slot": {
        script: `<script async custom-element="amp-dailymotion" src="https://cdn.ampproject.org/v0/amp-dailymotion-0.1.js"></script>`,
        ampHtml: `<amp-dailymotion data-videoid="x3rdtfy"
          layout="responsive"
          data-ui-highlight="FF4081"
          width="480"
          class="storyTopSlot1"
          height="270">
        </amp-dailymotion>`
      }
    }
  }
};

export const config: Config = {
  publisherConfig,
  ampConfig,
  opts
};
