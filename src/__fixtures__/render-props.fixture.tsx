import React from "react";
import { Layout, Head, Spacer } from "../atoms";
import { DateUpdated, DateLastPublished } from "../molecules";

export const TopSlotTest = ({ story, config }) => (
  <Layout story={story} config={config}>
    <Head>
      <script
        async={undefined}
        custom-element="amp-date-countdown"
        src="https://cdn.ampproject.org/v0/amp-date-countdown-0.1.js"
      />
      <script
        async={undefined}
        custom-template="amp-mustache"
        src="https://cdn.ampproject.org/v0/amp-mustache-0.2.js"
      />
      <style>{`
        .ts_wrapper {
          background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);
          filter: brightness(0.9);
          margin: 15px 0;
          line-height: 50px;
          text-align: center;
          display: block;
          color: white;
        }
      `}</style>
      <style>{`
        .ts_a {
          color: inherit;
        }
      `}</style>
    </Head>
    <div>This is the top slot</div>
    <div>
      <DateLastPublished prepend="Published:" />
      <Spacer token="m" align="horizontal" />
      <DateUpdated prepend="Updated:" />
    </div>
    <div
      dangerouslySetInnerHTML={{
        __html: `<amp-date-countdown height="100" class="ts_wrapper" timestamp-seconds="2147483648"
        layout="fixed-height">
        <template type="amp-mustache">
          <div>This is the top slot</div>
          <div>
            {{d}} days, {{h}} hours, {{m}} minutes and {{s}} seconds until <a class="ts_a" href="https://en.wikipedia.org/wiki/Year_2038_problem">Y2K38</a>.
          </div>
        </template>
      </amp-date-countdown>`
      }}
    />
  </Layout>
);
