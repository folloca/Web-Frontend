import React from "react";
import styled from "styled-components";
import XIcon from "../../public/assets/Cross.svg";
import { font } from "../config/style/fontTheme";

interface ISpaceDetailDescription {
  description: string;
}

function SpaceDetailDescription({ description }: ISpaceDetailDescription) {
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
        <div>{description}</div>
      </Description>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 46px;
  ${({ theme }) => theme.device.tablet`
          margin-left: 24px;
  `}
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

  & div {
    white-space: pre-wrap;
  }

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
