import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    background-color: ${(props) => props.theme.color.primaryColor};
    height:100%
`;
export const VisualDefault = () => {
    return <amp-story-grid-layer template="fill" >
        <StyledDiv />
    </amp-story-grid-layer >
}
