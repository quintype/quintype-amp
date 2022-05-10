import { config } from "../../__fixtures__";
import { getLocalizedWord } from "./localization";

describe("getLocalizedWord", () => {
  it("should return fallback when there is no localized word in the config", () => {
    const actualValue = getLocalizedWord(config, "lorem", "Lorem Ipsum:");
    expect(actualValue).toBe("Lorem Ipsum:");
  });
  it("should return the localized word when there is a matching word in the config", () => {
    const actualValue = getLocalizedWord(config, "published", "Lorem Ipsum:");
    expect(actualValue).toBe("نشرت");
  });
});
