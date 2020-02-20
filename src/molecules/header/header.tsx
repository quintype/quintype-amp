import React from 'react'
import styled from 'styled-components'
import HeaderLogo from '../header-logo'
import { HeaderTypes, StyledHeaderTypes } from './types'

const StyledHeader = styled.header`
  height: 60px;
  width: 100%;
  position: relative;
  ${(props: StyledHeaderTypes) => props.styles};
`

const Header = (props: HeaderTypes) => {
  return (
    <StyledHeader styles={props.headerStyles} >
      <HeaderLogo logoSrc={props.logoSrc} logoStyles={props.logoStyles} />
    </StyledHeader>
  )
}

export default Header