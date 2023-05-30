import React, { useEffect, useRef } from "react";
import SpaceDetailThumbnail from "./SpaceDetailThumbnail";
import DirectionButton from "../../public/assets/DirectionButton.svg";
import styled from "styled-components";
import { IDetailImages, TDirections } from "./DetailImages";
import CloseButton from "../../public/assets/X-Icon.svg";

function FullScreenImages({
  images,
  cur,
  handlerMoveScroll,
  handlerCloseModal,
}: IDetailImages & {
  cur: number;
  handlerMoveScroll: (direction: TDirections) => () => void;
  handlerCloseModal: () => void;
}) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        handlerCloseModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handlerCloseModal]);

  return (
    <Wrapper>
      <Container ref={modalRef}>
        <ImagesContainer>
          <SelectedImageContainer>
            <img src={images[cur]} alt="slected image" />
          </SelectedImageContainer>
          <SpaceDetailThumbnail thumbnails={images} handlerMoveScroll={handlerMoveScroll} />
        </ImagesContainer>
        {cur > 0 && <DirectionButton className="FDirectionRightButton" onClick={handlerMoveScroll("left")} />}
        {cur < images.length - 1 && (
          <DirectionButton className="FDirectionLeftButton" onClick={handlerMoveScroll("right")} />
        )}
        <CloseButton onClick={handlerCloseModal} className="image-close-button" />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.6);
  z-index: 999;
`;

const Container = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: calc(100% - 14%);
  padding: 0 62px;
  height: 70%;

  & svg {
    overflow: visible;
    top: 50%;
  }

  & .FDirectionLeftButton {
    transform: translate(-50%, -50%) scaleX(-1);
    right: -32px;

    path {
      fill: #828282;
      transform: scale(1.5);
    }
  }

  & .FDirectionRightButton {
    transform: translate(-50%, -50%);
    left: 0;

    path {
      fill: #828282;
      transform: scale(1.5);
    }
  }

  & .image-close-button {
    transform: translate(-100%, 0%);
    top: 0px;
    right: 32px;

    path {
      fill: #047fff;
    }
  }
`;

const ImagesContainer = styled.div`
  background: #fafafa;
  height: 100%;
`;

const SelectedImageContainer = styled.div`
  height: calc(100% - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  & img {
    max-height: 100%;
    max-width: 100%;
  }
`;

export default FullScreenImages;
