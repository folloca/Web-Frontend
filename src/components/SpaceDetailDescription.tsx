import React from "react";
import styled from "styled-components";
import XIcon from "../../public/assets/Cross.svg";
import { font } from "../config/style/fontTheme";

function SpaceDetailDescription() {
  return (
    <Wrapper>
      <Title>
        <XIcon />
        현재 공간에 제안할 기획이 있나요?
      </Title>
      <Description>
        <AvatarWrapper>
          <MockImage />
          공간적 필더
        </AvatarWrapper>
        <div>
          연희동네창고의 이미지와 맞는 힙한 캐릭터 굿즈를 기획할 플래너를 구합니다! 공간은 마음대로 리폼 가능하나 매치
          기간 이후엔 꼭 원상복구 해주세요. 내 공간처럼 깔끔하게 쓰시고 소통이 잘 되는 분이면 좋겠습니다.
        </div>
      </Description>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 46px;
`;

const Title = styled.div`
  ${font.spoqaHanSansNeo.medium.heading}
  & > path {
    transform: rotate(45deg);
  }
`;

const Description = styled.div`
  padding: 24px 24px 0;
  border-width: 1px 0px 0px 1px;
  border-style: solid;
  border-color: #000000;
  height: 100%;
  ${font.spoqaHanSansNeo.regular.paragraph["2"]};
`;

const MockImage = styled.div`
  width: 40px;
  height: 40px;
  background: red;
`;

const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
  ${font.spoqaHanSansNeo.medium.paragraph["3"]};
`;

export default SpaceDetailDescription;
