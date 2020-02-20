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

const Header = ({headerStyles, logoSrc, logoStyles}: HeaderTypes) => {
  return (
    <StyledHeader styles={headerStyles} >
      <HeaderLogo logoSrc={logoSrc} logoStyles={logoStyles} />
    </StyledHeader>
  )
}

export default Header