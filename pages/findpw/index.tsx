import type { NextPage } from "next";
import styled from "styled-components";
import Input from "../../src/components/Input";
import UserLayout from "../../src/components/UserLayout";
import Button from "../../src/components/Button";
import RoundCheckBox from "../../src/components/RoundCheckBox";
import CustomLink from "../../src/components/CustomLink";
import { theme } from "../../src/config/style/theme";
import React from "react";

const FindPw: NextPage = () => {
  const [isSend, setIsSend] = React.useState(false);
  const [isVerify, setIsVerify] = React.useState(false);
  const [authenticationNum, setAuthenticationNum] = React.useState("");

  const handleVerify = () => {
    setIsSend(true);
  };

  return (
    <UserLayout title={"비밀번호 찾기"}>
      <InputContainer>
        <span className={"label"}>아이디</span>
        <div className={"box"}>
          <Input width={"302px"} placeholder={"아이디(이메일)를 입력해주세요"} readOnly={isSend} />
          <Button contents={"확인"} width={"100px"} onClick={handleVerify} />
        </div>
        <Input width={"418px"} placeholder={"인증번호를 입력해주세요"} value={authenticationNum} />
      </InputContainer>
      <VerifyContainer>
        {isSend && isVerify && authenticationNum.length === 6 && (
          <span className={"isVerify"}>이메일이 인증되었어요.</span>
        )}
        {isSend && isVerify && authenticationNum.length === 6 && (
          <span className={"isNotVerify"}>인증번호가 일치하지 않아요.</span>
        )}
      </VerifyContainer>
      <InputContainer>
        <span className={"label"}>새로운 비밀번호</span>
        <Input width={"418px"} placeholder={"새로운 비밀번호를 입력해주세요"} />
      </InputContainer>
      <InputContainer>
        <span className={"label"}>비밀번호 확인</span>
        <Input width={"418px"} placeholder={"비밀번호를 다시 입력해주세요"} />
      </InputContainer>
      <ButtonWrapper>
        <Button contents={"확인"} width={"418px"} />
      </ButtonWrapper>
    </UserLayout>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 16px;

  .label {
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme }) => theme.color.shades.BLACK};
  }

  .box {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 16px;
  }

  margin-bottom: 24px;
`;

const VerifyContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  .isVerify {
    margin-top: -8px;
    color: ${({ theme }) => theme.color.primary[400]};
  }

  .isNotVerify {
    margin-top: -8px;
    color: ${({ theme }) => theme.color.error};
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 32px;
`;

export default FindPw;
