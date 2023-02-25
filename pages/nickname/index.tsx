import type { NextPage } from "next";
import styled from "styled-components";
import Input from "../../src/components/Input";
import UserLayout from "../../src/components/UserLayout";
import Button from "../../src/components/Button";
import RoundCheckBox from "../../src/components/RoundCheckBox";
import CustomLink from "../../src/components/CustomLink";
import { theme } from "../../src/config/style/theme";
import NicknameInput from "../../src/components/NicknameInput";

const Nickname: NextPage = () => {
  return (
    <UserLayout title={"폴로카에서 어떤 이름으로 활동하시겠어요?"}>
      <Wrapper>
        <NicknameInput placeholder={"닉네임을 입력해주세요"} />
        <Button contents={"확인"} />
        <div className="gray__text">나중에 개인설정 페이지에서 고칠 수 있어요.</div>
      </Wrapper>
    </UserLayout>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 16px;
  padding-top: 52px;

  .gray__text {
    margin-top: 25.25rem;
    margin-bottom: 5rem;

    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #747679;
  }
`;

export default Nickname;
