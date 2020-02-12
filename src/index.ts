import { renderToString } from './coreFunctions'
import Layout from './components/Layout'
import * as molecules from './components/molecules'
import * as Atoms from './components/atoms'
const Amp = {Layout, ...molecules, ...Atoms}

export {Amp, renderToString}
