import * as StoryPageSlots from "./story-page-slots";

/**
 * Slots can be thought of as windows that let the user "slot in" whatever he/she needs. They are nothing but render props.
 * In story page, we have two slots - the [top slot]{@link module:TopSlot} and the bottom slot [bottom slot]{@link module:BottomSlot}
 *
 * the render props needed for slots need to be passed in opts object to ampRoutes function.
 * Please note that in the render prop, `<Layout />` has to be the outermost component, since it's the context provider. It needs mandatory props story and config, that are given by the render prop as parameter (refer below code for clarity)
 *
 * @param {Object} params object containing parameters passed to the render prop
 * @param {Story} params.story story object
 * @param {Config} params.config config object
 *
 * ```javascript
 * ...
 * ampRoutes(app, {
 *    slots: {
 *      story: {
 *        "top-slot": ({story, config}) => <MyTopSlot story={story} config={config} />
 *        "bottom-slot": ({story, config}) => <MyBottomSlot story={story} config={config} />
 *      }
 *    }
 * })
 * ...
 *
 * import { AMP } from "@quintype/amp";
 * const { Layout, Head, Spacer, DateUpdated, DateLastPublished } = AMP;
 *
 * const MyTopSlot = ({ story, config }) => (
 *  <Layout story={story} config={config}>
 *    <Head>
 *      <script
 *        async={undefined}
 *        custom-element="amp-date-countdown"
 *        src="https://cdn.ampproject.org/v0/amp-date-countdown-0.1.js"
 *      />
 *      <script
 *        async={undefined}
 *        custom-template="amp-mustache"
 *        src="https://cdn.ampproject.org/v0/amp-mustache-0.2.js"
 *      />
 *      <style>{`
 *        .ts_wrapper {
 *          background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);
 *          filter: brightness(0.9);
 *          margin: 15px 0;
 *          line-height: 50px;
 *          text-align: center;
 *          display: block;
 *          color: white;
 *        }
 *      `}</style>
 *      <style>{`
 *        .ts_a {
 *          color: inherit;
 *        }
 *      `}</style>
 *    </Head>
 *    <div>This is the top slot</div>
 *    <div>
 *      <DateLastPublished prepend="Published:" />
 *      <Spacer token="m" align="horizontal" />
 *      <DateUpdated prepend="Updated:" />
 *    </div>
 *    <div
 *      dangerouslySetInnerHTML={{
 *        __html: `<amp-date-countdown height="100" class="ts_wrapper" timestamp-seconds="2147483648"
 *        layout="fixed-height">
 *        <template type="amp-mustache">
 *          <div>This is the top slot</div>
 *          <div>
 *            {{d}} days, {{h}} hours, {{m}} minutes and {{s}} seconds until <a class="ts_a" href="https://en.wikipedia.org/wiki/Year_2038_problem">Y2K38</a>.
 *          </div>
 *        </template>
 *      </amp-date-countdown>`
 *      }}
 *    />
 *  </Layout>
 * );
 * ```
 *
 * @category Atoms
 * @module Slots
 */

export { StoryPageSlots };
