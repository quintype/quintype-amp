import * as React from "react";
import { storiesOf } from "@storybook/react";
import { HeroImage } from "./hero-image";
import { textStory } from "../../../__fixtures__/story.fixture";
import { config } from "../../../__fixtures__/config.fixture";
import Layout from "../../../atoms/layout";

const customMetadata = {
  width: 2560,
  height: 960,
  "mime-type": "image/jpeg",
  "file-size": 863219,
  "file-name": "petition filed in Delhi HC.jpg",
  "focus-point": [1249, 409]
};
const customS3Key = "barandbench/2020-02/0ecdae82-a09e-47a9-9249-d8d1380e0de8/petition_filed_in_Delhi_HC.jpg";

storiesOf("HeroImage", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("default", () => {
    return <HeroImage />;
  })
  .add("HeroImage with extremely long caption", () => {
    const junk =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt ut neque vel luctus. In dictum imperdiet tellus, vitae vestibulum elit dictum porta. Vivamus vel velit eu arcu tristique finibus et sit amet nunc. Donec condimentum lobortis nisl a vulputate. Pellentesque interdum scelerisque justo, a commodo lorem laoreet id. Curabitur molestie dictum velit, sed vehicula lorem ornare quis. Nam ac dui a velit molestie ullamcorper. Curabitur pharetra justo at tellus venenatis tincidunt. Integer bibendum ante vel vulputate tincidunt. Aliquam quis tortor id justo dignissim lacinia. Sed ligula nulla, convallis ornare tincidunt vitae, venenatis sed turpis. Nam imperdiet finibus felis vel euismod. Fusce tortor sapien, molestie id turpis non, lobortis venenatis felis. Duis facilisis dictum turpis, ac pharetra nunc imperdiet sit amet. Nullam augue orci, vestibulum aliquam augue at, pulvinar dictum justo. Vivamus nec lobortis nisi. Integer fermentum aliquam massa eu volutpat. Vivamus sit amet leo in metus euismod mollis et sed magna. Suspendisse luctus pretium libero, vitae vehicula lacus vehicula a. Vivamus elementum magna at interdum porta. Curabitur condimentum dui ut sapien luctus, id mattis elit sodales. Etiam bibendum dolor quis sapien pellentesque, at interdum mi laoreet. Nulla tellus augue, convallis non lacinia sed, placerat nec magna. Quisque blandit velit ac leo rutrum, at euismod sapien fringilla. Phasellus hendrerit tincidunt varius. In vehicula blandit pharetra. In vel pharetra diam, nec mattis purus. Maecenas mollis eu erat non aliquet. Phasellus a ligula ac quam faucibus congue sed ut enim. Donec vehicula leo vitae odio semper consectetur non lacinia velit. Pellentesque feugiat leo ut est ornare accumsan. Etiam at condimentum nunc. Vivamus sit amet leo in metus euismod mollis et sed magna. Suspendisse luctus pretium libero, vitae vehicula lacus vehicula a. Vivamus elementum magna at interdum porta. Curabitur condimentum dui ut sapien luctus, id mattis elit sodales. Etiam bibendum dolor quis sapien pellentesque, at interdum mi laoreet. Nulla tellus augue, convallis non lacinia sed, placerat nec magna. Quisque blandit velit ac leo rutrum, at euismod sapien fringilla. Phasellus hendrerit tincidunt varius. In vehicula blandit pharetra. In vel pharetra diam, nec mattis purus. Maecenas mollis eu erat non aliquet. Phasellus a ligula ac quam faucibus congue sed ut enim. Donec vehicula leo vitae odio semper consectetur non lacinia velit. Pellentesque feugiat leo ut est ornare accumsan. Etiam at condimentum nunc.";
    return <HeroImage caption={junk} attribution={null} slug={customS3Key} metadata={customMetadata} />;
  })
  .add("HeroImage with custom attributes - with no attribution", () => {
    return (
      <HeroImage
        caption=" Congress, AAP and AIMIM leaders "
        attribution={null}
        slug={customS3Key}
        metadata={customMetadata}
      />
    );
  })
  .add("HeroImage with custom attributes - with no caption", () => {
    return <HeroImage caption={null} attribution="custom attribution" slug={customS3Key} metadata={customMetadata} />;
  })
  .add("HeroImage with custom attributes", () => {
    return (
      <HeroImage
        caption=" Congress, AAP and AIMIM leaders "
        attribution="custom attribution"
        slug={customS3Key}
        metadata={customMetadata}
      />
    );
  })
  .add("HeroImage with custom attributes - with no caption and no attribution", () => {
    return <HeroImage caption={null} attribution={null} slug={customS3Key} metadata={customMetadata} />;
  });
