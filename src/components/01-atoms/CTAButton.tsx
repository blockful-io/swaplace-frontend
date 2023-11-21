import React, { ButtonHTMLAttributes } from "react";
import cc from "classcat";
import LoadingIndicator from "./LoadingIndicator";
import ArrowCTA from "./ArrowCTA";

export enum ButtonCTAVariant {
  DEFAULT,
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
  };

interface Props<T> extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonCTAVariant;
  label: string;
  description: string;
  onClick?: () => void;
  aditionalStyle?: string;
  isLoading?: boolean;
}

function CTAButton<T>({
  variant = ButtonCTAVariant.DEFAULT,
  label,
  description,
  onClick = () => {},
  aditionalStyle,
  isLoading = false,
  ...props
}: Props<T>) {
  return (
    <button
      onClick={onClick}
      className={cc([
        ButtonCTAVariantsConfigs[variant].style,
        "flex-col justify-center items-start gap-1 inline-flex w-[394.67px] h-[123px] hover:bg-[#DDF23D] hover:text-stone-100",
        aditionalStyle,
      ])}
      {...props}
      disabled={isLoading}
    >
      <div className="flex">
        <div className="text-left space-y-1 w-[270px]">
          <div className="text-stone-100 text-2xl font-normal font-onest ">
            {label}
          </div>
          <div className="text-neutral-400 text-base font-normal font-onest leading-tight">
            {description}
          </div>
        </div>
        <div className="w-[52px] h-[52px] p-5 bg-white bg-opacity-10 rounded-[100px] flex items-center justify-center gap-2.5">
          <div
            className={cc(["w-5 h-5 relative origin-top-left -rotate-45 "])}
          />
          <ArrowCTA color={ButtonCTAVariantsConfigs[variant].arrowColorInHex} />
        </div>
      </div>

      {isLoading ? <LoadingIndicator /> : null}
    </button>
  );
}

export default CTAButton;
