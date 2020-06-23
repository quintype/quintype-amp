import React from "react";
import { withStoryAndConfig } from "../../context";
import { DefaultHeaderCard } from "./container-components";
import { CommonRenderPropTypes } from "../../types/config";

export const HeaderCardBase = ({ story, config }: CommonRenderPropTypes) => {
  return config.opts && config.opts.headerCardRender ? (
    config.opts.headerCardRender({ story, config })
  ) : (
    <DefaultHeaderCard story={story} config={config} />
  );
};

/**
 * HeaderCard component is the story header. It can contain the heroImage, story section, headline, authors, story dates, and the social share icons
 * The look of the headerCard can be changed using the render prop headerCardRender. In case headerCardRender is passed in the config,
 * it is rendered. Otherwise a default headerCard is rendered
 *
 * ```javascript
 * import React from "react";
 * import { AMP } from "@quintype/amp";
 * import {AuthorLogo, Magazines} from "./react/wrapped/svgs"
 * const { Section, Spacer, Author, DateLastPublished, DateUpdated, HeroImage, Layout, Head } = AMP;
 * const MyCustomHeadercard = ({ story, config }) => (
 * <Layout story={story} config={config}>
 *    <Head>
 *      <style>{`
 *        .headerSectionWrapper {
 *         display: flex;
 *         align-items: center;
 *       }
 *     `}</style
 *    </Head>
 *    <div>
 *      <DateLastPublished format="do MMM, yyyy 'at' p" prepend="Published: " />
 *      <Spacer align="horizontal" token="m" />
 *      <DateUpdated prepend="Updated: " />
 *    </div>
 *    <div>{story.headline}</div>
 *    <Author authors={story.authors} prepend={<AuthorLogo svgheight={24.42} svgwidth={24.42} svg={true} />} />
 *    <Spacer token="m" />
 *    <HeroImage />
 *    <div className="headerSectionWrapper">
 *      <Magazines height={40} width={40} color="red" />
 *      <Spacer align="horizontal" token="m" />
 *      <Section section={story.sections[0]} />
 *    </div>
 *  </Layout>
 * )
 *
 * ...
 * ampRoutes(app, {
 *    headerCardRender: ({ story, config }) => <MyCustomHeadercard story={story} config={config} />
 * })
 * ...
 * ```
 *
 * @category Molecules
 * @module HeaderCard
 * @component
 */
const HeaderCard = withStoryAndConfig(HeaderCardBase);

export { HeaderCard };
