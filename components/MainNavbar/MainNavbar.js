import { ImHome } from "react-icons/im";
import { IoLibraryOutline } from "react-icons/io5";
import { TbPointerSearch } from "react-icons/tb";
import { MdLocalLibrary } from "react-icons/md";
import NavLink from "./NavLink";
import MobileNavbarMenu from "./MobileNavbarMenu";
const MainNavbar = () => {
  return (
    <header className="py-5">
      <div className="m-auto flex max-w-7xl items-center justify-between px-5">
        <div className="text-4xl text-primary-400">
          <MdLocalLibrary />
        </div>

        <nav className="hidden w-full justify-center pt-2 md:block">
          <ul className="flex justify-center">
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
        <MobileNavbarMenu />
      </div>
    </header>
  );
};

export default MainNavbar;
