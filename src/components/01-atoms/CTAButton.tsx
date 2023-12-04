import React, { ButtonHTMLAttributes, useState } from "react";
import cc from "classcat";
import { ArrowCTA, LoadingIndicator, arrowColor } from "@/components/01-atoms";

export enum ButtonCTAVariant {
  DEFAULT,
  VARIANT,
}

interface ButtonVariantConfig {
  style: string;
  arrowColorInHex?: string;
  isLoading?: boolean;
}

const ButtonCTAVariantsConfigs: Record<ButtonCTAVariant, ButtonVariantConfig> =
  {
    [ButtonCTAVariant.DEFAULT]: {
      style:
        "w-[327px] h-[96px] smallmobile:w-[280px] p-4 md:w-[394.67px] md:h-[123px] md:p-6 bg-emerald-950 rounded-[20px] justify-center items-start gap-6 inline-flex relative",
      arrowColorInHex: "#FFFFFF",
    },
    [ButtonCTAVariant.VARIANT]: {
      style:
        "w-[327px] h-[72px] px-4 gap-2 smallmobile:w-[280px] md:w-[268px] md:h-[84px] md:py-4 md:px-5 md:gap-6  bg-primaryColored rounded-[12px] justify-center items-start inline-flex relative items-center",
      arrowColorInHex: "#FFFFFF",
    },
  };

interface Props<T> extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonCTAVariant;
  label: string;
  description?: string;
  onClick?: () => void;
  aditionalStyle?: string;
  isLoading?: boolean;
}

export function CTAButton<T>({
  variant = ButtonCTAVariant.DEFAULT,
  label,
  description,
  onClick = () => {},
  aditionalStyle,
  isLoading = false,
  ...props
}: Props<T>) {
  const [isGroupHovered, setIsGroupHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => {
        setIsGroupHovered(true);
      }}
      onMouseLeave={() => {
        setIsGroupHovered(false);
      }}
      onTouchStart={() => {
        setIsGroupHovered(true);
      }}
      onTouchEnd={() => {
        setIsGroupHovered(false);
      }}
      className={cc([
        ButtonCTAVariantsConfigs[variant].style,
        "group flex flex-row hover:bg-button-default justify-between items-center",
        aditionalStyle,
      ])}
      {...props}
      disabled={isLoading}
    >
      <div className="text-left items-center  justify-start">
        <div className="button-big-mobile md:button-big group-hover:text-black-500">
          {label}
        </div>
        <div className="button-big-mobile-2 md:button-big-2 group-hover:text-black-500">
          {description}
        </div>
      </div>

      <div className="flex items-center justify-center ">
        <div
          className={cc([
            "w-[40px] h-[40px] md:w-[52px] md:h-[52px] p-5 bg-opacity-10 rounded-[100px] flex items-center justify-center gap-2.5",
          ])}
        >
          {" "}
          <div
            className={cc(["w-5 h-5 relative origin-top-left -rotate-45"])}
          />
          <ArrowCTA
            color={isGroupHovered ? arrowColor.BLACK : arrowColor.WHITE}
          />
        </div>
      </div>

      {isLoading ? <LoadingIndicator /> : null}
    </button>
  );
}
