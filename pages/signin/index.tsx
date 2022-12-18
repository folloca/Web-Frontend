import type { NextPage } from "next";
import styled from "styled-components";
import Input from "../../src/components/Input";
import UserLayout from "../../src/components/UserLayout";
import Button from "../../src/components/Button";
import RoundCheckBox from "../../src/components/RoundCheckBox";
import CustomLink from "../../src/components/CustomLink";
import { theme } from "../../src/config/style/theme";

const Signin: NextPage = () => {
  return (
    <UserLayout title={"함께 만들어가는 공간 기획 플랫폼"}>
      <LoginWrapper>
        <Input width={"418px"} placeholder={"아이디(이메일)를 입력해주세요"} />
        <Input width={"418px"} placeholder={"비밀번호를 입력해주세요"} />
        <Button contents={"로그인"} />
      </LoginWrapper>
      <Wrapper>
        <span className={"check__wrapper"}>
          <RoundCheckBox />
          <span className={"text"}>자동 로그인</span>
        </span>
        <CustomLink url={"/findpw"} text={"비밀번호 찾기"} className={"text"} />
      </Wrapper>
      <DividerWrapper>
        <hr className={"divider"} />
        <span>or</span>
        <hr className={"divider"} />
      </DividerWrapper>
      <SocialLoginWrapper>
        <button>카카오로 로그인</button>
        <button>구글로 로그인</button>
        <span className={"large_text"}>혹시 오늘 폴로카가 처음이신가요?</span>
        <CustomLink url={"/singup"} text={"회원가입 하러가기 ->"} className={"link"} />
      </SocialLoginWrapper>
    </UserLayout>
  );
};

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 16px;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;

  .text {
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.color.neutral[300]};
  }

  .check__wrapper {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

const DividerWrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: ${({ theme }) => theme.color.primary[400]};
  margin-top: 41px;

  hr {
    width: 100%;
    border: 1px solid ${({ theme }) => theme.color.primary[400]};
  }
`;

const SocialLoginWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;

  button {
    :first-child {
      margin-bottom: 16px;
    }
  }

  .large_text {
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 0.01em;
    color: #000000;
    margin-top: 32px;
  }

  .link {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.color.primary[400]};
    margin-top: 8px;
  }
`;

export default Signin;
