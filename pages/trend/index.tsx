import type { NextPage } from "next";
import styled from "styled-components";
import React from "react";
import CardContainer from "../../src/containers/CardContainer";
import BannerContainer from "../../src/containers/BannerContainer";
import GridTitle from "../../src/components/GridTitle";
import SpaceCard from "../../src/components/SpaceCard";

const Trend: NextPage = () => {
  return (
    <Wrapper>
      <section style={{ marginBottom: "24px" }}>
        <BannerContainer />
      </section>
      <article>
        <section>
          <GridTitle text={<div>지금 뜨는 기획</div>} padding={"8px 0 2px 16px"} />
          <CardContainer />
        </section>
        <section className={"popular"}>
          <GridTitle text={<div>지금 뜨는 공간</div>} padding={"8px 0 2px 16px"} />
          <Spaces>
            <SpaceCard />
            <SpaceCard />
            <SpaceCard />
            <SpaceCard />
            <SpaceCard />
            <SpaceCard />
            <SpaceCard />
          </Spaces>
        </section>
      </article>
    </Wrapper>
  );
};

const Spaces = styled.div`
  width: 417px;
  height: 176px;

  background: red;
`;

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

  .popular {
    width: 100%;

    ${({ theme }) => theme.device.mobile`
        margin-bottom: 108px;
  `}
  }

  ${({ theme }) => theme.device.mobile`
        padding: 0 24px;
  `}
`;

export default Trend;
