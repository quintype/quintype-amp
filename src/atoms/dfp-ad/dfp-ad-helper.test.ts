/**
 * @jest-environment node
 */

import { getTargetingInfo } from "./helpers";

test("getTargetingInfo helper", async () => {
  const dummyStory = {
    sections: [{ slug: "news" }, { slug: "politics" }]
  };
  const dummyConfig = {
    publisherConfig: {
      env: "staging",
      "publisher-name": "Arnab Goswami's Republic TV"
    }
  };
  const targetingJson = getTargetingInfo({ story: dummyStory, config: dummyConfig });
  const obj = {
    targeting: {
      environment: ["staging"],
      "publisher-name": ["Arnab Goswami's Republic TV"],
      sections: ["news", "politics"]
    }
  };
  expect(JSON.parse(targetingJson)).toMatchObject(obj);
});
