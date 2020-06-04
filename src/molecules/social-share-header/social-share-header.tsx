import React from "react";
import styled from "styled-components";
import { SocialShareIcon, Spacer } from "../../atoms";
import { SocialShareHeaderProps } from "./types";

export const Wrapper = styled.div.attrs(({ inlineStyles }: WrapperTypes) => ({ style: inlineStyles }))<WrapperTypes>`
  display: flex;
`;
export interface WrapperTypes {
  inlineStyles?: object;
}
const SocialShareHeader = ({ fbAppId, inlineStyles }: SocialShareHeaderProps) => {
  const styles = { borderRadius: "50%", backgroundSize: "75%" };
  return (
    <Wrapper inlineStyles={inlineStyles}>
      <SocialShareIcon type="twitter" styles={styles} />
      <Spacer align="horizontal" token="m" />
      <SocialShareIcon type="facebook" styles={styles} fbAppId={fbAppId} />
      <Spacer align="horizontal" token="m" />
      <SocialShareIcon type="whatsapp" styles={styles} />
    </Wrapper>
  );
};

export { SocialShareHeader };
