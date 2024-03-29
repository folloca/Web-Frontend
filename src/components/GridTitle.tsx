import React from "react";
import styled from "styled-components";

interface IGridTitleProps {
  text: React.ReactElement;
  padding?: string;
  width?: string;
  height?: string;
  font?: string;
}

function GridTitle({ text, width = "100%", height = "auto", padding = "8px 0 2px 16px", font = "" }: IGridTitleProps) {
  return (
    <Wrapper width={width} height={height} padding={padding} font={font}>
      {text}
    </Wrapper>
  );
}

const Wrapper = styled.div<{ width: string; height: string; padding: string; font: string }>`
  border: solid #000000;
  border-width: 1px 0 0 1px;
  display: flex;
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  ${(props) => props.font}
`;

export default GridTitle;
