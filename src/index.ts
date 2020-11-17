import { renderToString, ampifyStory, ampifySectionPage } from "./helpers";
import * as Templates from "./templates";
import * as atoms from "./atoms";
import * as molecules from "./molecules";

const AMP = { ...atoms, ...molecules };
export { AMP, Templates, renderToString, ampifyStory, ampifySectionPage };
