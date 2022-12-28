import type { NextPage } from "next";
import styled from "styled-components";
import Input from "../../src/components/Input";
import UserLayout from "../../src/components/UserLayout";
import Button from "../../src/components/Button";
import RoundCheckBox from "../../src/components/RoundCheckBox";
import CustomLink from "../../src/components/CustomLink";
import { theme } from "../../src/config/style/theme";
import React from "react";

const Welcome: NextPage = () => {
  const [isSend, setIsSend] = React.useState(false);
  const [isVerify, setIsVerify] = React.useState(false);
  const [authenticationNum, setAuthenticationNum] = React.useState("");

  const handleVerify = () => {
    setIsSend(true);
  };

  return (
    <UserLayout title={"반가워요, "} name={"성실한 김춐춐"}>
      <WelcomeWrapper>폴로카의 회원이 된걸 축하해요!</WelcomeWrapper>
      <ButtonWrapper>
        <Button contents={"확인"} width={"418px"} />
      </ButtonWrapper>
    </UserLayout>
  );
};

const WelcomeWrapper = styled.div`
  margin-top: 32px;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;

  margin-bottom: 48px;

  color: #000000;
`;

const ButtonWrapper = styled.div`
  margin-top: 172px;
`;

export default Welcome;
