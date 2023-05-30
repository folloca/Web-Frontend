import React from "react";
import styled from "styled-components";

interface IMarker {
  handlerDeleteMarker?: (x: number, y: number) => void;
  x: number;
  y: number;
  idx: number;
}

function Marker({ handlerDeleteMarker, x, y, idx }: IMarker) {
  return (
    <Wrapper
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        if (handlerDeleteMarker !== undefined) handlerDeleteMarker(x, y);
      }}
      top={y}
      left={x}
    >
      {idx}
    </Wrapper>
  );
}

const Wrapper = styled.span<{ top: number; left: number }>`
  position: absolute;
  transform: translate(-50%, -50%);
  top: ${({ top }) => top}%;
  left: ${({ left }) => left}%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fafafa;
  border: 1.5px solid #047fff;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export default Marker;
