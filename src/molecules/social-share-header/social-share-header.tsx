import React from "react";
import { SocialShareIcon, Spacer } from "../../atoms";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const SocialShareHeader = () => {
  const styles = { borderRadius: "50%", backgroundSize: "75%" };
  return (
    <Wrapper>
      <SocialShareIcon type="twitter" styles={styles} />
      <Spacer align="horizontal" token="m" />
      <SocialShareIcon type="facebook" styles={styles} />
      <Spacer align="horizontal" token="m" />
      <SocialShareIcon type="whatsapp" styles={styles} />
    </Wrapper>
  );
};

export { SocialShareHeader };
