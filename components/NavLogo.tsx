import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

import { gsap } from "gsap";

const NavLogo: React.FunctionComponent<{ className: string; fill: string }> = ({
  className,
  fill,
}) => {
  const router = useRouter();
  const [currentRoute, setCurrentRoute] = useState<any>("");

  const animationRef = useRef<any>();
  const navLogoSvgRef = useRef<any>();
  animationRef.current = gsap.timeline({ defaults: { opacity: 0 } });

  const handlePath = (r: any) => {
    let pathToSet;

    r.pathname === "/"
      ? (pathToSet = "Dashboard")
      : (pathToSet =
          r.pathname.replace("/", "")[0].toUpperCase() + r.pathname.slice(2));
    setCurrentRoute(pathToSet);
  };

  useEffect(() => {
    handlePath(router);
    animationRef.current.from(navLogoSvgRef.current, {
      autoAlpha: 0,
      duration: 3,
      ease: "none",
      scale: 1.1,
      transformOrigin: "center",
    });
  }, [router]);
  return (
    <svg height="65px" fill={fill} className={className}>
      <text fontWeight="bold" x="15px" y="25" textLength="100px">
        <tspan>A</tspan>
        <tspan>n</tspan>
        <tspan>i</tspan>
        <tspan>k</tspan>
        <tspan>a</tspan>
        <tspan>&apos;</tspan>
        <tspan>s</tspan>
      </text>
      <text
        x="5px"
        y="45"
        textLength="150px"
        id="nav-logo-1"
        ref={navLogoSvgRef}
      >
        {currentRoute}
      </text>
    </svg>
  );
};
export default NavLogo;
