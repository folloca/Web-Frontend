import React from "react";
import styled from "styled-components";
import Card from "../components/Card";

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

const CardContainer = ({ isToggleOpen = true }: { isToggleOpen?: boolean }) => {
  return (
    <Wrapper className="card__container">
      {CardMockData.slice(0, isToggleOpen ? CardMockData.length : 3).map((data) => (
        <Card
          id={data.id}
          title={data.title}
          thumbnail={data.thumbnail}
          description={data.description}
          tags={data.tags}
          key={data.id}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 24px;
  grid-row-gap: 48px;

  ${({ theme }) => theme.device.desktop`
        grid-template-columns: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 32px;
  `}
`;

export default React.memo(CardContainer);
