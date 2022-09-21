import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Navigation from "./Navigation";
import CustomLink from "./CustomLink";
import MobileNavigation from "./MobileNavigation";

const Header = () => {
  return (
    <Wrapper>
      <Logo />
      <Navigation />
      <CustomLink className={"MobileAboutUS"} url={"/aboutus"}>
        ABOUT US
      </CustomLink>
      <MobileNavigation />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  height: 80px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 71px 0 65px;

  .MobileAboutUS {
    display: none;
  }

  ${({ theme }) => theme.device.tablet`
      padding: 0 50px 0 46px;

  `}

  ${({ theme }) => theme.device.mobile`
      padding: 0 23px 0 25px;

    .MobileAboutUS {
      display: block;
    }
  `}
`;

export default Header;
