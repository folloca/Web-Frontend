import type { NextPage } from "next";
import styled from "styled-components";
import Input from "../../src/components/Input";
import UserLayout from "../../src/components/UserLayout";
import Button from "../../src/components/Button";
import LargeRoundCheckBox from "../../src/components/LargeRoundCheckBox";
import CustomLink from "../../src/components/CustomLink";
import { theme } from "../../src/config/style/theme";
import React from "react";
import TOSItem from "../../src/components/TOSItem";
import { Tos } from "../../src/mock";

const SignUp: NextPage = () => {
  const [isSend, setIsSend] = React.useState(false);
  const [isVerify, setIsVerify] = React.useState(false);
  const [authenticationNum, setAuthenticationNum] = React.useState("");
  const handleVerify = () => {
    setIsSend(true);
  };

  return (
    <UserLayout title={"폴로카에 처음이신가요? 만나서 반가워요!"}>
      <InputContainer>
        <LabelWrapper>
          아이디<span className={"green_text"}>*</span>
          {isSend && isVerify && <span className={"isVerify"}>사용 가능한 아이디에요.</span>}
          {isSend && !isVerify && <span className={"isNotVerify"}>이미 사용된 아이디에요.</span>}
        </LabelWrapper>
        <div className={"box"}>
          <Input width={"302px"} placeholder={"아이디(이메일)를 입력해주세요"} readOnly={isSend} />
          <Button contents={"확인"} width={"100px"} onClick={handleVerify} />
        </div>
        <Input width={"418px"} placeholder={"인증번호를 입력해주세요"} value={authenticationNum} />
      </InputContainer>
      <VerifyContainer>
        {isSend && isVerify && <span className={"isVerify"}>이메일이 인증되었어요.</span>}
        {isSend && !isVerify && <span className={"isNotVerify"}>인증번호가 일치하지 않아요.</span>}
      </VerifyContainer>
      <InputContainer>
        <LabelWrapper>
          비밀번호<span className={"green_text"}>*</span>
          {isSend && isVerify && <span className={"isVerify"}>사용 가능한 비밀번호에요.</span>}
          {isSend && !isVerify && <span className={"isNotVerify"}>숫자, 영문, 특수문자 포함 8자 이상</span>}
        </LabelWrapper>
        <Input width={"418px"} placeholder={"비밀번호를 입력해주세요"} />
        <Input width={"418px"} placeholder={"비밀번호를 다시 입력해주세요"} />
      </InputContainer>
      <VerifyContainer>
        {isSend && isVerify && authenticationNum.length === 6 && (
          <span className={"isVerify"}>비밀번호가 일치해요.</span>
        )}
        {!isSend && !isVerify && authenticationNum.length === 6 && (
          <span className={"isNotVerify"}>비밀번호가 일치하지 않아요.</span>
        )}
      </VerifyContainer>
      <InputContainer>
        <span className={"label"}>
          이용약관동의<span className={"green_text"}>*</span>
        </span>
        <div className={"check_box"}>
          <LargeRoundCheckBox />
          <span className={"small_text"}>전체 동의</span>
        </div>
        <div className={"border_box"}>
          <TOSItem isNecessary={true} contents={"만 14세 이상입니다"} />
          <TOSItem isNecessary={true} contents={"서비스 이용약관에 동의"} isToggle={true} toggleContents={Tos} />
          <TOSItem isNecessary={true} contents={"회원정보 수집 및 이용에 동의"} isToggle={true} toggleContents={Tos} />
          <TOSItem isNecessary={true} contents={"콘텐츠 저작권 동의"} isToggle={true} toggleContents={Tos} />
          <TOSItem isNecessary={false} contents={"마케팅 정보 수신 동의"} isToggle={true} toggleContents={Tos} />
        </div>
      </InputContainer>
      <ButtonWrapper>
        <Button contents={"다음"} width={"418px"} color={theme.color.neutral[300]} />
      </ButtonWrapper>
    </UserLayout>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 16px;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: ${({ theme }) => theme.color.shades.BLACK};

  .label {
    font-size: 16px;
  }

  .small_text {
    flex-grow: 1;
    font-size: 14px;
  }

  .box {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 16px;
  }

  .check_box {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
  }

  .border_box {
    display: flex;
    flex-direction: column;
    width: 418px;
    padding: 16px;
    gap: 16px;
    border: 1px solid ${({ theme }) => theme.color.neutral[200]};
  }

  margin-bottom: 24px;
`;

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;

  .label {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: ${({ theme }) => theme.color.shades.BLACK};
  }

  .isVerify {
    margin-left: 8px;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: ${({ theme }) => theme.color.primary[400]};
  }

  .isNotVerify {
    margin-left: 8px;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: ${({ theme }) => theme.color.error};
  }
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

export default SignUp;
