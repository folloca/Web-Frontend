import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import DirectionButton from "../../public/assets/DirectionButton.svg";
import SpaceDetailThumbnail from "./SpaceDetailThumbnail";
import SpaceDetailMainImages from "./SpaceDetailMainImages";

export type TDirections = "right" | "left" | number;

export type TImages = string[];
const mockImages = [
  "https://i.dummyjson.com/data/products/12/1.jpg",
  "https://i.dummyjson.com/data/products/12/2.jpg",
  "https://i.dummyjson.com/data/products/12/3.png",
  "https://i.dummyjson.com/data/products/12/4.jpg",
];

interface IDetailImages {
  images: string[];
}

function DetailImages({ images }: IDetailImages) {
  const [cur, setCur] = useState(0);
  const ImagesRef = useRef<HTMLDivElement>(null);

  const handlerMoveScroll = (direction: TDirections) => () => {
    if (typeof direction === "number") {
      setCur(direction);
    } else {
      setCur((prev) => prev + (direction === "right" ? 1 : -1));
    }
  };

  useEffect(() => {
    if (ImagesRef.current === null) return;
    const location = ImagesRef.current.children[cur].getBoundingClientRect().width;
    ImagesRef.current.style.transform = `translate(-${location * cur}px, 0px)`;
  }, [cur]);

  return (
    <Wrapper>
      <SpaceDetailMainImages ImagesRef={ImagesRef} imagesUrl={mockImages} />
      <SpaceDetailThumbnail thumbnails={mockImages} handlerMoveScroll={handlerMoveScroll} />
      {cur > 0 && <DirectionButton className="DirectionRightButton" onClick={handlerMoveScroll("left")} />}
      {cur < mockImages.length - 1 && (
        <DirectionButton className="DirectionLeftButton" onClick={handlerMoveScroll("right")} />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;

  & svg {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 40%;
    cursor: pointer;
  }

  & .DirectionLeftButton {
    right: 30px;
    transform: translate(-50%, -50%) rotate(180deg);
  }

  & .DirectionRightButton {
    left: 70px;
    transform: translate(-50%, -50%);
  }

  path {
    fill: white;
  }
`;

export default DetailImages;
