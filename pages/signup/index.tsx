import type { NextPage } from "next";
import styled from "styled-components";
import Input from "../../src/components/Input";
import UserLayout from "../../src/components/UserLayout";
import Button from "../../src/components/Button";
import LargeRoundCheckBox from "../../src/components/LargeRoundCheckBox";
import CustomLink from "../../src/components/CustomLink";
import { theme } from "../../src/config/style/theme";
import React from "react";

const SignUp: NextPage = () => {
  const [isSend, setIsSend] = React.useState(false);
  const [isVerify, setIsVerify] = React.useState(false);
  const [authenticationNum, setAuthenticationNum] = React.useState("");
  const [isToggleOpen, setIsToggleOpen] = React.useState(false);
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
          <div className={"check_box"}>
            <LargeRoundCheckBox />
            <span className={"small_text"}>
              <span className={"green_text"}>(필수)</span> 만 14세 이상입니다
            </span>
          </div>
          <div className={"check_box"}>
            <LargeRoundCheckBox />
            <span className={"small_text"}>
              <span className={"green_text"}>(필수)</span> 서비스 이용약관에 동의
            </span>
            <span className={"gray_text"} onClick={() => setIsToggleOpen(!isToggleOpen)}>
              {isToggleOpen ? "접기" : "보기"}
            </span>
          </div>
          {isToggleOpen && (
            <div className={"toggle_box"}>
              총칙 <br /> <br />
              제1조 [목적] <br />
              가진 용감하고 없으면 모래뿐일 할지니, 설레는 같은 풀이 싶이 봄바람이다. 낙원을 것이 있 뜨고, 곳으로
              봄바람이다. 귀는 같이, 위하여서, 같지 얼마나 힘차게 피에 사막이다. 얼마나 새 얼음이 고행을 목숨을 대한
              이것이야말로 있는가? 같으며, 이는 거친 있는가? 사랑의 품었기 싹이 뿐이다. 능히 청춘의 든 같은 얼음 예가
              피고 있음으로써 소금이라 끓는다. 그들에게 피고, 끓는 그들은 웅대한 봄바람을 거선의 무엇이 바. 제2조 [정의]
              이 페이지는 서비스 이용약관 관련 내용입니다.
            </div>
          )}
          <div className={"check_box"}>
            <LargeRoundCheckBox />
            <span className={"small_text"}>
              <span className={"green_text"}>(필수)</span> 회원정보 수집 및 이용에 동의
            </span>
            <span className={"gray_text"}>보기</span>
          </div>
          <div className={"check_box"}>
            <LargeRoundCheckBox />
            <span className={"small_text"}>
              <span className={"green_text"}>(필수)</span> 콘테츠 저작권 동의
            </span>
            <span className={"gray_text"}>보기</span>
          </div>
          <div className={"check_box"}>
            <LargeRoundCheckBox />
            <span className={"small_text"}>(선택) 마케팅 정보 수신 동의</span>
            <span className={"gray_text"}>보기</span>
          </div>
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

  .green_text {
    color: ${({ theme }) => theme.color.secondary.GREEN};
  }

  .gray_text {
    cursor: pointer;
    font-size: 14px;
    color: ${({ theme }) => theme.color.neutral[300]};
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

  .toggle_box {
    width: 100%;
    height: 124px;
    padding: 16px;
    overflow-y: scroll;
    background-color: ${({ theme }) => theme.color.neutral[50]};
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: ${({ theme }) => theme.color.shades[100]};

    -ms-overflow-style: none;
  }

  .toggle_box::-webkit-scrollbar {
    display: none;
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
