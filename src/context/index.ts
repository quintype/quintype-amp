// these are higher order components which wrap given component with story, config etc

import { withStory } from "./story/with-story";
import { withConfig } from "./config/with-config";
import { withStoryAndConfig } from "./story-and-config/with-story-config";

export { withStory, withConfig, withStoryAndConfig };
