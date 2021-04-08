import { renderToString, ampifyStory, unsupportedStoryElementsPresent } from "./helpers";
import * as Templates from "./templates";
import * as atoms from "./atoms";
import * as molecules from "./molecules";

const AMP = { ...atoms, ...molecules };
export { AMP, Templates, renderToString, ampifyStory, unsupportedStoryElementsPresent };
