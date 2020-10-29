import React from "react";
import { Layout, StoryElement, VisualImage, VisualText } from "../../atoms";
import { WebStory, CoverImage } from "../../atoms/visual-story";
// import { HeaderCard } from "../../molecules";

export const VisualStory = ({ story, config }) => {
  return (
    <Layout story={story} config={config}>
      <WebStory>
        <CoverImage />
        {/* <amp-story-page id="amp-story-0">
          <amp-story-grid-layer template="fill"></amp-story-grid-layer>
        </amp-story-page> */}
      </WebStory>
    </Layout>
  );
  // <amp-story-page> => one card
  // <amp-story-grid-layer> => wrapper around story elements OR atoms

  // return (
  //   <>
  //     <Helmet>
  //       <script async={undefined} custom-element="amp-story" src="https://cdn.ampproject.org/v0/amp-story-1.0.js" />
  //     </Helmet>
  //     <amp-story
  //       standalone=""
  //       publisher-logo-src={publisherLogo}
  //       title={story.headline}
  //       publisher={publisherTitle}
  //       poster-portrait-src={story["hero-image-s3-key"]}>
  //       <amp-story-page id="cover">
  //         <VisualImage story={story} config={config} />
  //         <VerticalTemplateWrapper>
  //           <Layout story={story} config={config}>
  //             <HeaderCard story={story} config={config} />
  //           </Layout>
  //         </VerticalTemplateWrapper>
  //       </amp-story-page>
  //       <VisualFullStoryContent story={story} config={config} />
  //       <RelatedStories />
  //     </amp-story>
  //   </>
  // );
};

export const ImageTemplateWrapper = ({ children }) => {
  return <amp-story-grid-layer template="fill">{children}</amp-story-grid-layer>;
};

export const VerticalTemplateWrapper = ({ children }) => {
  return <amp-story-grid-layer template="vertical">{children}</amp-story-grid-layer>;
};

export const StoryElementTemplateWrapper = ({ children }) => {
  return <amp-story-grid-layer template="thirds">{children}</amp-story-grid-layer>;
};

export const VisualFullStoryContent = ({ story, config }) => {
  return story.cards.map((card) => {
    const imageElement = card["story-elements"].map((element) => element.type).includes("image");
    // console.log(imageElement, "<----imageElement");
    // console.log(card, "<----card");
    return (
      <amp-story-page id={card.id} key={card.id}>
        <Layout story={story} config={config}>
          {card["story-elements"].map((element) => (
            <ImageTemplateWrapper key={element.id}>
              <StoryElement key={element.id} element={element} />
            </ImageTemplateWrapper>
          ))}
        </Layout>
      </amp-story-page>
    );
  });
};
