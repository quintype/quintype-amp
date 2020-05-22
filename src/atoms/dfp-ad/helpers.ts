export const getTargetingInfo = ({ story, config }) => {
  const storySections = story.sections || [];
  const sections = storySections.map((section) => section.slug);
  const env = config.publisherConfig.env;
  const publisherName = config.publisherConfig["publisher-name"];
  const targetingObj = {
    targeting: {
      environment: [env],
      "publisher-name": [publisherName],
      sections
    }
  };
  return JSON.stringify(targetingObj);
};
