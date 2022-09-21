import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";

interface ICustomLinkProps {
  children: ReactNode;
  url: string;
  className?: string;
}

const CustomLink = ({ children, url, className }: ICustomLinkProps) => {
  const router = useRouter();
  return (
    <Link href={url}>
      <a className={router.pathname.startsWith(url) ? `${className} Selected` : className}>{children}</a>
    </Link>
  );
};

export default React.memo(CustomLink);
