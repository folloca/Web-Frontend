import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import useInterval from "../hooks/useInterval";

const mockColor = ["red", "blue", "orange", "black", "green"];

function BannerContainer() {
  const [currentBannerNum, setCurrentBannerNum] = React.useState(0);
  const [delay, setDelay] = React.useState(3000);

  const handlerSetCurrentBannerNum = () => {
    setCurrentBannerNum((prev) => {
      if (prev === 4) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };

  const handlerSetBannerNum = React.useCallback((num: number) => {
    setCurrentBannerNum(num);
  }, []);

  useInterval(handlerSetCurrentBannerNum, delay, Math.random());
  return (
    <Wrapper>
      {mockColor.map((color, idx) => (
        <Banner isCur={idx === currentBannerNum} color={color} key={idx} />
      ))}
      {/*<BannerButtonWrapper>*/}
      {/*  {mockColor.map((color, idx) => {*/}
      {/*    return (*/}
      {/*      <BannerControlButton*/}
      {/*        title={color}*/}
      {/*        value={idx}*/}
      {/*        delay={delay}*/}
      {/*        isCheck={currentBannerNum === idx}*/}
      {/*        handlerSetBannerNum={handlerSetBannerNum}*/}
      {/*        key={idx}*/}
      {/*      />*/}
      {/*    );*/}
      {/*  })}*/}
      {/*</BannerButtonWrapper>*/}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 320px;
  overflow: hidden;
  position: relative;
`;

const BannerButtonWrapper = styled.div`
  position: absolute;
  top: calc(100% - 3rem);
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 0 auto;

  ${({ theme }) => theme.device.mobile`
        display:none;
  `}
`;

export default BannerContainer;
