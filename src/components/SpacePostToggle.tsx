import React from "react";
import PostTitle from "./PostTitle";
import styled from "styled-components";

interface ISpacePostToggle {
  handlerSelectSpaceType: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SpacePostToggle({ handlerSelectSpaceType }: ISpacePostToggle) {
  return (
    <Wrapper>
      <PostTitleWrapper>
        <PostTitle text="공간 유형" require={true} />
      </PostTitleWrapper>
      <RadiosWrapper>
        <label>
          <input onChange={handlerSelectSpaceType} value="팝업" type="radio" name="type_space" />
          팝업
        </label>
        <label>
          <input onChange={handlerSelectSpaceType} type="radio" name="type_space" value="전시" />
          전시
        </label>
      </RadiosWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const PostTitleWrapper = styled.div`
  margin-bottom: 8px;
`;

const RadiosWrapper = styled.div`
  display: flex;
  gap: 24px;

  input {
    display: none;
  }

  label {
    padding: 0;
    width: 80px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fafafa;
    color: #828282;
    border: 0.7px solid #828282;
  }

  label:has(input:checked) {
    background: #047fff;
    color: #ffffff;
  }
`;

export default SpacePostToggle;
