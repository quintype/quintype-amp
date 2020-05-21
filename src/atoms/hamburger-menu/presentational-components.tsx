import styled, { css } from "styled-components";

export const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 15px;
  min-width: 220px;
  font: ${(props) => {
    const fontFamily = props.theme.font.family.primary;
    const fontWeight = props.theme.font.weight.bold;
    const fontSize = props.theme.font.size.s;
    return `${fontWeight} ${fontSize} ${fontFamily}`;
  }};
`;
const baseListItemStyles = css`
  margin: 15px 0;
  color: ${(props) => props.theme.color.secondaryColor};
`;
export const StyledListItem = styled.li`
  ${baseListItemStyles}
`;
export const SubmenuWrapper = styled.li`
  ${baseListItemStyles}
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const StyledCloseIcon = styled.div`
  cursor: pointer;
  width: 1rem;
  margin: 0 0 0 auto;
`;
export const StyledAnchor = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.color.secondaryColor};
`;
