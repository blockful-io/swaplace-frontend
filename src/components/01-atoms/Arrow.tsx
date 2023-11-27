import React, { ButtonHTMLAttributes } from "react";

interface AnimatedArrowProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
}

const AnimatedArrow = ({ color }: AnimatedArrowProps) => {
  return (
    <div className=" relative inline-flex items-center group transition-all duration-500 ease-in-out">
      <svg
        className="absolute leading-none arrow-line opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:-translate-x-3/20 transition-all duration-500 ease-in-out"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="arrow-right-solid 1">
          <path
            style={{ fill: color }}
            d="M10.9994 6.52949C11.2924 6.23652 11.2924 5.76074 10.9994 5.46777L7.24941 1.71777C6.95644 1.4248 6.48066 1.4248 6.1877 1.71777C5.89473 2.01074 5.89473 2.48652 6.1877 2.77949L8.66035 5.2498H1.46973C1.05488 5.2498 0.719727 5.58496 0.719727 5.9998C0.719727 6.41465 1.05488 6.7498 1.46973 6.7498H8.65801L6.19004 9.22012C5.89707 9.51309 5.89707 9.98887 6.19004 10.2818C6.48301 10.5748 6.95879 10.5748 7.25176 10.2818L11.0018 6.53184L10.9994 6.52949Z"
          />
        </g>
      </svg>
      <span className="ml-2 group-hover:mr-2 group-hover:opacity-100 transition-all duration-500 ease-in-out"></span>
    </div>
  );
};

export default AnimatedArrow;
