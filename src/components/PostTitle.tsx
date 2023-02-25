import React from "react";
import styled from "styled-components";
import { font } from "../config/style/fontTheme";

interface IPostTitle {
  text: string;
  require?: boolean;
  subString?: string;
}

function PostTitle({ text, require, subString }: IPostTitle) {
  return (
    <Wrapper>
      {require && <RequireStatus>*</RequireStatus>}
      {text}
      {subString && <SubString>{subString}</SubString>}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${font.spoqaHanSansNeo.medium.paragraph[2]}
`;

const RequireStatus = styled.span`
  color: #00c1a0;
`;

const SubString = styled.span`
  color: #babbbc;
  ${font.spoqaHanSansNeo.medium.caption[1]}
  margin-left: 8px;
`;

export default PostTitle;
