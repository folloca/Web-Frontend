import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import CustomLink from "./CustomLink";
import dynamic from "next/dynamic";
import { sizes } from "../config/style/mediaTheme";

const DynamicMobileNavigation = dynamic(() => import("./MobileNavigation"));

const DynamicNavigation = dynamic(() => import("./Navigation"));

const Header = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  const handlerResize = () => {
    setIsMobile(() => {
      return window.innerWidth <= sizes.mobile;
    });
  };

  React.useEffect(() => {
    handlerResize();
    window.addEventListener("resize", handlerResize);
    return () => {
      window.removeEventListener("resize", handlerResize);
    };
  }, []);

  return (
    <Wrapper>
      <Logo />
      {!isMobile && <DynamicNavigation />}
      <CustomLink url={"/aboutus"} text={"ABOUT US"} isSelected={true} className={"MobileAboutUS"} />
      {isMobile && <DynamicMobileNavigation />}
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
