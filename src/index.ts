import { renderToString } from './core-functions'
import * as molecules from './molecules'
import * as atoms from './atoms'

const Amp = { ...atoms, ...molecules }
export {Amp, renderToString}
