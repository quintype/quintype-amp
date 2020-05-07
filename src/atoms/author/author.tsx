import React from "react";
import styled from "styled-components";
import { Author } from "../../types/story";
import { AuthorProps } from "./types";

const StyledAuthor = styled.div`
  font-family: ${(props) => props.theme.font.family.secondary};
  font-size: ${(props) => props.theme.font.size.tiny};
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

const Author = ({ authors, prepend }: AuthorProps) => {
  return (
    <StyledAuthor>
      {prepend && prepend}
      {getAuthorNames(authors)}
    </StyledAuthor>
  );
};

export { Author };
