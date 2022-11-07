import React from "react";
import MProfileImg from "../../public/assets/MProfile.svg";
import ProfileImg from "../../public/assets/Profile.svg";
import styled from "styled-components";
import PopupMenu from "./PopupMenu";
import useBoolean from "../hooks/useBoolean";

const ProfileButton = () => {
  const { value: popupBoolean, toggle } = useBoolean();

  return (
    <Wrapper popupBoolean={popupBoolean}>
      <ProfileImg onClick={toggle} className={"NavButton"} />
      <div onClick={toggle} className={"MobileNavButton"}>
        <MProfileImg />
        <p>마이</p>
      </div>
      {popupBoolean && <PopupMenu />}
    </Wrapper>
  );
};

const Wrapper = styled.nav<{ popupBoolean: boolean }>`
  position: relative;
  cursor: pointer;

  svg {
    path {
      fill: ${(props) => (props.popupBoolean ? props.theme.color.primary[400] : "")};
    }
  }

  .MobileNavButton {
    display: none;
  }

  ${({ theme, popupBoolean }) => theme.device.mobile`
    .MobileNavButton {
     display: flex;
     justify-content: center;
     align-items:center;
      p {
    color: ${popupBoolean ? theme.color.primary[400] : ""};
  }
    }
    .NavButton {
     display: none;
    }
    
  `}
`;

export default ProfileButton;
