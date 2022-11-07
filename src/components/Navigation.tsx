import React, { ReactNode } from "react";
import CustomLink from "./CustomLink";
import SearchImg from "../../public/assets/Search.svg";
import styled from "styled-components";
import { useRouter } from "next/router";
import ProfileButton from "./ProfileButton";

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
      text: React.useMemo(() => {
        return <SearchImg />;
      }, []),
      isMobile: false,
    },
    {
      url: "/trend",
      isIcon: false,
      text: "트렌드",
      isMobile: false,
    },
    {
      url: "/space",
      isIcon: false,
      text: "공간",
      isMobile: false,
    },
    {
      url: "/linking",
      isIcon: false,
      text: "링킹",
      isMobile: false,
    },
    {
      url: "/aboutus",
      isIcon: false,
      text: "ABOUT US",
      isMobile: false,
    },
  ];
  const router = useRouter();

  return (
    <Wrapper>
      {navs.map((el, idx) => {
        const isSelected = router.pathname.startsWith(el.url);

        return <CustomLink isSelected={isSelected} url={el.url} text={el.text} key={idx} />;
      })}

      <ProfileButton />
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  padding: 0;
  gap: 74px;
  width: 587px;
  height: 32px;
  //justify-content: space-between;
  .link {
    white-space: nowrap;
  }

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
