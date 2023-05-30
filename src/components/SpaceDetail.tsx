import React from "react";
import styled from "styled-components";
import HeartImg from "../../public/assets/Heart.svg";
import ShareImg from "../../public/assets/Share.svg";
import { font } from "../config/style/fontTheme";
import Button from "./Button";
import DetailImages from "./DetailImages";
import SpaceDetailDescription from "./SpaceDetailDescription";
import SpaceSummary from "./SpaceSummary";
import { TSpaceType } from "../../pages/space/post";

interface ISpaceDetail {
  disabled?: boolean;
  handlerPostSpace?: () => void;
  handlerCloseDetail: () => void;
  dueDate: string;
  subject: string;
  spaceName: string;
  mainSubject: string;
  personnel: string;
  area: string;
  price: string;
  tags: string[];
  description: string;
  spaceType: TSpaceType;
  images: string[];
}

function SpaceDetail({
  disabled,
  handlerPostSpace,
  handlerCloseDetail,
  subject,
  spaceName,
  mainSubject,
  personnel,
  area,
  price,
  dueDate,
  tags,
  description,
  spaceType,
  images,
}: ISpaceDetail) {
  return (
    <Wrapper>
      <Grid>
        <DetailHeader>
          <div>
            <DetailTitleWrapper>
              <DetailTitle>
                {`${spaceName === "" ? "공간이름을 입력해주세요." : `#${spaceName}`}`}{" "}
                {`${subject === "" ? "공간 키워드를 입력해주세요." : `#${subject}`}`}
              </DetailTitle>
              <button onClick={handlerCloseDetail}>공간 상세정보 닫기</button>
            </DetailTitleWrapper>
            <StatusWrapper>
              <div>
                <span className="space-status ongoing">진행중</span>{" "}
                <span className="space-status grayStatus">
                  | {dueDate} 마감 | {spaceType}
                </span>
              </div>
              <ShareImg /> <HeartImg />
            </StatusWrapper>
          </div>
          <ButtonsWrapper>
            {handlerPostSpace !== undefined && (
              <>
                <Button
                  contents="수정"
                  padding="16px 32px"
                  borderRadius="4px"
                  color="#ffffff"
                  fontColor="#828282"
                  borderColor="#828282"
                  height="56px"
                  width="112px"
                  onClick={handlerCloseDetail}
                />
                <Button
                  contents="등록"
                  padding="16px 32px"
                  borderRadius="4px"
                  height="56px"
                  width="112px"
                  disabled={disabled}
                  onClick={handlerPostSpace}
                />
              </>
            )}
          </ButtonsWrapper>
        </DetailHeader>
        <DetailContents>
          <DetailImages images={images} />
          <SpaceDetailInfo>
            <SpaceSummary
              tags={tags}
              spaceName={spaceName}
              mainSubject={mainSubject}
              area={area}
              personnel={personnel}
              price={price}
            />
            <SpaceDetailDescription description={description} />
          </SpaceDetailInfo>
        </DetailContents>
      </Grid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: auto;
  min-height: 100%;
  overflow-x: hidden;
  background: #ffffff;
  padding-left: 70px;
`;

const Grid = styled.div`
  height: 100%;
  border-width: 1px 0 0 1px;
  border-style: solid;
  border-color: #000000;
`;

const DetailHeader = styled.div`
  padding: 24px 71px 0 24px;
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.device.tablet`
            padding: 16px 0px 0 16px;
  `}
`;

const DetailTitleWrapper = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 8px;

  & button {
    background: transparent;
    border-width: 0;
    padding: 0;
    display: flex;
    align-items: flex-end;
    cursor: pointer;
  }
`;

const DetailTitle = styled.div`
  ${font.spoqaHanSansNeo.medium.display[2]}
`;

const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  & .space-status.ongoing {
    ${font.spoqaHanSansNeo.medium.paragraph[2]}
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 24px;
  justify-content: right;
`;

const DetailContents = styled.div`
  overflow: hidden;
  overflow-x: auto;
  height: calc(100% - 128px);
  ${({ theme }) => theme.device.tablet`
        padding-bottom: 100px;
  `}
`;

const SpaceDetailInfo = styled.div`
  display: flex;

  & > div {
    flex: 1;
  }

  ${({ theme }) => theme.device.tablet`
        display: block;
  `}
`;

export default SpaceDetail;
