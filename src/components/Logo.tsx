import React from "react";
import LogoImg from "../../public/assets/Logo.svg";
import CustomLink from "./CustomLink";

function Logo() {
  const memoLogo = React.useMemo(() => <LogoImg />, []);

  return <CustomLink url={"/"} text={memoLogo} isSelected={false} className={"Logo"}></CustomLink>;
}

export default React.memo(Logo);
