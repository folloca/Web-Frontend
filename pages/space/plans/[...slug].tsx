import type { NextPage } from "next";
import { useRouter } from "next/router";
import styled from "styled-components";
import Select from "react-select";
import React from "react";
import Card from "../../../src/components/Card";
import CreateSpaceCard from "../../../src/components/CreateSpaceCard";

const options2 = [
  { value: "트렌드순", label: "트렌드순" },
  { value: "기획 참여순", label: "기획 참여순" },
  { value: "최신순", label: "최신순" },
  { value: "오래된순", label: "오래된순" },
];

const CardMockData = [
  {
    id: Math.random().toString(36).substring(2, 12),
    title: "노티드 X 상상마당",
    thumbnail: "/assets/CardInitailImage.png",
    description: "가구와 와플, 의외의 만남을 성수에서 만나보아요",
    tags: ["가구와와플조합", "데이트코스", "팝업"],
  },
  {
    id: Math.random().toString(36).substring(2, 12),
    title: "노티드 X 상상마당",
    thumbnail: "/assets/CardInitailImage.png",
    description: "가구와 와플, 의외의 만남을 성수에서 만나보아요",
    tags: ["가구와와플조합", "데이트코스", "팝업"],
  },
  {
    id: Math.random().toString(36).substring(2, 12),
    title: "노티드 X 상상마당",
    thumbnail: "/assets/CardInitailImage.png",
    description: "가구와 와플, 의외의 만남을 성수에서 만나보아요",
    tags: ["가구와와플조합", "데이트코스", "팝업"],
  },
  {
    id: Math.random().toString(36).substring(2, 12),
    title: "노티드 X 상상마당",
    thumbnail: "/assets/CardInitailImage.png",
    description: "가구와 와플, 의외의 만남을 성수에서 만나보아요",
    tags: ["가구와와플조합", "데이트코스", "팝업"],
  },
  {
    id: Math.random().toString(36).substring(2, 12),
    title: "노티드 X 상상마당",
    thumbnail: "/assets/CardInitailImage.png",
    description: "가구와 와플, 의외의 만남을 성수에서 만나보아요",
    tags: ["가구와와플조합", "데이트코스", "팝업"],
  },
];

const Plans: NextPage = () => {
  const router = useRouter();
  const queries = router.query.slug || "Loading";
  console.log(queries);

  if (queries === "Loading") {
    return <div>Loading</div>;
  }
  return (
    <Wrapper>
      <Grid>
        <div className="space-plans-title">
          {queries[0]} <span>상세정보</span>
          <div className="space-plans-status">
            <span className="space-status ongoing">진행중</span> | 7.14 마감 | 팝업
          </div>
        </div>

        <div className="space-filter-select-container">
          <div style={{ width: "120px" }}>
            <Select menuPlacement="auto" menuPosition="fixed" options={options2} defaultValue={options2[0]} />
          </div>
        </div>
      </Grid>
      <SpacePlans>
        <CreateSpaceCard />
        {CardMockData.map((data) => (
          <Card
            id={data.id}
            title={data.title}
            thumbnail={data.thumbnail}
            description={data.description}
            tags={data.tags}
            key={data.id}
          />
        ))}
      </SpacePlans>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding: 0 70px;

  & .space-plans-title {
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 40px;

    span {
      font-family: "Spoqa Han Sans Neo";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
    }
  }

  & .space-plans-status {
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #c5c5c5;

    .space-status.ongoing {
      color: #047fff;
    }
  }
`;

const Grid = styled.div`
  border: solid #000000;
  border-width: 1px 0 0 1px;
  display: flex;
  justify-content: space-between;
  padding: 8px 0 0 16px;

  & .space-filter-select-container {
    display: flex;
    gap: 24px;
  }
`;

const SpacePlans = styled.section`
  margin-top: 40px;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  ${({ theme }) => theme.device.tablet`
        grid-template-columns: repeat(2, 1fr);
  `}

  ${({ theme }) => theme.device.mobile`
        grid-template-columns: repeat(1, 1fr);
  `}
`;

export default Plans;
