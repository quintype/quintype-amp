import styled from "styled-components";

export const StoryContainer = styled.div.attrs({
  id: "qt-amp-story-container"
})`
  max-width: 600px;
  margin: 0 auto;
`;
export const Wrapper = styled.div`
  padding: 0 ${(props) => props.theme.spacing.s};
`;
export const DateLineWrapper = styled.div`
  font-style: italic;
`;
