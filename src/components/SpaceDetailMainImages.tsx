import React from "react";
import SpaceDetailImageCard from "./SpaceDetailImageCard";
import styled from "styled-components";
import { TImages } from "./DetailImages";

interface ISpaceDetailMainImages {
  ImagesRef: React.RefObject<HTMLDivElement>;
  imagesUrl: TImages;
}

function SpaceDetailMainImages({ imagesUrl, ImagesRef }: ISpaceDetailMainImages) {
  return (
    <Wrapper ref={ImagesRef}>
      {imagesUrl.map((image, idx) => (
        <div style={{ width: "528px", height: "528px", display: "inline-block;" }} key={`${image}+${idx}`}>
          <SpaceDetailImageCard imageUrl={image} key={image} />
        </div>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 528px;
  transition-duration: 0.5s;
  width: 100%;
  white-space: nowrap;

  & div:not(:first-of-type) {
    margin-left: 24px;
  }
`;

export default SpaceDetailMainImages;
