import type { NextPage } from "next";
import styled from "styled-components";
import Input from "../../src/components/Input";
import Logo from "../../public/assets/Logo.svg";
import Image from "next/image";
import UserLayout from "../../src/components/UserLayout";
const Signin: NextPage = () => {
  return (
    <UserLayout title={"함께 만들어가는 공간 기획 플랫폼"}>
      <Input placeholder={"아이디(이메일)를 입력해주세요"} />
    </UserLayout>
  );
};

export default Signin;
