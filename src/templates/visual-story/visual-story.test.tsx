import { canTakeCard } from "./visual-story";
import { visualStory } from "../../__fixtures__";

describe("canTakeCard helper function", () => {
  it("should filter out cards not containing valid story elements", () => {
    expect(visualStory.cards.map((card) => canTakeCard(card))).toStrictEqual([true, true, false, true, true, false]);
  });
});
