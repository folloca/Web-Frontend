import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import useInterval from "../hooks/useInterval";

const mockColor = ["red", "blue", "orange", "black", "green"];

function BannerContainer() {
  const [currentBannerNum, setCurrentBannerNum] = React.useState(0);

  useInterval(() => {
    setCurrentBannerNum((prev) => {
      if (prev === 4) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  }, 1000);

  return (
    <Wrapper>
      {mockColor.map((color, idx) => (
        <Banner isCur={idx === currentBannerNum} color={color} key={idx} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 320px;
  overflow: hidden;
  position: relative;
  margin-bottom: 24px;
`;

export default BannerContainer;
