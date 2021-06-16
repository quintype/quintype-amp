import { applyTransforms } from "./apply-transforms";
import { config } from "../../__fixtures__";
import cloneDeep from "lodash.clonedeep";

const mockString = "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";

function genDummyConfig(arrayOfTransforms) {
  const clonedConfig = cloneDeep(config);
  clonedConfig.opts.transforms = arrayOfTransforms;
  return clonedConfig;
}

describe("applyTransforms helper function", () => {
  it("with one transform", async () => {
    const dummyConfig = genDummyConfig([(str) => str.replace(/Dog/gi, "cat")]);
    const output = applyTransforms({
      config: dummyConfig,
      ampHtml: mockString
    });
    expect(output).toBe("The quick brown fox jumps over the lazy cat. If the cat reacted, was it really lazy?");
  });
  it("with two transforms", async () => {
    const dummyConfig = genDummyConfig([(str) => str.replace(/Dog/gi, "cat"), (str) => str.replace("cat", "chimp")]);
    const output = applyTransforms({
      config: dummyConfig,
      ampHtml: mockString
    });
    expect(output).toBe("The quick brown fox jumps over the lazy chimp. If the cat reacted, was it really lazy?");
  });
  it("with three transforms", async () => {
    const dummyConfig = genDummyConfig([
      (str) => str.replace(/Dog/gi, "cat"),
      (str) => str.replace("cat", "chimp"),
      () => "this is getting ridiculous now"
    ]);
    const output = applyTransforms({
      config: dummyConfig,
      ampHtml: mockString
    });
    expect(output).toBe("this is getting ridiculous now");
  });
  it("leaves the ampHtml unchanged when no transforms are passed", async () => {
    const dummyConfig = cloneDeep(config);
    dummyConfig.opts = {};
    const output = applyTransforms({
      config: dummyConfig,
      ampHtml: mockString
    });
    expect(output).toBe("The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?");
  });
});
