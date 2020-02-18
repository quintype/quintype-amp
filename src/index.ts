import { renderToString } from './core-functions'
import * as molecules from './components/molecules'
import * as atoms from './components/atoms'

const Amp = { ...atoms, ...molecules }
export {Amp, renderToString}
