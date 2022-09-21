import React from "react";
import styled from "styled-components";
import CustomLink from "./CustomLink";
import MSearchImg from "../../public/assets/MSearch.svg";
import MLogo from "../../public/assets/MLogo.svg";
import MSelection from "../../public/assets/MSelection.svg";
import MProfileImg from "../../public/assets/MProfile.svg";
import { INav } from "./Navigation";

const MobileNavigation = () => {
  const navs: INav[] = [
    {
      url: "/search",
      isIcon: true,
      text: (
        <div className={"MobileNavButton"}>
          <MSearchImg />
          <p>검색</p>
        </div>
      ),
      isMobile: false,
    },
    {
      url: "/trend",
      isIcon: false,
      text: (
        <div className={"MobileNavButton"}>
          <MLogo />
          <p>트렌드</p>
        </div>
      ),
      isMobile: false,
    },
    {
      url: "/selection",
      isIcon: false,
      text: (
        <div className={"MobileNavButton"}>
          <MSelection />
          <p>셀렉션</p>
        </div>
      ),
      isMobile: false,
    },
    {
      url: "/signin",
      isIcon: true,
      text: (
        <div className={"MobileNavButton"}>
          <MProfileImg />
          <p>마이</p>
        </div>
      ),
      isMobile: false,
    },
  ];
  return (
    <Wrapper>
      {navs.map((el, idx) => {
        let child = el.text;

        return (
          <CustomLink url={el.url} key={idx}>
            {child}
          </CustomLink>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: none;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 72px;
  position: fixed;
  left: 0;
  top: calc(100vh - 72px);
  background: #ffffff;
  box-shadow: 0px -8px 16px rgba(0, 0, 0, 0.04);

  .MobileNavButton {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    ${({ theme }) => theme.font.spoqaHanSansNeo.regular.caption};
    font-size: 9px;
  }

  .Selected {
    color: ${(props) => props.theme.color.primary[400]};

    path {
      fill: ${(props) => props.theme.color.primary[400]};
    }
  }

  ${({ theme }) => theme.device.mobile`
    display:flex;
  `}
`;

export default MobileNavigation;
