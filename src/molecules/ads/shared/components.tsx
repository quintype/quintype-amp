import styled from "styled-components";

export const AdWrapper = styled.div<{ darkBackground?: boolean }>`
  text-align: center;
  background-color: ${(props) => (props.darkBackground ? props.theme.color.mono1 : null)};
`;
