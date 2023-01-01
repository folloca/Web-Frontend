import React from "react";
import styled, { css, keyframes } from "styled-components";

interface IBannerControlButton {
  title: string;
  value: number;
  delay: number;
  isCheck: boolean;
  handlerSetBannerNum: (num: number) => void;
}

const BannerControlButton = React.memo(
  ({ title, value, isCheck, delay, handlerSetBannerNum }: IBannerControlButton) => {
    console.log(title, value, isCheck, delay);

    const handlerChangeBanner = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      handlerSetBannerNum(Number(e.currentTarget.value));
    };

    return (
      <BannerButton time={delay} isCheck={isCheck} value={value} onClick={handlerChangeBanner}>
        <span className="progressbar">
          <span className="progressbar-fill"></span>
        </span>
        <span>{value >= 10 ? value : `0${value}`}</span> {title}
      </BannerButton>
    );
  },
);

const fillProgress = keyframes`
  from {
    margin-left: -100%;
  }
  to {
    margin-left: 0;
  }
`;

const BannerButton = styled.button<{ time: number; isCheck: boolean }>`
  position: relative;
  display: inline-block;
  width: 20%;
  overflow: hidden;
  margin: 0 1em;
  padding-top: 1em;
  text-align: left;
  text-transform: uppercase;
  font-size: 1em;
  color: ${(props) => (props.isCheck ? "#fff" : "rgb(133,133,133)")};

  font-weight: 400;
  cursor: pointer;
  transition: all 0.3s;
  background: none;
  border: 0;

  .progressbar {
    position: absolute;
    top: 0;
    left: 0;
    height: 3px;
    width: 100%;
    background: #f6eac5;
    z-index: 100;

    .progressbar-fill {
      position: inherit;
      width: inherit;
      height: inherit;
      margin-left: -100%;
      background: #fff;
      ${(props) =>
        props.isCheck &&
        css`
          animation: 3s linear ${fillProgress};
        `}
    }
  }

  span {
    font-size: 1.4em;
    font-weight: 700;
  }

  &:hover {
    color: #fff;
  }
`;

export default BannerControlButton;
