import React from 'react'
import {BlockQuote} from './types'
import { AppContext } from '../../../helper-functions'
import styled from 'styled-components'

const StyledBlockQuote = styled.div`
  color: cyan;
  margin: 5px solid purple;
  padding: 3rem;
`
const AmpBlockQuote = (props: BlockQuote) => (
  <AppContext.Consumer>
    {appContext => (
      appContext.ignoreDefaultStyles ?
        <div className="amp-se-blockquote">{props.children}</div> :
        <StyledBlockQuote>{props.children}</StyledBlockQuote>
    )}
  </AppContext.Consumer>
)

export default AmpBlockQuote
