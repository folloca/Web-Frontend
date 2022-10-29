import React from "react";
import MProfileImg from "../../public/assets/MProfile.svg";
import ProfileImg from "../../public/assets/Profile.svg";
import styled from "styled-components";
import PopupMenu from "./PopupMenu";

const ProfileButton = () => {
  return (
    <Wrapper>
      <ProfileImg className={"NavButton"} />
      <div className={"MobileNavButton"}>
        <MProfileImg />
        <p>마이</p>
      </div>
      <PopupMenu />
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: relative;
  cursor: pointer;

  .MobileNavButton {
    display: none;
  }

  ${({ theme }) => theme.device.mobile`
    .MobileNavButton {
     display: flex;
     justify-content: center;
     align-items:center;
/*     color: ${() => theme.color.primary[400]};

    path {
      fill: ${() => theme.color.primary[400]};
    }*/
    }
    .NavButton {
     display: none;
    }
    
  `}
`;

export default ProfileButton;
