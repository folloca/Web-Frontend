import React from "react";
import styled from "styled-components";
import HeartImg from "../../public/assets/Heart.svg";
import ShareImg from "../../public/assets/Share.svg";
import { font } from "../config/style/fontTheme";
import Button from "./Button";
import DetailImages from "./DetailImages";

interface ISpaceDetail {
  isOpenDetail: boolean;
  disabled: boolean;
  handlerOpenDialog: () => void;
  handlerCloseDetail: () => void;

  subject: string;
  spaceName: string;
}

function SpaceDetail({
  isOpenDetail,
  disabled,
  handlerOpenDialog,
  handlerCloseDetail,
  subject,
  spaceName,
}: ISpaceDetail) {
  return (
    <Wrapper isOpenDetail={isOpenDetail}>
      <Grid>
        <DetailHeader>
          <div>
            <DetailTitleWrapper>
              <DetailTitle>
                {`${spaceName === "" ? "공간이름을 입력해주세요." : `#${spaceName}`}`}{" "}
                {`${subject === "" ? "주제를 입력해주세요." : `#${subject}`}`}
              </DetailTitle>
              <button onClick={handlerCloseDetail}>공간 상세정보 닫기</button>
            </DetailTitleWrapper>
            <StatusWrapper>
              <div>
                <span className="space-status ongoing">진행중</span>{" "}
                <span className="space-status grayStatus">| 10.18 마감 | 팝업</span>
              </div>
              <ShareImg /> <HeartImg />
            </StatusWrapper>
          </div>
          <ButtonsWrapper>
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
              onClick={handlerOpenDialog}
            />
          </ButtonsWrapper>
        </DetailHeader>
        <DetailContents>
          <DetailImages />
          <div>연희동네창고 공간에 대해 더 자세히 알려드릴게요</div>
        </DetailContents>
      </Grid>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ isOpenDetail: boolean }>`
  width: 100vw;
  height: calc(100vh - 80px);
  overflow-x: hidden;
  position: fixed;
  top: ${({ isOpenDetail }) => (isOpenDetail ? "80px" : "-100vh")};
  left: 0;
  background: #ffffff;
  padding-left: 70px;
  transition-duration: 1.5s;
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
  height: 128px;
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
  overflow-x: auto;
  height: calc(100% - 128px);
`;

export default SpaceDetail;
