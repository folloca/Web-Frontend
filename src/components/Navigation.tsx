import React, { ReactNode } from "react";
import CustomLink from "./CustomLink";
import SearchImg from "../../public/assets/Search.svg";
import ProfileImg from "../../public/assets/Profile.svg";
import styled from "styled-components";

/**
 *@url: 링크 url 주소
 *@isIcon : 아이콘인지 텍스트인지
 *@text: 아이콘이면 이미지 주소 텍스트면 텍스트
 */
export interface INav {
  url: string;
  isIcon: boolean;
  text: string | ReactNode;
  isMobile: boolean;
}

function Navigation() {
  const navs: INav[] = [
    {
      url: "/search",
      isIcon: true,
      text: <SearchImg />,
      isMobile: false,
    },
    {
      url: "/trend",
      isIcon: false,
      text: "트렌드",
      isMobile: false,
    },
    {
      url: "/selection",
      isIcon: false,
      text: "셀렉션",
      isMobile: false,
    },
    {
      url: "/aboutus",
      isIcon: false,
      text: "ABOUT US",
      isMobile: false,
    },
    {
      url: "/signin",
      isIcon: true,
      text: <ProfileImg />,
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
}

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  padding: 0;
  gap: 72px;
  width: 527px;
  height: 32px;
  justify-content: space-between;

  .MNavigation {
    display: none;
  }

  .Selected {
    color: ${(props) => props.theme.color.primary[400]};

    path {
      fill: ${(props) => props.theme.color.primary[400]};
    }
  }

  ${({ theme }) => theme.device.tablet`
      gap: 38px;
    height: 32px;
    width: auto;
    line-height: 24px;
  `}

  ${({ theme }) => theme.device.mobile`
   display: none; 
  `}
`;

export default Navigation;
