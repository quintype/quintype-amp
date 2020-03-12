import { renderToString, ampifyStory } from "./helpers";
import * as templates from "./templates";
import * as atoms from "./atoms";
import * as molecules from "./molecules";

const Templates = { ...templates };
const AMP = { ...atoms, ...molecules };
export { AMP, Templates, renderToString, ampifyStory };
