import React, { useRef, useState } from "react";
import styled from "styled-components";
import DirectionButton from "../../public/assets/DirectionButton.svg";

const images = [
  "https://i.dummyjson.com/data/products/12/1.jpg",
  "https://i.dummyjson.com/data/products/12/2.jpg",
  "https://i.dummyjson.com/data/products/12/3.png",
  "https://i.dummyjson.com/data/products/12/4.jpg",
  "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
];

interface IImageCard {
  imageUrl: string;
}

const ImageCard = ({ imageUrl }: IImageCard) => {
  return (
    <ImageCardWrapper>
      <img src={imageUrl} alt={imageUrl} className={imageUrl} />
    </ImageCardWrapper>
  );
};

function DetailImages() {
  const [cur, setCur] = useState(0);
  const ImagesRef = useRef<HTMLDivElement>(null);

  const handlerMoveScrollRight = (direction: "left" | "right") => () => {
    setCur((prev) => {
      let cur = direction === "right" ? prev + 1 : prev - 1;
      if (ImagesRef.current === null) return cur;

      let location =
        direction === "right"
          ? ImagesRef.current.children[cur].getBoundingClientRect().width
          : -ImagesRef.current.children[cur].getBoundingClientRect().width;

      let scroll = ImagesRef.current.scrollLeft;

      ImagesRef.current.scrollTo({
        left: scroll + location,
        behavior: "smooth",
      });

      return cur;
    });
  };

  return (
    <Wrapper>
      <Images ref={ImagesRef}>
        {images.map((image) => (
          <ImageCard imageUrl={image} key={image} />
        ))}
      </Images>
      <div></div>
      {cur > 0 && <DirectionButton className="DirectionRightButton" onClick={handlerMoveScrollRight("left")} />}
      {cur < images.length - 1 && (
        <DirectionButton className="DirectionLeftButton" onClick={handlerMoveScrollRight("right")} />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 60%;
  background: red;
  position: relative;

  & svg {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 40%;
    cursor: pointer;
  }

  & .DirectionLeftButton {
    right: 70px;
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

const Images = styled.div`
  height: 90%;
  width: 100%;
  white-space: nowrap;
  overflow-y: scroll;

  & div:not(:first-of-type) {
    margin-left: 24px;
  }
`;

const ImageCardWrapper = styled.div`
  display: inline-block;
  width: 40%;
  height: 100%;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default DetailImages;
