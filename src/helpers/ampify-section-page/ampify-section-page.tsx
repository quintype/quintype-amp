import { renderToString } from "../render-to-string";
// ampifyStory and ampifySectionPage should be just one function.. this is temp

export const ampifySectionPage = ({ sectionPageData, layout, config, seo = `<link rel="canonical" href=".">` }) => {
  if (!layout) {
    // apply default layout, throwing err for now
    throw new Error("Layout not passed!");
  }
  const ampHtml = renderToString({
    template: layout({ collection: sectionPageData, config }),
    seo,
    langTag: "en"
  });
  return ampHtml;
};

// friday
// built a dummy component 4-story-grid which amplib will export
// added code in NL to display this in section page
//

// To-do:
// 1. identify what all components (carousel, 4-story-card etc.) would publishers want, start working on them
// 2. decide from where config for ads will come (FE as featureConfig OR Bold OR from /api/v1/amp/config)
// 3.

// questions:
// where to get ad config from? FE app, bold,

// Strategy:
// 1. Fetch collection. It may either contain stories, collections or mix of both
// 2. The template component needed to render on non-AMP pages is in collection > items > (forEach) > collection["associated-metadata"].layout
// 3. This is mapped to amp components with a many-one relation eg. TwoRowsFourStories >-map-> AmpTwoRowFourStories; FourStoriesWithCampaign >-map-> AmpTwoRowFourStories
// 4. FE will pass all collection template components needed i.e. it will provide AmpTwoRowFourStories
// 5. FE will also provide the mapping between non-amp to amp collection templates. In addition, there will also be a default template given by amplib
// 6.
