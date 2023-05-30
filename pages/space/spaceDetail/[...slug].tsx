import React from "react";
import { NextPage } from "next";
import SpaceDetail from "../../../src/components/SpaceDetail";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { fetchDummyDate } from "../../../src/apis/dummyApi";
import { TSpaceType } from "../post";

const SpaceDetailPage: NextPage = () => {
  const router = useRouter();
  const { isLoading, error, data } = useQuery("todos", () =>
    fetchDummyDate({
      tags: ["창고컨셉", "플리마켓"],
      spaceName: "연희동네창고",
      mainSubject: "창고/지하실 컨셉과 잘 어울릴 수 있는 팝업 브랜드",
      spaceType: "팝업",
      subject: "지하실컨셉",
      description:
        "연희동네창고의 이미지와 맞는 힙한 캐릭터 굿즈를 기획할 플래너를 구합니다!\n" +
        "공간은 마음대로 리폼 가능하나 매치 기간 이후엔 꼭 원상복구 해주세요.\n" +
        "내 공간처럼 깔끔하게 쓰시고 소통이 잘 되는 분이면 좋겠습니다.",
      dueDate: new Date(),
      images: [
        "https://i.dummyjson.com/data/products/12/1.jpg",
        "https://i.dummyjson.com/data/products/12/2.jpg",
        "https://i.dummyjson.com/data/products/12/3.png",
        "https://i.dummyjson.com/data/products/12/4.jpg",
      ],
      price: "120,000",
      personnel: "100명",
      area: "300",
      today: new Date(),
    }),
  );

  const handlerBackSpacePost = () => {
    router.back();
  };

  if (data === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <SpaceDetail
      handlerCloseDetail={handlerBackSpacePost}
      subject={data?.subject || ""}
      mainSubject={data?.mainSubject || ""}
      spaceName={data?.spaceName || ""}
      personnel={data?.personnel || ""}
      area={data?.area || ""}
      price={data?.price || ""}
      dueDate={"2023-05-23"}
      tags={data?.tags}
      description={data?.description}
      spaceType={data?.spaceType as TSpaceType}
      images={data?.images}
    />
  );
};

export default SpaceDetailPage;
