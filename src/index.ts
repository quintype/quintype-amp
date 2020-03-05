import { renderToString, ampifyStory } from "./helpers";
import * as atoms from "./atoms";
import * as molecules from "./molecules";

const Amp = { ...atoms, ...molecules };
export { Amp, renderToString, ampifyStory };
