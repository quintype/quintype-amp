import React from "react";
import { Layout, StoryElement, Spacer } from "../../atoms";
import { HeaderCard } from "../../molecules";
import styled from "styled-components";

const StoryContainer = styled.div`
  padding: 0 ${(props) => props.theme.spacing.s};
`;
const TextStory = ({ story, config }) => {
  return (
    <Layout story={story} config={config}>
      <HeaderCard />
      <Spacer token="s" />
      <StoryContainer>
        {story.cards.map((card) =>
          card["story-elements"].map((element) => <StoryElement key={element.id} element={element} />)
        )}
      </StoryContainer>
    </Layout>
  );
};

export { TextStory };
