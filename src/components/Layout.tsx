import React, { Fragment } from 'react'
import * as moleculeTypes from '../type-declarations/molecularComponents'
import { Helmet } from "react-helmet";

export const AppContext = React.createContext<moleculeTypes.AppContextInterface>({
  ignoreDefaultStyles: false
})

const Layout = (props: moleculeTypes.Layout) => (
  <Fragment>
    <Helmet>
      <style>{props.customStyles}</style>
    </Helmet>
    <AppContext.Provider value={{ignoreDefaultStyles: !!props.customStyles}}>
      {props.children}
    </AppContext.Provider>
  </Fragment>
)

export default Layout
