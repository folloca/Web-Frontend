import React from "react";
import styled from "styled-components";
import { font } from "../config/style/fontTheme";

function SpaceSummary() {
  const tags = ["창고컨셉", "공간리폼가능", "팝업"];
  return (
    <Wrapper>
      <Title>
        <BlueColorText>연희동네창고</BlueColorText> 공간 대해 더 자세히 알려드릴게요
      </Title>
      <Subject>
        <BlueColorText>“창고/지하실 컨셉과 잘 어울릴 수 있는 팝업 브랜드”</BlueColorText>
      </Subject>
      <Table>
        <tr>
          <td className="col">면적</td>
          <td>150 ㎡</td>
        </tr>
        <tr>
          <td className="col">인원</td>
          <td>최대 20명 인원 추가 시 협의</td>
        </tr>
        <tr>
          <td className="col">가격</td>
          <td>월 80만원 - 120만원</td>
        </tr>
      </Table>
      <Tags>
        {tags.map((tag) => (
          <div>{tag}</div>
        ))}
      </Tags>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 24px 24px 36px 24px;
`;

const BlueColorText = styled.span`
  color: #047fff;
`;

const Title = styled.div`
  ${font.spoqaHanSansNeo.medium.heading}
`;

const Subject = styled.div`
  margin: 16px 0 24px 0;
`;

const Table = styled.table`
  margin-bottom: 24px;
  ${font.spoqaHanSansNeo.regular.paragraph["2"]};

  & .col {
    width: 46px;
    ${font.spoqaHanSansNeo.regular.paragraph["2"]};
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  & > div {
    border: 1px solid #047fff;
    padding: 7px 8px;
    ${font.spoqaHanSansNeo.medium.paragraph["3"]};
  }
`;

export default SpaceSummary;
