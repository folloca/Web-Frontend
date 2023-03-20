import React from "react";
import styled from "styled-components";
import InputPlus from "../../public/assets/InputPlus.svg";
import useBoolean from "../hooks/useBoolean";

interface IImageCard {
  src: string;
  handlerDeleteImages: (deleteImage: string) => void;
}

const ImageCard = React.memo(({ src, handlerDeleteImages }: IImageCard) => {
  const { value: isHover, setTrue, setFalse } = useBoolean(false);

  return (
    <Wrapper onMouseOver={() => setTrue()} onMouseOut={() => setFalse()}>
      <ImgCard src={src} alt={src} />
      <DeleteCard className={isHover ? "" : "remove"}>
        <InputPlus
          onClick={() => {
            handlerDeleteImages(src);
          }}
        />
      </DeleteCard>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  position: relative;

  & .remove {
    visibility: hidden;
    opacity: 0;
  }
`;

const ImgCard = styled.img`
  width: 144px;
  height: 144px;
`;

const DeleteCard = styled.div`
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  left: 0;
  width: 144px;
  height: 144px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease-out;

  & path {
    fill: white;
  }

  & svg {
    transform: rotate(45deg);
    cursor: pointer;
  }
`;

export default ImageCard;
