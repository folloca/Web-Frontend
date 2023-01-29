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
`;

export default Nickname;
