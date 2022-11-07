import React from "react";
import styled from "styled-components";
import CustomLink from "./CustomLink";
import MSearchImg from "../../public/assets/MSearch.svg";
import MLogo from "../../public/assets/MLogo.svg";
import MSelection from "../../public/assets/MSelection.svg";
import { INav } from "./Navigation";
import ProfileButton from "./ProfileButton";
import { useRouter } from "next/router";

const MobileNavigation = () => {
  const navs: INav[] = [
    {
      url: "/search",
      isIcon: true,
      text: React.useMemo(
        () => (
          <div className={"MobileNavButton"}>
            <MSearchImg />
            <p>검색</p>
          </div>
        ),
        [],
      ),
      isMobile: false,
    },
    {
      url: "/trend",
      isIcon: false,
      text: React.useMemo(
        () => (
          <div className={"MobileNavButton"}>
            <MLogo />
            <p>트렌드</p>
          </div>
        ),
        [],
      ),
      isMobile: false,
    },
    {
      url: "/space",
      isIcon: false,
      text: React.useMemo(
        () => (
          <div className={"MobileNavButton"}>
            <MSelection />
            공간
          </div>
        ),
        [],
      ),
      isMobile: false,
    },
  ];
  const router = useRouter();

  return (
    <Wrapper>
      {navs.map((el, idx) => {
        const isSelected = router.pathname.startsWith(el.url);
        return <CustomLink url={el.url} text={el.text} isSelected={isSelected} key={idx} />;
      })}
      <ProfileButton />
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
