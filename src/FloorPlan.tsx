import React, { ChangeEvent, useRef } from "react";
import Marker from "./components/Marker";
import styled from "styled-components";
import { font } from "./config/style/fontTheme";

interface IFloorPlan {
  imgSrc: string;
  isInput?: boolean;
  markers?: number[][];
  handlerSetMarkers?: (x: number, y: number) => void;
  handlerDeleteMarker?: (x: number, y: number) => void;
  handlerImageDoneTrue?: () => void;
  handlerImageClick?: (inputRef: HTMLInputElement) => void;
  handlerSetFile?: (e: ChangeEvent<HTMLInputElement>) => void;
}

function FloorPlan({
  imgSrc,
  markers = [],
  isInput = true,
  handlerImageDoneTrue = () => {},
  handlerDeleteMarker = () => {},
  handlerSetMarkers = () => {},
  handlerImageClick = () => {},
  handlerSetFile = () => {},
}: IFloorPlan) {
  const imageRef = useRef<HTMLDivElement>(null);
  const waveRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handlerMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isInput) return;
    if (circleRef.current === null) return;
    if (imageRef.current === null) return;

    const { top, left } = imageRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    circleRef.current.style.top = `${y}px`;
    circleRef.current.style.left = `${x}px`;
  };

  const handlerAppear = () => {
    if (!isInput) return;
    if (imageRef.current === null) return;
    if (circleRef.current === null) return;

    circleRef.current.style.display = "block";
  };

  const handlerDisappear = () => {
    if (!isInput) return;
    if (imageRef.current === null) return;
    if (circleRef.current === null) return;
    circleRef.current.style.display = "none";
  };

  const handlerClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isInput) return;
    if (imageRef.current === null) return;
    if (waveRef.current === null) return;

    const { top, left, width, height } = imageRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    waveRef.current.style.top = `${y}px`;
    waveRef.current.style.left = `${x}px`;
    const ratioX = (x / width) * 100;
    const ratioY = (y / height) * 100;
    handlerSetMarkers(ratioX, ratioY);

    let time = 0;
    const max = 30;
    const animation = () => {
      if (waveRef.current === null) return;
      if (time > max) {
        waveRef.current.style.width = "20px";
        waveRef.current.style.height = "20px";
        return;
      }

      waveRef.current.style.opacity = `${1 - time / max}`;
      waveRef.current.style.width = `${waveRef.current.getBoundingClientRect().width + time}px`;
      waveRef.current.style.height = `${waveRef.current.getBoundingClientRect().height + time}px`;

      time++;
      requestAnimationFrame(animation);
    };
    waveRef.current.style.display = "block";
    requestAnimationFrame(animation);
  };

  return (
    <>
      <ImageButtonWrapper isInput={isInput}>
        <ImageWrapper
          ref={imageRef}
          isInput={isInput}
          onClick={
            isInput
              ? handlerClick
              : () => {
                  if (inputRef.current === null) return;

                  handlerImageClick(inputRef.current);
                }
          }
          onMouseEnter={handlerAppear}
          onMouseMove={handlerMove}
          onMouseLeave={handlerDisappear}
        >
          <img src={imgSrc} alt="floor plan image" />
          {isInput && (
            <>
              <Wave ref={waveRef} />
              <Circle ref={circleRef} />
            </>
          )}
        </ImageWrapper>
        {isInput && (
          <button type="button" onClick={handlerImageDoneTrue}>
            평면도 등록
          </button>
        )}

        {markers.map((marker, idx) => (
          <Marker
            handlerDeleteMarker={handlerDeleteMarker}
            idx={idx + 1}
            x={marker[0]}
            y={marker[1]}
            key={`${marker[1]}${marker[0]}`}
          />
        ))}
        {!isInput && <input onChange={handlerSetFile} multiple={false} accept="image/*" type="file" ref={inputRef} />}
      </ImageButtonWrapper>
    </>
  );
}

const ImageButtonWrapper = styled.div<{ isInput: boolean }>`
  position: ${({ isInput }) => (isInput ? "absolute" : "relative")};

  ${({ isInput }) => (isInput ? "  top: 50%;  left: 50%;  transform: translate(-50%, -50%);  cursor: pointer;" : "")}
  & button {
    transform: translate(-100%, 0);
    position: absolute;
    top: calc(100% + 16px);
    left: 100%;
    background: #047fff;
    border-radius: 4px;
    border-width: 0;
    width: 112px;
    height: 52px;
    color: #ffffff;
    cursor: pointer;

    ${font.spoqaHanSansNeo.medium.paragraph[2]};
  }

  & input {
    display: none;
  }
`;
const ImageWrapper = styled.div<{ isInput: boolean }>`
  position: relative;
  overflow: hidden;

  & img {
    width: ${({ isInput }) => (isInput ? "636px;" : "100%")};
    height: ${({ isInput }) => (isInput ? "636px;" : "auto")};
    border: 0.555921px solid #000000;
    background: white;
  }
`;

const Wave = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;

  position: absolute;
  transform: translate(-50%, -50%);
  display: none;
  border: 1px solid #047fff;
`;

const Circle = styled(Wave)`
  width: 30px;
  height: 30px;
  background: #047fff;
`;

export default FloorPlan;
