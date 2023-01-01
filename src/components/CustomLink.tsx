import Link from "next/link";
import React, { ReactNode } from "react";

interface ICustomLinkProps {
  url: string;
  isSelected: boolean;
  className?: string;
  text: ReactNode | string;
}

const CustomLink = ({ url, text, className, isSelected }: ICustomLinkProps) => {
  return (
    <Link legacyBehavior href={url}>
      <a className={isSelected ? `${className} Selected` : className}>{text}</a>
    </Link>
  );
};

export default React.memo(CustomLink);
