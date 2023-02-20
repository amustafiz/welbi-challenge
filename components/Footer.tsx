import React from "react";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="relative z-10 py-1 text-xs md:text-3xs text-[#539595]"
    >
      <div className="flex justify-between px-2">
        <div className="align-center">
          &#128155; &#128155; &#128155; Made with &#128155; &#128155; &#128155;
        </div>
        <div className="pr-2 text-xs text-right">
          © {new Date().getFullYear()} Anika Mustafiz
        </div>
      </div>
    </footer>
  );
};

export default Footer;
