import React from "react";
import styled from "styled-components";
import Plus from "../../public/assets/Plus.svg";

function CreateSpaceCard() {
  return (
    <Wrapper>
      <Plus />
      <p>
        나에게 꼭 맞는 기획을 <br />
        찾고있나요?
        <br />
        <br />
        공간을 등록해보세요.
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 417px;
  height: 176px;
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
  }
`;

export default CreateSpaceCard;
