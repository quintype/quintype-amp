import React from "react";
import get from "lodash.get";
import styled from "styled-components";
import { Author as AuthorTypesStory } from "../../types/story";
import { AuthorProps } from "./types";
import { Spacer } from "../spacer";

const StyledAuthor = styled.div`
  font-family: ${(props) => props.theme.font.family.secondary};
  font-size: ${(props) => props.theme.font.size.tiny};
  font-weight: bold;
  display: flex;
  align-items: center;
`;

export const getAuthorNames = (authors: AuthorTypesStory[]) =>
  authors.reduce((acc, author, index) => {
    if (authors.length === 1) {
      return `${author.name}`;
    } else if (index === authors.length - 2) {
      return `${acc} ${author.name}`;
    } else if (index === authors.length - 1) {
      return `${acc} & ${author.name}`;
    } else if (index < authors.length) {
      return `${acc} ${author.name},`;
    }
    return "";
  }, "");

/**
 * Author Component - displays all authors passed as an array
 *
 * @category Atoms
 * @module Author
 * @component
 * @param {AuthorProps} props
 * @param {Author[]} props.authors Array containing details about all authors of the story. Comes from Story API
 * @param {(string | React.Component)} props.prepend Optional. Used to prepend either some string or a component containing some icon to authors.
 *
 */
const Author = ({ authors, prepend, story, config, theme }: AuthorProps) => {
  const authorCardRender = get(config, ["opts", "render", "authorCardRender"], null);

  if (authorCardRender && typeof authorCardRender === "function") return authorCardRender({ story, config, theme });

  return (
    <StyledAuthor>
      {prepend && prepend}
      {prepend && <Spacer token="xxs" align="horizontal" />}
      {getAuthorNames(authors)}
    </StyledAuthor>
  );
};

/**
 *
 * ### How to pass custom Author component from the app?
 * ...
 * ...
 * ampRoutes(app, {
 *  ...
 *  ...
 *  render: {
 *    authorCardRender: ({ story, config, theme }) => {
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
 *     }
 *  },
 * }
 *  ...
 *  ...
 * ```
 *
 * @category Molecules
 * @module Author
 * @component
 */

export { Author };
