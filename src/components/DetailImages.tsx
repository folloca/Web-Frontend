import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import DirectionButton from "../../public/assets/DirectionButton.svg";
import SpaceDetailThumbnail from "./SpaceDetailThumbnail";
import SpaceDetailMainImages from "./SpaceDetailMainImages";
import useBoolean from "../hooks/useBoolean";
import FullScreenImages from "./FullScreenImages";

export type TDirections = "right" | "left" | number;

export type TImages = string[];
const mockImages = [
  "https://i.dummyjson.com/data/products/12/1.jpg",
  "https://i.dummyjson.com/data/products/12/2.jpg",
  "https://i.dummyjson.com/data/products/12/3.png",
  "https://i.dummyjson.com/data/products/12/4.jpg",
];

export interface IDetailImages {
  images: string[];
}

function DetailImages({ images }: IDetailImages) {
  const [cur, setCur] = useState(0);
  const { value: isFull, setTrue, setFalse: handlerCloseModal } = useBoolean(false);
  const ImagesRef = useRef<HTMLDivElement>(null);

  const handlerMoveScroll = (direction: TDirections) => () => {
    if (typeof direction === "number") {
      setCur(direction);
    } else {
      setCur((prev) => prev + (direction === "right" ? 1 : -1));
    }
  };

  const handlerOpenImage = (imgIdx: number) => () => {
    setCur(imgIdx);
    setTrue();
  };

  useEffect(() => {
    if (ImagesRef.current === null) return;
    if (ImagesRef.current.children.length === 0) return;
    if (isFull) return;

    const location = ImagesRef.current.children[cur].getBoundingClientRect().width || 0;
    ImagesRef.current.style.transform = `translate(-${location * cur}px, 0px)`;
  }, [cur, isFull]);

  return (
    <Wrapper>
      <SpaceDetailMainImages ImagesRef={ImagesRef} imagesUrl={images} handlerFullScreen={handlerOpenImage} />
      <SpaceDetailThumbnail thumbnails={images} handlerMoveScroll={handlerMoveScroll} />
      {!isFull && cur > 0 && <DirectionButton className="DirectionRightButton" onClick={handlerMoveScroll("left")} />}
      {!isFull && cur < images.length - 1 && (
        <DirectionButton className="DirectionLeftButton" onClick={handlerMoveScroll("right")} />
      )}
      {isFull && (
        <FullScreenImages
          images={images}
          cur={cur}
          handlerMoveScroll={handlerMoveScroll}
          handlerCloseModal={handlerCloseModal}
        />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;

  & svg {
    position: absolute;
    cursor: pointer;
  }

  & > svg {
    width: 40px;
    height: 40px;
    top: 40%;
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
