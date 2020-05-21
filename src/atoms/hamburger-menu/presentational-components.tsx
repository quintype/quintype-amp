import styled from "styled-components";

// this was ul
export const StyledList = styled.div`
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
// this was li
export const StyledListItem = styled.h2`
  margin: 15px 0;
  color: ${(props) => props.theme.color.secondaryColor};
`;
export const SubmenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const StyledCloseIcon = styled.div`
  cursor: pointer;
  width: 1rem;
  margin: 0 10px 0 auto;
`;
export const StyledAnchor = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.color.secondaryColor};
`;
