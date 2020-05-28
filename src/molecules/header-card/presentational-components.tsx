import styled from "styled-components";

export const Headline = styled.h1`
  font-family: ${(props) => props.theme.font.family.primary};
  font-size: ${(props) => props.theme.font.size.l};
  color: ${(props) => props.theme.color.black};
  line-height: ${(props) => props.theme.font.lineHeight.level2};
  margin: 0;
  font-weight: bold;
`;
export const HeaderCardContainer = styled.div`
  padding: 0 ${(props) => props.theme.spacing.s};
  border-bottom: ${(props) => `1px solid ${props.theme.color.black}`};
`;
export const StyledDividingLine = styled.div`
  :before {
    content: "";
  }
  border-bottom: ${(props) => `1px solid ${props.theme.color.black}`};
`;
