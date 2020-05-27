import React from "react";
import styled from "styled-components";
import { SocialShareIcon, Spacer } from "../../atoms";

const Wrapper = styled.div`
  display: flex;
`;

interface SocialShareHeaderProps {
  fbAppId?: string;
}

const SocialShareHeader = ({ fbAppId }: SocialShareHeaderProps) => {
  const styles = { borderRadius: "50%", backgroundSize: "75%" };
  return (
    <Wrapper>
      <SocialShareIcon type="twitter" styles={styles} />
      <Spacer align="horizontal" token="m" />
      <SocialShareIcon type="facebook" styles={styles} fbAppId={fbAppId} />
      <Spacer align="horizontal" token="m" />
      <SocialShareIcon type="whatsapp" styles={styles} />
    </Wrapper>
  );
};

export { SocialShareHeader };
