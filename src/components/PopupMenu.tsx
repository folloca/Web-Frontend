import React from "react";
import styled from "styled-components";

const PopupMenu = () => {
  return <Wrapper>test</Wrapper>;
};

const Wrapper = styled.span`
  width: 182px;
  height: 255px;
  position: absolute;
  background: #ffffff;
  border: 1px solid #babbbc;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
  transform: translate(-100%, 0);
  top: 40px;
  left: 16px;
  padding: 22px;

  ${({ theme }) => theme.device.mobile`
      transform: translate(-100%, -100%);
      left: 62px;
      top: -20px;

  `}
`;

export default PopupMenu;
