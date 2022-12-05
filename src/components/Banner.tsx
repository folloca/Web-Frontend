import React from "react";
import styled, { css } from "styled-components";

interface IBannerProps {
  isCur: boolean;
  color: string;
}

function Banner({ isCur, color }: IBannerProps) {
  return <Wrapper isCur={isCur} color={color}></Wrapper>;
}

const Wrapper = styled.div<IBannerProps>`
  background: ${(props) => props.color};
  width: 100%;
  height: 100%;
  opacity: 1;
  position: absolute;
  top: 0;
  left: 0;

  transition-duration: 0.5s;

  ${(props) =>
    !props.isCur &&
    css`
      opacity: 0;
    `}
`;

export default React.memo(Banner);
