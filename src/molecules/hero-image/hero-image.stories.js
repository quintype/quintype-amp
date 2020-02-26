import * as React from "react";
import { storiesOf } from "@storybook/react";
import { HeroImage } from "./hero-image"; 
import { textStory } from "../../__fixtures__/story.fixture";
import { config } from "../../__fixtures__/config.fixture";
import Layout from "../../atoms/layout"

storiesOf("HeroImage", module)
  .addDecorator((story) => <Layout story={textStory} config={config}>{story()}</Layout>)
  .add("default", () => {
    return <HeroImage />
  })

