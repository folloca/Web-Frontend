import type { NextPage } from "next";
import styled from "styled-components";
import React from "react";
import CardContainer from "../../src/containers/CardContainer";
import BannerContainer from "../../src/containers/BannerContainer";

const Trend: NextPage = () => {
  return (
    <Wrapper>
      <section>
        <BannerContainer />
      </section>
      <article>
        <section>
          <CardContainer />
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

  .popular {
    ${({ theme }) => theme.device.mobile`
        margin-bottom: 108px;
  `}
  }

  ${({ theme }) => theme.device.mobile`
        padding: 0 24px;
  `}
`;

export default Trend;
