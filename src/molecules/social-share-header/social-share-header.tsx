import React from "react";
import styled from "styled-components";
import { SocialShareIcon, Spacer } from "../../atoms";
import { SocialShareHeaderProps } from "./types";

const Wrapper = styled.div`
  display: flex;
`;

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

/**
 * SocialShareHeader Component uses the SocialShareIcon atomic component internally.
 *
 * ```js
 * <SocialShareHeader fbAppId="1234"/>
 * ```
 *
 * @param {Object} props Object containing parameters passed to the render prop
 * @param {String} props.fbAppId Required. Specify the facebook app id.
 *  @category Molecules
 * @component
 */

export { SocialShareHeader };
