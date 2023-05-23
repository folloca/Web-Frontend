import React, { ChangeEvent } from "react";
import styled from "styled-components";
import PostTitle from "./PostTitle";
import { font } from "../config/style/fontTheme";
import InputImage from "./InputImage";
import FloorPlan from "../FloorPlan";
import InfoImg from "../../public/assets/Info.svg";

interface IPostFloorPlan {
  imgSrc: string | undefined;
  markers: number[][];
  setImgSrc: (newSrc: string) => void;
  isImageDone: boolean;
}

function PostFloorPlan({ imgSrc, setImgSrc, isImageDone, markers }: IPostFloorPlan) {
  const handlerSetFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];

    const reader = new FileReader();

    reader.onload = () => {
      setImgSrc(reader.result as string);
    };

    reader.readAsDataURL(file);
    e.target.value = "";
  };

  const handlerClickInput = (inputRef: HTMLInputElement) => {
    inputRef.click();
  };

  return (
    <Wrapper>
      <PostTitle text="평면도" />
      <SubString>
        사용범위를 파악할 수 있는 평면도를 등록할 수 있어요.
        <br />
        첨부 시 아래 등록 방법을 반드시 읽어주세요.
      </SubString>
      <FloorPlanWrapper>
        {isImageDone && imgSrc !== undefined ? (
          <div>
            <FloorPlan
              imgSrc={imgSrc}
              isInput={false}
              markers={markers}
              handlerImageClick={handlerClickInput}
              handlerSetFile={handlerSetFile}
            />
          </div>
        ) : (
          <InputImage handlerClickInput={handlerClickInput} handleFileChange={handlerSetFile} />
        )}
      </FloorPlanWrapper>
      <InfoWrapper>
        <InfoImg /> 평면도 등록 방법
      </InfoWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const SubString = styled.div`
  color: #babbbc;
  ${font.spoqaHanSansNeo.regular.paragraph[2]}
  margin: 8px 0 16px;
`;

const FloorPlanWrapper = styled.div`
  margin-bottom: 15px;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #047fff;
  ${font.spoqaHanSansNeo.medium.paragraph[3]};
`;

export default PostFloorPlan;
