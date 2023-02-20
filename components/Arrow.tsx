import React, { useState, FunctionComponent } from "react";

export const Arrow: FunctionComponent<{
  selected?: number;
  idx?: number;
  handleClick: () => void;
}> = ({ handleClick }) => {
  const [isToggled, setIsToggled] = useState<boolean>(true);

  const handleButtonClick = () => {
    handleClick();
    setIsToggled((isToggled) => !isToggled);
  };

  return (
    <span className="mt-2 sm:-ml-2 md:ml-auto text-[#61c0c2]">
      <button onClick={handleButtonClick} className="outline-current">
        <svg
          role="presentation"
          width="16"
          height="16"
          viewBox="0 0 21 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${
            !isToggled && "rotate-180"
          } transition-transform duration-150`}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.9915 0.945567L10.2909 8.32264L2.59033 0.945567C2.20396 0.575436 1.57946 0.575436 1.19309 0.945567C0.806729 1.3157 0.806729 1.91397 1.19309 2.2841L9.59232 10.3304C9.785 10.515 10.038 10.6078 10.2909 10.6078C10.5439 10.6078 10.7969 10.515 10.9896 10.3304L19.3888 2.2841C19.7751 1.91397 19.7751 1.3157 19.3888 0.945567C19.0024 0.575436 18.3779 0.575436 17.9915 0.945567Z"
            fill="rgb(31 41 55)"
            stroke="black"
          />
        </svg>
      </button>
    </span>
  );
};
