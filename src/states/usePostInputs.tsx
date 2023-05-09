import create from "zustand";
import { TSpaceType } from "../../pages/space/post";

type TDate = string | string[] | TSpaceType | number[][] | undefined;

export type TKey =
  | "tags"
  | "spaceType"
  | "images"
  | "subject"
  | "spaceName"
  | "mainSubject"
  | "area"
  | "personnel"
  | "price"
  | "description"
  | "imgSrc"
  | "dueDate"
  | "markers"
  | "today";

interface IPostInputsStore {
  //ts를 사용하기때문에 타입지정이 필요
  tags: string[];
  spaceType: TSpaceType;
  images: string[];
  subject: string;
  spaceName: string;
  mainSubject: string;
  area: string;
  personnel: string;
  price: string;
  description: string;
  imgSrc: string | undefined;
  dueDate: string;
  markers: number[][];
  today: string;
  setNewPostInputs: (key: TKey, data: TDate) => void;
}

export const usePostInputs = create<IPostInputsStore>((set) => ({
  tags: [],
  spaceType: undefined,
  images: [],
  subject: "",
  spaceName: "",
  mainSubject: "",
  area: "",
  personnel: "",
  price: "",
  description: "",
  imgSrc: undefined,
  dueDate: "",
  markers: [],
  today: "",
  setNewPostInputs: (key: TKey, data: TDate) => set(() => ({ [key]: data })),
}));
