"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

usePathname;
const NavLink = ({ href, children }) => {
  const path = usePathname();

  return (
    <Link
      className={`nav-btn hover:bg-primary-200 ${path === href ? "bg-primary-200" : ""}`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
