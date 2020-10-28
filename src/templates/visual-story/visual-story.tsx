import React, { Fragment } from "react";
import get from "lodash/get";
import { Layout, StoryElement, VisualImage, VisualText } from "../../atoms";
import Helmet from "react-helmet";
import { HeaderCard, HeroImage, RelatedStories } from "../../molecules";
import { Theme } from "../../context/theme";
import { StoryCards } from "../../molecules/story-cards/story-card";
import { textStory } from "../../__fixtures__";
import { getTokensFromAMPConfig } from "../../utils/theme";
import { ConfigProvider } from "../../context/config/config-context";
import { ImageElement } from "../../atoms/story-elements";

export const VisualStory = ({ story, config }) => {
    const publisherLogo = get(config.publisherConfig["publisher-settings"]["publisher-logo"], "")
    const publisherTitle = get(config.publisherConfig["publisher-settings"].title, "")

    return (
        <>
            <Helmet>
                <script async={undefined} custom-element="amp-story" src="https://cdn.ampproject.org/v0/amp-story-1.0.js" />
            </Helmet>
            <amp-story
                standalone=""
                publisher-logo-src={publisherLogo}
                title={story.headline}
                publisher={publisherTitle}
                poster-portrait-src={story["hero-image-s3-key"]}
            >
                <amp-story-page id="cover">
                    <VisualImage story={story} config={config} />
                    <VerticalTemplateWrapper>
                        <Layout story={story} config={config}>
                            <HeaderCard story={story} config={config} />
                        </Layout>
                    </VerticalTemplateWrapper>
                </amp-story-page>
                <VisualFullStoryContent story={story} config={config} />
                {/* <VerticalTemplateWrapper> */}
                {/* <Layout story={story} config={config}> */}

                <RelatedStories />
                {/* </Layout> */}
                {/* </VerticalTemplateWrapper> */}
            </amp-story>
        </>

    );
};

export const ImageTemplateWrapper = ({ children }) => {
    return <amp-story-grid-layer template="fill">{children}</amp-story-grid-layer>
}

export const VerticalTemplateWrapper = ({ children }) => {
    return <amp-story-grid-layer template="vertical">{children}</amp-story-grid-layer>
}

export const StoryElementTemplateWrapper = ({ children }) => {
    return <amp-story-grid-layer template="thirds">{children}</amp-story-grid-layer>
}

export const VisualFullStoryContent = ({ story, config }) => {
    return story.cards.map((card) => {
        const imageElement = card["story-elements"].map(element => element.type).includes("image")
        // console.log(imageElement, "<----imageElement");
        // console.log(card, "<----card");
        return <amp-story-page id={card.id} key={card.id}>
            <Layout story={story} config={config}>
                {card["story-elements"].map((element) => (
                    <ImageTemplateWrapper key={element.id}>
                        <StoryElement key={element.id} element={element} />
                    </ImageTemplateWrapper>
                ))
                }
                {/* {card["story-elements"].map((element) => (
                    <StoryElementTemplateWrapper key={element.id}>
                        <StoryElement key={element.id} element={element} grid-area="middle-third" />
                    </StoryElementTemplateWrapper>
                ))
                } */}
            </Layout>
            {/* : ""
            } */}
        </amp-story-page>;
    })
};

