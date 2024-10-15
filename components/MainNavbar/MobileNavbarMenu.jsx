"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoLibraryOutline } from "react-icons/io5";
import { TbPointerSearch } from "react-icons/tb";
import { MdLocalLibrary } from "react-icons/md";
import { ImHome } from "react-icons/im";

import Link from "next/link";
const MobileNavbarMenu = () => {
  const [openMenu, setOpenMeun] = useState(false);
  const path = usePathname();
  const openMenuHandler = () => {
    setOpenMeun((prev) => !prev);
  };
  return (
    <>
      {/* Menu Mobile */}
      {openMenu && (
        <nav
          className={`fixed left-0 top-0 !z-[51] h-dvh w-full bg-primary-50 p-5 backdrop-blur-sm md:hidden`}
        >
          <div className="mb-20 text-4xl text-primary-400">
            <MdLocalLibrary />
          </div>

          <ul className="flex flex-col space-y-3">
            <li>
              <Link
                className={`nav-btn hover:bg-primary-200 ${path.startsWith("/") ? "bg-primary-200" : ""}`}
                href="/"
              >
                <ImHome className="ml-2" />
                <span>خانه</span>
              </Link>
            </li>

            <li>
              <Link
                className={`nav-btn hover:bg-primary-200 ${path.startsWith("/bookshelf") ? "bg-primary-200" : ""}`}
                href="/mybookshelf"
              >
                <IoLibraryOutline className="ml-2" />
                <span>قفسه من</span>
              </Link>
            </li>

            <li>
              <Link
                className={`nav-btn hover:bg-primary-200 ${path.startsWith("/library") ? "bg-primary-200" : ""}`}
                href="/mylibrary"
              >
                <TbPointerSearch className="ml-2" />
                <span>جستجو</span>
              </Link>
            </li>
          </ul>
        </nav>
      )}
      {/* Hamburger Menu */}
      <button
        onClick={openMenuHandler}
        className={`${openMenu ? "open" : ""} hamburger relative z-[51] h-[24px] w-[24px] focus:outline-none md:hidden`}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
    </>
  );
};

export default MobileNavbarMenu;
