import type { NextPage } from "next";
import BannerContainer from "../../src/containers/BannerContainer";
import React from "react";
import GridTitle from "../../src/components/GridTitle";
import styled from "styled-components";
import CreateSpaceCard from "../../src/components/CreateSpaceCard";
import SpaceCard from "../../src/components/SpaceCard";

const Space: NextPage = () => {
  return (
    <Wrapper>
      <HeadSection>
        <div className="space-banner-container">
          <BannerContainer />
        </div>
        <div className="space-prev-event">
          <GridTitle text={<div>지난 이벤트</div>} padding={"8px 0 2px 16px"} height={"100%"} />
        </div>
      </HeadSection>
      <Grid>
        <div>플로카에 참여한 공간</div>
      </Grid>
      <SpaceSection>
        <CreateSpaceCard />
        <SpaceCard />
        <SpaceCard />
        <SpaceCard />
        <SpaceCard />
        <SpaceCard />
        <SpaceCard />
        <SpaceCard />
        <SpaceCard />
        <SpaceCard />
        <SpaceCard />
        <SpaceCard />
        <SpaceCard />
      </SpaceSection>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding: 0 70px;
`;

const HeadSection = styled("div")`
  display: flex;
  width: 100%;
  gap: 24px;
  margin-bottom: 24px;

  .space-banner-container {
    flex: 2;
  }

  .space-prev-event {
    flex: 1;
  }
`;

const Grid = styled.div`
  border: solid #000000;
  border-width: 1px 0 0 1px;
  display: flex;
  justify-content: space-between;
  padding: 8px 0 0 16px;

  & .space-filter-select-container {
    select {
      margin-left: 24px;
    }
  }
`;

const SpaceSection = styled.section`
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

export default Space;
