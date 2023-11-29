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
        "w-[394.67px] h-[123px] p-6 bg-emerald-950 rounded-[20px] justify-center items-start gap-6 inline-flex relative",
      arrowColorInHex: "#FFFFFF",
    },
    [ButtonCTAVariant.VARIANT]: {
      style:
        "w-[268px] h-[84px] py-4  px-5 bg-emerald-950 rounded-[12px] justify-center items-start gap-6 inline-flex relative items-center",
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
      className={cc([
        ButtonCTAVariantsConfigs[variant].style,
        "group flex flex-row hover:bg-button-default",
        aditionalStyle,
      ])}
      {...props}
      disabled={isLoading}
    >
      <div className="text-left space-y-1 flex-col">
        <div className="text-stone-100 text-2xl font-normal font-onest group-hover:text-black-500">
          {label}
        </div>
        <div className="text-neutral-400 text-base font-normal font-onest leading-tight group-hover:text-black-500">
          {description}
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div
          className={cc([
            "w-[52px] h-[52px] p-5 bg-white bg-opacity-10 rounded-[100px] flex items-center justify-center gap-2.5 group-hover:bg-[#c6de3b]",
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
