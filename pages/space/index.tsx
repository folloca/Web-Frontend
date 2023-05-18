import type { NextPage } from "next";
import React from "react";
import SpaceView from "./SpaceView";
import { useRouter } from "next/router";

type TSpaceStatus = "전체" | "진행" | "마감";

export interface ISpaceStatus {
  value: TSpaceStatus;
  label: TSpaceStatus;
}

type TSpaceSort = "트렌드순" | "기획 참여순" | "최신순" | "오래된순";

export interface ISpaceSort {
  value: TSpaceSort;
  label: TSpaceSort;
}

const Space: NextPage = () => {
  const router = useRouter();

  const options1: ISpaceStatus[] = [
    { value: "전체", label: "전체" },
    { value: "진행", label: "진행" },
    { value: "마감", label: "마감" },
  ];

  const options2: ISpaceSort[] = [
    { value: "트렌드순", label: "트렌드순" },
    { value: "기획 참여순", label: "기획 참여순" },
    { value: "최신순", label: "최신순" },
    { value: "오래된순", label: "오래된순" },
  ];

  const handlerPushPostSpace = () => {
    router.push("/space/post");
  };

  return <SpaceView handlerPushPostSpace={handlerPushPostSpace} spaceStatus={options1} spaceSort={options2} />;
};

export default Space;
