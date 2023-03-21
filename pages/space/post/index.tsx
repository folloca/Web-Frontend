import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { font } from "../../../src/config/style/fontTheme";
import DirectionButton from "../../../public/assets/DirectionButton.svg";
import PostTitle from "../../../src/components/PostTitle";
import PostInput from "../../../src/components/PostInput";
import PostText from "../../../src/components/PostText";
import PostImages from "../../../src/components/PostImages";
import SpacePostToggle from "../../../src/components/SpacePostToggle";
import SpacePostTags from "../../../src/components/SpacePostTags";
import useText from "../../../src/hooks/useText";
import SpacePostDueDate from "../../../src/components/SpacePostDueDate";
import PostFloorPlan from "../../../src/components/PostFloorPlan";
import FloorPlanDialog from "../../../src/components/FloorPlanDialog";
import useBoolean from "../../../src/hooks/useBoolean";
import FloorPlan from "../../../src/FloorPlan";
import Button from "../../../src/components/Button";
import Dialog from "../../../src/components/common/Dialog";
import SpaceDetail from "../../../src/components/SpaceDetail";

export type TSpaceType = "팝업" | "전시" | undefined;

function PostSpace() {
  const [tags, setTags] = useState<string[]>([]);
  const [spaceType, setSpaceType] = useState<TSpaceType>();
  const [images, setImages] = useState<string[]>([]);
  const [markers, setMarkers] = useState<number[][]>([]);
  const [postDialog, setPostDialog] = useState<{
    isOpen: boolean;
    title: string;
    contents: string;
    onClick: () => void;
    grayBtn: string | undefined;
    blueBtn: string;
  }>({
    isOpen: false,
    title: "CHECK AGAIN!",
    contents: "공간을 등록할까요?\n" + "수정할 내용이 없는지 한번 더 확인해주세요.",
    onClick: async () => {
      new Promise((res) => {
        setTimeout(() => {
          res("w");
        }, 10);
      }).then((data) => {
        setPostDialog((prev) => ({
          ...prev,
          title: "CONGRATULATION!",
          contents: "공간을 성공적으로 등록했어요.",
          onClick: () => {
            console.log("post done");
          },
          grayBtn: undefined,
          blueBtn: "등록하기",
        }));
      });
    },
    grayBtn: "취소",
    blueBtn: "등록하기",
  });

  const { value: subject, setNewValue: handlerSetSubject } = useText("");
  const { value: spaceName, setNewValue: handlerSetSpaceName } = useText("");
  const { value: mainSubject, setNewValue: handlerSetMainSubject } = useText("");
  const { value: area, setNewValue: handlerSetArea } = useText("");
  const { value: personnel, setNewValue: handlerSetPersonnel } = useText("");
  const { value: price, setNewValue: handlerSetPrice } = useText("");
  const { value: description, setNewValue: handlerSetDescription } = useText("");
  const { value: imgSrc, setNewText: setImgSrc, setReset } = useText(undefined);
  const { value: isOpenDetail, setTrue: handlerOpenDetail, setFalse: handlerCloseDetail } = useBoolean(false);
  const { value: isImageDone, setTrue: handlerImageDoneTrue } = useBoolean(false);

  const d = new Date();
  const year = d.toLocaleDateString().split("/")[2];
  const mon =
    Number(d.toLocaleDateString().split("/")[0]) < 10
      ? `0${d.toLocaleDateString().split("/")[0]}`
      : d.toLocaleDateString().split("/")[0];
  const day =
    Number(d.toLocaleDateString().split("/")[1]) < 10
      ? `0${d.toLocaleDateString().split("/")[1]}`
      : d.toLocaleDateString().split("/")[1];
  const today = `${year}-${mon}-${day}`;
  const { value: dueDate, setNewValue: handlerSetDueDate } = useText(today);

  const handlerSetMarkers = (x: number, y: number) => {
    if (markers.length > 7) return;

    setMarkers((prev) => [...prev, [x, y]]);
  };

  const handlerResetMarkers = () => {
    setMarkers([]);
  };

  const handlerDeleteMarker = (x: number, y: number) => {
    setMarkers((prev) =>
      prev.filter((position) => {
        return position[0] !== x && position[1] !== y;
      }),
    );
  };

  const handlerAddTag = (tag: string) => {
    setTags((prev) => [...prev, tag]);
  };

  const handlerSetImages = (image: string) => {
    setImages((prev) => [...prev, image]);
  };

  const handlerDeleteImages = (deleteImage: string) => {
    setImages((prev) => prev.filter((i) => i !== deleteImage));
  };

  const handlerDeleteTag = (tag: string) => {
    const newTags = tags.filter((t) => t !== tag);
    setTags(newTags);
  };

  const handlerSelectSpaceType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpaceType(e.target.value as TSpaceType);
  };

  const validateRequireValue = useMemo(() => {
    return subject === "" || spaceName === "" || mainSubject === "" || spaceType === undefined || tags.length <= 0;
  }, [subject, spaceName, mainSubject, spaceType, tags]);

  const handlerOpenDialog = () => {
    setPostDialog((prev) => ({ ...prev, isOpen: true }));
  };

  useEffect(() => {
    if (isOpenDetail) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isOpenDetail]);

  return (
    <Wrapper>
      <SpacePostHeader>
        <DirectionButton /> 공간 등록
      </SpacePostHeader>
      <SpacePostContents>
        <div className="first-content">
          <div className="title small-margin-bottom">
            <PostTitle
              text="제목"
              require={true}
              subString="작성된 제목은 게시글에 표시되어요. 예시) #여름바이브 #즐거운다락방"
            />
            <div>
              <PostInput
                placeholder="#원하는 주제를 간략하게 표현해주세요. (5자)"
                value={subject}
                onChange={handlerSetSubject}
                maxLength={5}
              />
            </div>
            <div>
              <PostInput
                placeholder="#공간의 이름을 작성해주세요. (8자)"
                value={spaceName}
                onChange={handlerSetSpaceName}
                maxLength={8}
              />
            </div>
          </div>

          <div className="small-margin-bottom">
            <PostTitle text="주제" require={true} />
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
            <PostTitle text="자유로운 한마디" require={true} />
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
              onClick={handlerOpenDetail}
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
      <SpaceDetail
        isOpenDetail={isOpenDetail}
        handlerOpenDialog={handlerOpenDialog}
        handlerCloseDetail={handlerCloseDetail}
        disabled={validateRequireValue}
        subject={subject || ""}
        spaceName={spaceName || ""}
      />
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

export default PostSpace;
