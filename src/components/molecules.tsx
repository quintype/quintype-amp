import React, { Fragment } from 'react'
// import { Image, Title } from './atoms'
import * as moleculeTypes from '../type-declarations/molecularComponents'
import styled from 'styled-components'
import { Helmet } from "react-helmet";

const AppContext = React.createContext<moleculeTypes.AppContextInterface>({
  ignoreDefaultStyles: false
})

// these are default styles
const StyledBlurb = styled.blockquote`
  color: red;
  background-color: purple;
`
const StyledBlockQuote = styled.div`
  color: cyan;
  margin: 5px solid purple;
  padding: 3rem;
`

const AmpBlurb = (props: moleculeTypes.Blurb) => (
  <AppContext.Consumer>
    {appContext => {
      return appContext.ignoreDefaultStyles ?
        <blockquote className="amp-se-blurb">{props.children}</blockquote> :
        <StyledBlurb>{props.children}</StyledBlurb>
    }}
  </AppContext.Consumer>
)
const AmpBlockQuote = (props: moleculeTypes.BlockQuote) => (
  <AppContext.Consumer>
    {appContext => (
      appContext.ignoreDefaultStyles ?
        <div className="amp-se-blockquote">{props.children}</div> :
        <StyledBlockQuote>{props.children}</StyledBlockQuote>
    )}
  </AppContext.Consumer>
)
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

const StoryElements = { AmpBlurb, AmpBlockQuote }
export {Layout, StoryElements}
