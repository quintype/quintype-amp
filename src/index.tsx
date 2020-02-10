import { renderToString } from './coreFunctions'
import * as StoryElements from './components/molecules'
import * as Atoms from './components/atoms'
const Amp = {...StoryElements, ...Atoms}

export {Amp, renderToString}
