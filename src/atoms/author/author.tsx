import React from "react";
import styled, { css, withTheme } from "styled-components";
import { Author } from "../../types/story";
import { AuthorProps } from "./types";
import { genStyles } from "../../helpers/gen-styles";
import get from "lodash.get";

const baseAuthorStyles = css`
  font-family: ${(props) => props.theme.font.family.secondary};
  font-size: ${(props) => props.theme.font.size.xxs};
  font-weight: bold;
  display: flex;
  align-items: center;
`;

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

const AuthorBase = ({ authors, prepend, style, theme }: AuthorProps) => {
  const authorStyles = get(style, "author", null);
  const StyledAuthor = styled.div`
    ${genStyles(baseAuthorStyles, authorStyles, theme)}
  `;
  return (
    <StyledAuthor>
      {prepend && prepend}
      {getAuthorNames(authors)}
    </StyledAuthor>
  );
};

const Author = withTheme(AuthorBase);

export { Author };
