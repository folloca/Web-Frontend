import React from "react";
import styled from "styled-components";
import { font } from "../config/style/fontTheme";

interface ISpaceSummary {
  tags: string[];
  spaceName: string;
  mainSubject: string;
  personnel: string;
  area: string;
  price: string;
}

function SpaceSummary({ tags, spaceName, mainSubject, personnel, price, area }: ISpaceSummary) {
  return (
    <Wrapper>
      <Title>
        <BlueColorText>{spaceName}</BlueColorText> 공간 대해 더 자세히 알려드릴게요
      </Title>
      <Subject>
        <BlueColorText>{`"${mainSubject}"`}</BlueColorText>
      </Subject>
      <Table>
        <thead></thead>
        <tbody>
          <tr>
            <td className="col">면적</td>
            <td>{area} ㎡</td>
          </tr>
          <tr>
            <td className="col">인원</td>
            <td>{personnel}</td>
          </tr>
          <tr>
            <td className="col">가격</td>
            <td>{price}</td>
          </tr>
        </tbody>
      </Table>
      <Tags>
        {tags.map((tag, idx) => (
          <div key={`${tag}+${idx}`}>{tag}</div>
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
