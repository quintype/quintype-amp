import React from "react";
import { SocialShareIcon } from "../../atoms";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;
const Spacer = styled.div`
  width: 20px;
`;

const SocialShareHeader = () => {
  const styles = { borderRadius: "50%", backgroundSize: "75%" };
  return (
    <Wrapper>
      <SocialShareIcon type="twitter" styles={styles} />
      <Spacer />
      <SocialShareIcon type="facebook" styles={styles} />
      <Spacer />
      <SocialShareIcon type="whatsapp" styles={styles} />
    </Wrapper>
  );
};

export { SocialShareHeader };
