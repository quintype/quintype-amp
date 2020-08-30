import React from "react";
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

const getAuthorNames = (authors: AuthorTypesStory[]) =>
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
 */
const Author = ({ authors, prepend }: AuthorProps) => {
  return (
    <StyledAuthor>
      {prepend && prepend}
      {prepend && <Spacer token="xxs" align="horizontal" />}
      {getAuthorNames(authors)}
    </StyledAuthor>
  );
};

export { Author };
