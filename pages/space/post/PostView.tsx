import React, { ChangeEvent } from "react";
import DirectionButton from "../../../public/assets/DirectionButton.svg";
import PostTitle from "../../../src/components/PostTitle";
import PostInput from "../../../src/components/PostInput";
import PostImages from "../../../src/components/PostImages";
import PostText from "../../../src/components/PostText";
import SpacePostToggle from "../../../src/components/SpacePostToggle";
import SpacePostTags from "../../../src/components/SpacePostTags";
import SpacePostDueDate from "../../../src/components/SpacePostDueDate";
import PostFloorPlan from "../../../src/components/PostFloorPlan";
import Button from "../../../src/components/Button";
import FloorPlanDialog from "../../../src/components/FloorPlanDialog";
import FloorPlan from "../../../src/components/FloorPlan";
import Dialog from "../../../src/components/common/Dialog";
import styled from "styled-components";
import { font } from "../../../src/config/style/fontTheme";
import { IPostDialog, TSpaceType } from "./index";

interface IPostView {
  spaceName: string;
  mainSubject: string;
  subject: string;
  area: string;
  personnel: string;
  price: string;
  images: string[];
  description: string;
  tags: string[];
  spaceType: TSpaceType;
  dueDate: string;
  today: string;
  imgSrc: string | undefined;
  isImageDone: boolean;
  markers: number[][];
  postDialog: IPostDialog;
  handlerSetSubject: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handlerSetArea: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handlerSetPersonnel: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handlerSetPrice: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handlerSetImages: (image: string) => void;
  handlerDeleteImages: (deleteImage: string) => void;
  handlerSetDescription: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handlerAddTag: (tag: string) => void;
  handlerDeleteTag: (tag: string) => void;
  handlerSetDueDate: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  setImgSrc: (newStr: string) => void;
  handlerSetSpaceName: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handlerSetMainSubject: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  validateRequireValue: boolean;
  handlerOpenDialog: () => void;
  handlerResetMarkers: () => void;
  handlerSetMarkers: (x: number, y: number) => void;
  handlerDeleteMarker: (x: number, y: number) => void;
  handlerImageDoneTrue: () => void;
  handlerSelectSpaceType: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setReset: () => void;
  handlerCheckPreview: () => void;
  handlerPushSpace: () => void;
}

function PostView({
  spaceName,
  setImgSrc,
  setReset,
  tags,
  spaceType,
  dueDate,
  imgSrc,
  today,
  isImageDone,
  markers,
  validateRequireValue,
  postDialog,
  mainSubject,
  subject,
  area,
  images,
  price,
  personnel,
  description,
  handlerSetPersonnel,
  handlerSetDescription,
  handlerDeleteImages,
  handlerSetImages,
  handlerSetSubject,
  handlerSetArea,
  handlerSetMainSubject,
  handlerSetSpaceName,
  handlerSetPrice,
  handlerSelectSpaceType,
  handlerResetMarkers,
  handlerOpenDialog,
  handlerSetDueDate,
  handlerAddTag,
  handlerDeleteTag,
  handlerSetMarkers,
  handlerDeleteMarker,
  handlerImageDoneTrue,
  handlerPushSpace,
  handlerCheckPreview,
}: IPostView) {
  return (
    <Wrapper>
      <SpacePostHeader>
        <DirectionButton onClick={handlerPushSpace} />
        공간 등록
      </SpacePostHeader>
      <SpacePostContents>
        <div className="first-content">
          <div className="title small-margin-bottom">
            <PostTitle
              text="제목"
              require
              subString="작성된 제목은 게시글에 표시되어요. 예시) #여름바이브 #즐거운다락방"
            />
            <div>
              <PostInput
                placeholder="#공간의 이름을 작성해주세요. (8자)"
                value={spaceName}
                onChange={handlerSetSpaceName}
                maxLength={8}
              />
            </div>
            <div>
              <PostInput
                placeholder="#원하는 주제를 간략하게 표현해주세요. (5자)"
                value={subject}
                onChange={handlerSetSubject}
                maxLength={5}
              />
            </div>
          </div>

          <div className="small-margin-bottom">
            <PostTitle text="주제" require />
            <div>
              <PostInput
                placeholder="공간 기획을 통해 실현하고자 하는 주제를 작성해주세요. (30자)"
                value={mainSubject}
                onChange={handlerSetMainSubject}
                maxLength={30}
              />
            </div>
          </div>

          <div className="title small-margin-bottom">
            <PostTitle text="세부정보" />
            <div>
              <PostInput placeholder="면적 ㎡ " value={area} type="number" step={0.01} onChange={handlerSetArea} />
            </div>
            <div>
              <PostInput
                placeholder="인원 (최대 수용 가능 인원)"
                value={personnel}
                type="number"
                onChange={handlerSetPersonnel}
              />
            </div>
            <div>
              <PostInput placeholder="가격" value={price} type="number" onChange={handlerSetPrice} />
            </div>
          </div>

          <div style={{ marginBottom: "40px" }}>
            <PostImages images={images} handlerSetImages={handlerSetImages} handlerDeleteImages={handlerDeleteImages} />
          </div>

          <div className="small-margin-bottom">
            <PostTitle text="자유로운 한마디" require />
            <div>
              <PostText
                placeholder="공간을 기획하는 분께 전하고 싶은 점을 작성해주세요. (120자)&#10;예시) 공간의 형태와 어울리는 조형물을 함께 제안해주시기를 부탁드려요."
                maxLength={120}
                value={description}
                onChange={handlerSetDescription}
              />
            </div>
          </div>
        </div>
        <div className="second-content">
          <SpacePostToggle handlerSelectSpaceType={handlerSelectSpaceType} />
          <SpacePostTags
            tags={tags}
            spaceType={spaceType}
            handlerAddTag={handlerAddTag}
            handlerDeleteTag={handlerDeleteTag}
          />
          <SpacePostDueDate dueDate={dueDate || ""} handlerSetDueDate={handlerSetDueDate} today={today} />
          <PostFloorPlan imgSrc={imgSrc} setImgSrc={setImgSrc} isImageDone={isImageDone} markers={markers} />
          <ButtonsWrapper>
            <Button
              contents="미리보기"
              padding="16px 32px"
              borderRadius="4px"
              color="#ffffff"
              fontColor="#828282"
              borderColor="#828282"
              height="56px"
              width="112px"
              onClick={handlerCheckPreview}
            />
            <Button
              contents="등록"
              padding="16px 32px"
              borderRadius="4px"
              height="56px"
              width="112px"
              disabled={validateRequireValue}
              onClick={handlerOpenDialog}
            />
          </ButtonsWrapper>
        </div>
      </SpacePostContents>
      {imgSrc !== undefined && !isImageDone && (
        <FloorPlanDialog setReset={setReset} handlerResetMarkers={handlerResetMarkers}>
          <FloorPlan
            imgSrc={imgSrc}
            markers={markers}
            handlerSetMarkers={handlerSetMarkers}
            handlerDeleteMarker={handlerDeleteMarker}
            handlerImageDoneTrue={handlerImageDoneTrue}
          />
        </FloorPlanDialog>
      )}
      {postDialog.isOpen && (
        <Dialog
          title={postDialog.title}
          contents={postDialog.contents}
          onClick={postDialog.onClick}
          grayBtn={postDialog.grayBtn}
          blueBtn={postDialog.blueBtn}
        />
      )}
      {/*<SpaceDetail*/}
      {/*  isOpenDetail={isOpenDetail}*/}
      {/*  handlerOpenDialog={handlerOpenDialog}*/}
      {/*  handlerCloseDetail={handlerCloseDetail}*/}
      {/*  disabled={validateRequireValue}*/}
      {/*  subject={subject || ""}*/}
      {/*  mainSubject={mainSubject || ""}*/}
      {/*  spaceName={spaceName || ""}*/}
      {/*  personnel={personnel || ""}*/}
      {/*  area={area || ""}*/}
      {/*  price={price || ""}*/}
      {/*  dueDate={dueDate || today}*/}
      {/*  tags={tags}*/}
      {/*/>*/}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 0 70px 58px 70px;
`;
const SpacePostHeader = styled.div`
  ${font.spoqaHanSansNeo.medium.heading};
  color: #000000;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 24px;

  & svg {
    cursor: pointer;
  }
`;
const SpacePostContents = styled.div`
  display: flex;
  gap: 24px;

  & .first-content {
    flex: 1;

    .title > div:nth-child(even) {
      margin: 8px 0;
    }
  }

  & .second-content {
    flex: 1;

    & > * {
      margin-bottom: 40px;
    }
  }

  & .small-margin-bottom {
    margin-bottom: 24px;
  }

  ${({ theme }) => theme.device.tablet`
    flex-direction: column;
  `}
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 24px;
  justify-content: right;
`;

export default PostView;
