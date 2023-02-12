import React from "react";
import styled from "styled-components";

function SpaceCard() {
  return (
    <Wrapper>
      <TitleSection>
        <p>#핵심키워드 #공간이름은여기에</p>
        <div>
          <span className="space-status ongoing">진행중</span> | 7.14 마감 | 팝업
        </div>
      </TitleSection>
      <ButtonSection>
        <button>제안하기</button>
      </ButtonSection>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #ffffff;
  padding: 24px;
  width: 417px;
  height: 176px;

  border: solid #c5c5c5;
  border-width: 1.3px 0 0 0;
`;

const TitleSection = styled.div`
  height: 50%;

  & p {
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
  }

  .space-status.ongoing {
    color: #047fff;
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }

  & div {
    color: #c5c5c5;
  }
`;
const ButtonSection = styled.div`
  height: 50%;
  float: right;

  & button {
    width: 105px;
    height: 40px;
    border-radius: 4px;
    border: 0;
    background: #fafafa;
    cursor: pointer;
  }
`;

export default SpaceCard;
