import React, { ReactNode } from "react";
import styled from "styled-components";

interface IFloorPlanDialog {
  children: ReactNode;
  setReset: () => void;
  handlerResetMarkers: () => void;
}

function FloorPlanDialog({ setReset, children, handlerResetMarkers }: IFloorPlanDialog) {
  return (
    <Wrapper>
      <Background
        onClick={() => {
          setReset();
          handlerResetMarkers();
        }}
      />
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  z-index: 20;
`;

const Background = styled.div`
  background: rgba(255, 255, 255, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export default FloorPlanDialog;
