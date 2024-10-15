"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoLibraryOutline } from "react-icons/io5";
import { TbPointerSearch } from "react-icons/tb";
import { MdLocalLibrary } from "react-icons/md";
import { ImHome } from "react-icons/im";
import NavLink from "./NavLink";

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
          className={`fixed left-0 top-0 !z-[51] !h-screen w-full bg-primary-70 p-5 backdrop-blur-sm md:hidden`}
        >
          <div className="mb-20 text-4xl text-primary-400">
            <MdLocalLibrary />
          </div>

          <ul className="flex flex-col space-y-3">
            <li>
              <NavLink href="/">
                <ImHome className="ml-2" />
                <span>خانه</span>
              </NavLink>
            </li>

            <li>
              <NavLink href="/bookshelf">
                <IoLibraryOutline className="ml-2" />
                <span>قفسه من</span>
              </NavLink>
            </li>

            <li>
              <NavLink href="/library">
                <TbPointerSearch className="ml-2" />
                <span>جستجو</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
      {/* Hamburger Menu */}
      <button
        onClick={openMenuHandler}
        className={`${
          openMenu ? "open" : ""
        } hamburger relative z-[51] h-[24px] w-[24px] focus:outline-none md:hidden`}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
    </>
  );
};

export default MobileNavbarMenu;
