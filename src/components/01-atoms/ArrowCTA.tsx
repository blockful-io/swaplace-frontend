import React, { ButtonHTMLAttributes } from "react";

interface IArrow extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
}

const ArrowCTA = ({ color }: IArrow) => {
  return (
    <div className="group-hover:transform group-hover:rotate-45 group-hover:translate-y-[5px] relative inline-flex items-center group transition-all duration-500 ease-in-out">
      <svg
        width="29"
        height="30"
        viewBox="0 0 29 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="arrow-right-solid 1">
          <path
            style={{ fill: color }}
            id="Vector"
            d="M21.183 9.73188C21.183 9.04135 20.6223 8.48063 19.9318 8.48063L11.0929 8.48063C10.4024 8.48063 9.84168 9.04135 9.84168 9.73188C9.84169 10.4224 10.4024 10.9831 11.0929 10.9831L16.9183 10.9804L8.44404 19.4546C7.95515 19.9435 7.95515 20.7335 8.44404 21.2224C8.93294 21.7113 9.72291 21.7113 10.2118 21.2224L18.6833 12.7509L18.686 18.5707C18.686 19.2612 19.2468 19.822 19.9373 19.822C20.6278 19.822 21.1885 19.2613 21.1885 18.5707L21.1885 9.73188H21.183Z"
          />
        </g>
      </svg>

      <span className="ml-2 group-hover:transformgroup-hover:translate-y-[5px] group-hover:opacity-100 transition-all duration-500 ease-in-out"></span>
    </div>
  );
};

export default ArrowCTA;
