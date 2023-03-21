import React from "react";
import SpaceDetailImageCard from "./SpaceDetailImageCard";
import styled from "styled-components";
import { TDirections, TImages } from "./DetailImages";

interface ISpaceDetailThumbnail {
  thumbnails: TImages;
  handlerMoveScroll: (direction: TDirections) => () => void;
}

function SpaceDetailThumbnail({ thumbnails, handlerMoveScroll }: ISpaceDetailThumbnail) {
  return (
    <Wrapper>
      {thumbnails.map((image, idx) => (
        <div style={{ width: "64px", height: "64px", display: "inline-block;" }}>
          <SpaceDetailImageCard imageUrl={image} onClick={handlerMoveScroll(idx)} key={image} />
        </div>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 64px;
  background: #fafafa;
  width: 100%;
  white-space: nowrap;

  & div:not(:first-of-type) {
    margin-left: 16px;
  }
`;

export default SpaceDetailThumbnail;
