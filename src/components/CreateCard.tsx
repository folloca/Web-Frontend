import React from "react";
import styled from "styled-components";
import Plus from "../../public/assets/Plus.svg";

interface ICreateCard {
  text: string;
  onClick?: () => void;
}

function CreateCard({ text, onClick }: ICreateCard) {
  return (
    <Wrapper onClick={onClick}>
      <Plus />
      <p>{text}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 417px;
  min-height: 176px;
  padding: 24px;
  background: #fafafa;
  border: 1px solid #047fff;
  border-radius: 4px;
  display: flex;

  cursor: pointer;

  & p {
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    white-space: pre-wrap;
  }
`;

export default CreateCard;
