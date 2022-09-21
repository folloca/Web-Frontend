import React from "react";
import CustomLink from "./CustomLink";
import LogoImg from "../../public/assets/Logo.svg";

function Logo() {
  return (
    <CustomLink url={"/"} className={"Logo"}>
      <LogoImg />
    </CustomLink>
  );
}

export default React.memo(Logo);
