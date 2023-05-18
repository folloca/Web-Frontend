import React, { useCallback, useLayoutEffect, useMemo, useState } from "react";
import useBoolean from "../../../src/hooks/useBoolean";
import PostView from "./PostView";
import { TKey, usePostInputs } from "../../../src/states/usePostInputs";
import { useRouter } from "next/router";

export type TSpaceType = "팝업" | "전시" | undefined;

export interface IPostDialog {
  isOpen: boolean;
  title: string;
  contents: string;
  onClick: () => void;
  grayBtn: string | undefined;
  blueBtn: string;
}

function PostSpace() {
  const { value: isImageDone, setTrue: handlerImageDoneTrue } = useBoolean(false);
  const router = useRouter();

  const {
    tags,
    spaceName,
    mainSubject,
    spaceType,
    subject,
    description,
    dueDate,
    images,
    imgSrc,
    price,
    personnel,
    area,
    markers,
    today,
    setNewPostInputs,
  } = usePostInputs();

  const [postDialog, setPostDialog] = useState<IPostDialog>({
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

  useLayoutEffect(() => {
    const d = new Date().toLocaleDateString();
    const [year, month, day] = d.replaceAll(".", "").split(" ");
    const tempToday = `${year}-${Number(month) < 10 ? `0${month}` : month}-${Number(day) < 10 ? `0${day}` : day}`;
    setNewPostInputs("today", tempToday);
    setNewPostInputs("dueDate", tempToday);
  }, []);

  const handlerSetMarkers = (x: number, y: number) => {
    if (markers.length > 7) return;

    setNewPostInputs("markers", [...markers, [x, y]]);
  };

  const handlerResetMarkers = () => {
    setNewPostInputs("markers", []);
  };

  const handlerDeleteMarker = (x: number, y: number) => {
    setNewPostInputs(
      "markers",
      markers.filter((position) => {
        return position[0] !== x && position[1] !== y;
      }),
    );
  };

  const handlerAddTag = (tag: string) => {
    setNewPostInputs("tags", [...tags, tag]);
  };

  const handlerSetImages = (image: string) => {
    setNewPostInputs("images", [...tags, image]);
  };

  const handlerDeleteImages = (deleteImage: string) => {
    setNewPostInputs(
      "images",
      images.filter((i) => i !== deleteImage),
    );
  };

  const handlerDeleteTag = (tag: string) => {
    const newTags = tags.filter((t) => t !== tag);
    setNewPostInputs("tags", newTags);
  };

  const handlerSelectSpaceType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPostInputs("spaceType", e.target.value as TSpaceType);
  };

  const validateRequireValue = useMemo(() => {
    return subject === "" || spaceName === "" || mainSubject === "" || spaceType === undefined || tags.length <= 0;
  }, [subject, spaceName, mainSubject, spaceType, tags]);

  const handlerOpenDialog = () => {
    setPostDialog((prev) => ({ ...prev, isOpen: true }));
  };

  const handlerResetImg = () => {
    setNewPostInputs("imgSrc", undefined);
  };

  const handlerSetImg = (newSrc: string) => {
    setNewPostInputs("imgSrc", newSrc);
  };

  const handlerSetInputs = useCallback(
    (key: TKey) => (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
      setNewPostInputs(key, e.target.value),
    [],
  );

  const handlerCheckPreview = () => {
    router.push("/space/post/preview");
  };

  const handlerPushSpace = () => {
    router.push("/space");
  };

  return (
    <PostView
      postDialog={postDialog}
      price={price || ""}
      area={area || ""}
      personnel={personnel || ""}
      tags={tags}
      markers={markers}
      handlerDeleteMarker={handlerDeleteMarker}
      handlerResetMarkers={handlerResetMarkers}
      handlerSetMarkers={handlerSetMarkers}
      handlerSetImages={handlerSetImages}
      handlerImageDoneTrue={handlerImageDoneTrue}
      setReset={handlerResetImg}
      handlerAddTag={handlerAddTag}
      handlerSetSubject={handlerSetInputs("subject")}
      handlerSetPersonnel={handlerSetInputs("personnel")}
      handlerDeleteImages={handlerDeleteImages}
      handlerDeleteTag={handlerDeleteTag}
      handlerOpenDialog={handlerOpenDialog}
      handlerCheckPreview={handlerCheckPreview}
      mainSubject={mainSubject || ""}
      setImgSrc={handlerSetImg}
      subject={subject || ""}
      spaceName={spaceName || ""}
      spaceType={spaceType}
      handlerSelectSpaceType={handlerSelectSpaceType}
      handlerSetArea={handlerSetInputs("area")}
      handlerSetDescription={handlerSetInputs("description")}
      handlerSetDueDate={handlerSetInputs("dueDate")}
      handlerSetMainSubject={handlerSetInputs("mainSubject")}
      handlerSetPrice={handlerSetInputs("price")}
      handlerSetSpaceName={handlerSetInputs("spaceName")}
      isImageDone={isImageDone}
      images={images}
      imgSrc={imgSrc}
      validateRequireValue={validateRequireValue}
      description={description || ""}
      dueDate={dueDate || ""}
      today={today}
      handlerPushSpace={handlerPushSpace}
    />
  );
}

export default PostSpace;
