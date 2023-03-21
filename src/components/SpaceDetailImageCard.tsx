import React from "react";
import styled from "styled-components";

interface IImageCard {
  imageUrl: string;
  onClick?: () => void;
}

const SpaceDetailImageCard = ({ imageUrl, onClick }: IImageCard) => {
  return (
    <Wrapper onClick={onClick} isClick={onClick !== undefined}>
      <img src={imageUrl} alt={imageUrl} className={imageUrl} />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isClick: boolean }>`
  display: inline-block;
  width: 100%;
  height: 100%;

  cursor: ${({ isClick }) => (isClick ? "pointer" : "")};

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default SpaceDetailImageCard;
