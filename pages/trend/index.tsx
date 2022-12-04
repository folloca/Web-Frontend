import type { NextPage } from "next";
import Card from "../../src/components/Card";
import styled from "styled-components";

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

const Trend: NextPage = () => {
  return (
    <Wrapper>
      <section>
        <div className={"banner"}>banner</div>
      </section>
      <article>
        <section>
          <CardContainer>
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
          </CardContainer>
        </section>
        <section className={"popular"}>인기공간</section>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding: 0 70px;

  article {
    display: flex;
    gap: 24px;

    ${({ theme }) => theme.device.tablet`
        gap: 16px;
  `}
    ${({ theme }) => theme.device.mobile`
        flex-direction: column;
        gap: 32px;
  `}
  }

  .banner {
    height: 320px;
  }

  .popular {
    ${({ theme }) => theme.device.mobile`
        margin-bottom: 108px;
  `}
  }

  ${({ theme }) => theme.device.mobile`
        padding: 0 24px;
  `}
`;

const CardContainer = styled.div`
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

export default Trend;
