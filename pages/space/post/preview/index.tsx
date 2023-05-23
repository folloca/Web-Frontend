import React, { useMemo } from "react";
import SpaceDetail from "../../../../src/components/SpaceDetail";
import { usePostInputs } from "../../../../src/states/usePostInputs";
import { useRouter } from "next/router";

function SpacePreview() {
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
    price,
    personnel,
    area,
    today,
  } = usePostInputs();

  const validateRequireValue = useMemo(() => {
    return subject === "" || spaceName === "" || mainSubject === "" || spaceType === undefined || tags.length <= 0;
  }, [subject, spaceName, mainSubject, spaceType, tags]);

  const handlerPostSpace = () => {
    console.log(
      "working",
      tags,
      spaceName,
      mainSubject,
      spaceType,
      subject,
      description,
      dueDate,
      images,
      price,
      personnel,
      area,
      today,
    );
  };

  const handlerBackSpacePost = () => {
    router.back();
  };

  return (
    <SpaceDetail
      handlerPostSpace={handlerPostSpace}
      handlerCloseDetail={handlerBackSpacePost}
      disabled={validateRequireValue}
      subject={subject || ""}
      mainSubject={mainSubject || ""}
      spaceName={spaceName || ""}
      personnel={personnel || ""}
      area={area || ""}
      price={price || ""}
      dueDate={dueDate || today}
      tags={tags}
      description={description}
      spaceType={spaceType}
      images={images}
    />
  );
}

export default SpacePreview;
