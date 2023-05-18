import React from "react";
import BannerContainer from "../../src/containers/BannerContainer";
import GridTitle from "../../src/components/GridTitle";
import Select from "react-select";
import CreateCard from "../../src/components/CreateCard";
import SpaceCard from "../../src/components/SpaceCard";
import styled from "styled-components";
import { ISpaceSort, ISpaceStatus } from "./index";

interface ISpaceView {
  spaceStatus: ISpaceStatus[];
  spaceSort: ISpaceSort[];
  handlerPushPostSpace: () => void;
}

function SpaceView({ spaceStatus, spaceSort, handlerPushPostSpace }: ISpaceView) {
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
        <div className="space-filter-select-container">
          <div style={{ width: "120px" }}>
            <Select menuPlacement="auto" menuPosition="fixed" options={spaceStatus} defaultValue={spaceStatus[0]} />
          </div>
          <div style={{ width: "120px" }}>
            <Select menuPlacement="auto" menuPosition="fixed" options={spaceSort} defaultValue={spaceSort[1]} />
          </div>
        </div>
      </Grid>
      <SpaceSection>
        <CreateCard
          onClick={handlerPushPostSpace}
          text={`나에게 꼭 맞는 기획을\n찾고있나요?\n\n공간을 등록해보세요.`}
        />
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
}

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
    display: flex;
    gap: 24px;
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

export default SpaceView;
