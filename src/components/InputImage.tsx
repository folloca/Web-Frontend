import React, { ChangeEvent, useRef } from "react";
import InputPlus from "../../public/assets/InputPlus.svg";
import styled from "styled-components";

interface IInputImage {
  handlerClickInput: (inputRef: HTMLInputElement) => void;
  handleFileChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  multiple?: boolean;
}

// const handlerClickInput = (inputRef: HTMLInputElement) => {
//   if (inputRef.current === null) return;
//   inputRef.current.click();
// };
function InputImage({ handlerClickInput, handleFileChange = () => {}, multiple }: IInputImage) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Wrapper
      onClick={() => {
        if (inputRef.current === null) return;

        handlerClickInput(inputRef.current);
      }}
    >
      <InputPlus />
      <input onChange={handleFileChange} multiple={multiple} accept="image/*" type="file" ref={inputRef} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 144px;
  height: 144px;
  background: #fafafa;
  border: 1.5px solid #047fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & input {
    display: none;
  }
`;

export default InputImage;
