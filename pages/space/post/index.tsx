import React from "react";
import styled from "styled-components";
import { font } from "../../../src/config/style/fontTheme";
import DirectionButton from "../../../public/assets/DirectionButton.svg";
import PostTitle from "../../../src/components/PostTitle";
import PostInput from "../../../src/components/PostInput";

function PostSpace() {
  return (
    <Wrapper>
      <SpacePostHeader>
        <DirectionButton /> 공간 등록
      </SpacePostHeader>
      <SpacePostContents>
        <div className="first-content">
          <div className="title small-margin-bottom">
            <PostTitle
              text="제목"
              require={true}
              subString="작성된 제목은 게시글에 표시되어요. 예시) #여름바이브 #즐거운다락방"
            />
            <div>
              <PostInput placeholder="#원하는 주제를 간략하게 표현해주세요. (5자)" />
            </div>
            <div>
              <PostInput placeholder="#공간의 이름을 작성해주세요. (8자)" />
            </div>
          </div>

          <div className="small-margin-bottom">
            <PostTitle text="주제" require={true} />
            <div>
              <PostInput placeholder="공간 기획을 통해 실현하고자 하는 주제를 작성해주세요. (30자)" />
            </div>
          </div>

          <div className="title small-margin-bottom">
            <PostTitle text="세부정보" />
            <div>
              <PostInput placeholder="면적 ㎡ " />
            </div>
            <div>
              <PostInput placeholder="인원 (최대 수용 가능 인원)" />
            </div>
            <div>
              <PostInput placeholder="가격" />
            </div>
          </div>
        </div>
        <div className="second-content">t</div>
      </SpacePostContents>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 0 70px 58px 70px;
`;
const SpacePostHeader = styled.div`
  ${font.spoqaHanSansNeo.medium.heading};
  color: #000000;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 24px;
`;
const SpacePostContents = styled.div`
  display: flex;
  gap: 24px;

  & .first-content {
    flex: 1;

    .title > div:nth-child(even) {
      margin: 8px 0;
    }
  }

  & .second-content {
    flex: 1;
    background: blue;
  }

  & .small-margin-bottom {
    margin-bottom: 24px;
  }
`;

export default PostSpace;
