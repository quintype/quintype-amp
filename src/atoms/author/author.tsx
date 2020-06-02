import React from "react";
import styled from "styled-components";
import { Author } from "../../types/story";
import { AuthorProps } from "./types";
import { Spacer } from "../spacer";

const StyledAuthor = styled.div.attrs(({ inlineStyles }: StyledAuthorTypes) => ({ style: inlineStyles }))<
  StyledAuthorTypes
>`
  font-family: ${(props) => props.theme.font.family.secondary};
  font-size: ${(props) => props.theme.font.size.tiny};
  font-weight: bold;
  display: flex;
  align-items: center;
`;

export interface StyledAuthorTypes {
  inlineStyles?: object;
}

const getAuthorNames = (authors: Author[]) =>
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

const Author = ({ authors, prepend, inlineStyles }: AuthorProps) => {
  return (
    <StyledAuthor inlineStyles={inlineStyles}>
      {prepend && prepend}
      {prepend && <Spacer token="m" align="horizontal" />}
      {getAuthorNames(authors)}
    </StyledAuthor>
  );
};

export { Author };
