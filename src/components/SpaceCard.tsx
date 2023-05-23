import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { font } from "../config/style/fontTheme";

function SpaceCard() {
  const router = useRouter();

  const handleMovePlan = React.useCallback(async () => {
    await router.push({
      pathname: "/space/plans/[...slug]",
      query: { slug: ["#핵심키워드 #공간이름은여기에", Math.random().toString(36).substring(2, 12)] },
    });
  }, []);
  return (
    <Wrapper>
      <TitleSection>
        <p onClick={handleMovePlan}>#핵심키워드 #공간이름은여기에</p>
        <div>
          <span className="space-status ongoing">진행중</span>{" "}
          <span className="space-status grayStatus">| 7.14 마감 | 팝업</span>
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
    ${font.spoqaHanSansNeo.medium.paragraph[1]}
    cursor: pointer;
  }

  .space-status.ongoing {
    ${font.spoqaHanSansNeo.medium.paragraph[2]}
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
