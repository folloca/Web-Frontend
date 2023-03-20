import React, { ChangeEvent } from "react";
import PostTitle from "./PostTitle";
import styled from "styled-components";
import { font } from "../config/style/fontTheme";
import ImageCard from "./ImageCard";
import InputImage from "./InputImage";

interface IPostImages {
  images: string[];
  handlerSetImages: (image: string) => void;
  handlerDeleteImages: (deleteImage: string) => void;
}

function PostImages({ images, handlerSetImages, handlerDeleteImages }: IPostImages) {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files as FileList);

    files.forEach((file: File) => {
      const reader = new FileReader();

      reader.onload = () => {
        handlerSetImages(reader.result as string);
      };
      if (images.length > 6) {
      } else {
        reader.readAsDataURL(file);
      }
    });
  };

  const handlerClickInput = (inputRef: HTMLInputElement) => {
    inputRef.click();
  };

  return (
    <>
      <PostTitle text="공간 이미지" />
      <SubString>공간을 잘 보여줄 수 있는 이미지를 등록해주세요. (최대 7장)</SubString>
      <InputImages>
        {images.map((image, idx) => (
          <ImageCard src={image} handlerDeleteImages={handlerDeleteImages} key={idx} />
        ))}
        <InputImage handlerClickInput={handlerClickInput} handleFileChange={handleFileChange} multiple={true} />
      </InputImages>
    </>
  );
}

const SubString = styled.div`
  color: #babbbc;
  ${font.spoqaHanSansNeo.regular.paragraph[2]}
  margin: 8px 0 16px;
`;

const InputImages = styled.div`
  display: flex;
  row-gap: 20px;
  column-gap: 24px;
  flex-wrap: wrap;
`;

export default PostImages;
