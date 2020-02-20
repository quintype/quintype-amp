import React from 'react'
import styled from 'styled-components'
import HeaderLogo from '../../atoms/header-logo'
import HamburgerIcon from '../../atoms/hamburger-icon'
import { HeaderTypes, StyledHeaderTypes } from './types'

const StyledHeader = styled.header`
  height: 60px;
  width: 100%;
  position: relative;
  box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.75);
  ${(props: StyledHeaderTypes) => props.styles};
`

const Header = ({headerStyles, logoSrc, logoStyles, isLeftAligned, callback}: HeaderTypes) => {
  return (
    <StyledHeader styles={headerStyles} >
      <HamburgerIcon isLeftAligned={isLeftAligned} callback={callback} />
      <HeaderLogo logoSrc={logoSrc} logoStyles={logoStyles} />
    </StyledHeader>
  )
}

export default Header