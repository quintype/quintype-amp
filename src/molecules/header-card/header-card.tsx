import React from "react";
import { withStoryAndConfig } from "../../context";
import { CommonRenderPropTypes } from "../../types/config";
import styled, { useTheme } from "styled-components";
import get from "lodash.get";
import { Author, Section, Spacer } from "../../atoms";
import { HeroImage, SocialShareHeader, DateFirstPublished, DateLastPublished } from "../index";
import { getLocalizedWord } from "../../utils/localize-words/localization";
import { getDateSettings } from "../../utils/date-time";

interface HeaderCardProps extends CommonRenderPropTypes {
  storyType: "text" | "live-blog";
}

export const HeaderCardBase = ({ story, config, storyType }: HeaderCardProps) => {
  const headerCardRender = get(config, ["opts", "render", "headerCardRender"], null);
  return headerCardRender ? (
    headerCardRender({ story, config })
  ) : (
    <DefaultHeaderCard story={story} config={config} storyType={storyType} />
  );
};

const Headline = styled.h1`
  font-family: ${(props) => props.theme.font.family.primary};
  font-size: ${(props) => props.theme.font.size.l};
  color: ${(props) => props.theme.color.black};
  line-height: ${(props) => props.theme.font.lineHeight.level2};
  margin: 0;
  font-weight: bold;
`;
const HeaderCardContainer = styled.div`
  padding: 0 ${(props) => props.theme.spacing.s};
  border-bottom: ${(props) => `1px solid ${props.theme.color.black}`};
`;

export const DefaultHeaderCard = ({ story, config, storyType }: HeaderCardProps) => {
  const { publisherConfig } = config;

  const theme = useTheme();

  const { enableLastPublished, enableFirstPublished } = getDateSettings(config, storyType);

  return (
    <div>
      <HeroImage />
      <Spacer token="xs" />
      <HeaderCardContainer>
        <Section section={story.sections[0]} />
        <Spacer token="xs" />
        <Headline>{story.headline}</Headline>
        <Spacer token="s" />
        <Author
          authors={story.authors}
          prepend={getLocalizedWord(config, "by", "By")}
          story={story}
          config={config}
          storyType={storyType}
          theme={theme}
        />
        <Spacer token="xxs" />
        {!!enableFirstPublished && (
          <>
            <DateFirstPublished config={config} prepend={getLocalizedWord(config, "published", "Published:")} />
            <Spacer token="m" />
          </>
        )}

        {!!enableLastPublished && (
          <>
            <DateLastPublished config={config} prepend={getLocalizedWord(config, "updatedAt", "Updated:")} />
            <Spacer token="m" />
          </>
        )}

        <SocialShareHeader fbAppId={publisherConfig.facebook && publisherConfig.facebook["app-id"]} />
        <Spacer token="s" />
      </HeaderCardContainer>
    </div>
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
 *
 * ### How to pass custom Author component?
 * ...
 * featureConfig: {
 *     authorCardRender({ story, config, storyType, theme }) {
 *     const authorSettings =
 *         get(
 *           config,
 *           ["additionalConfig", "story", `${camelCase(storyType)}-story`, "settings", "authorDetails"],
 *           {}
 *         ) || {};
 *       const authorStyle = get(authorSettings, ["template"], "default");
 *       if (authorStyle !== "default") return null;
 *       const { enableLocalization = false, localizedElements = {} } = get(
 *         config,
 *         ["additionalConfig", "general", "localization"],
 *         {}
 *       );
 *       const localizedElementData = enableLocalization ? localizedElements : {};
 *       const { buttonLabels = {} } = localizedElementData;
 *       const { authorLabel: localizedAuthorLabel, guestAuthorLabel: localizedGuestAuthorLabel } = buttonLabels;
 *       const authorConfig = {
 *         ...authorSettings,
 *         localizedAuthorLabel,
 *         localizedGuestAuthorLabel,
 *       };
 *       return <AuthorCard authors={story.authors} config={authorConfig} theme={theme} />;
 *     },
 *   ...
 * ```
 *
 * @category Molecules
 * @module HeaderCard
 * @component
 */
const HeaderCard = withStoryAndConfig(HeaderCardBase);

export { HeaderCard };
