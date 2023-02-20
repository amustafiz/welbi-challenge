import React from "react";
import NavLogo from "./NavLogo";

const Header = () => {
  return (
    <nav className="z-40 flex flex-wrap w-full px-3 pb-1">
      <NavLogo fill="#61c0c2" className="mb-[-10px]" />
    </nav>
  );
};
export default Header;
