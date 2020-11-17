import React from "react";
import styled from "styled-components";
import get from "lodash.get";

const StyledCollectionTemplateWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 5px solid orange;
`;
const StyledStoryCard = styled.a`
  width: 25%;
  box-sizing: border-box;
  margin: 15px;
  text-align: center;
`;

export const FourStoryRow = ({ collection, config }) => {
  const stories = collection.items
    .filter((item) => item.type === "story")
    .slice(0, 4)
    .map((story) => story.story);
  return (
    <StyledCollectionTemplateWrapper>
      {stories.map((story) => (
        <StoryCard key={story.id} story={story} config={config} />
      ))}
    </StyledCollectionTemplateWrapper>
  );
};

const StoryCard = ({ story, config }) => {
  const imgSrc = get(story, "hero-image-s3-key", null);
  const cdnName = get(config, ["publisherConfig", "cdn-name"], null);
  return (
    <StyledStoryCard>
      <amp-img src={`${cdnName}/${imgSrc}`} alt="trash" layout="responsive" width="16" height="9" />
      <h1>{story.headline}</h1>
      <div>{story["author-name"]}</div>
    </StyledStoryCard>
  );
};

const propsChecker = (props) => {};
