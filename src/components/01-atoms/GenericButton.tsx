import React, { ButtonHTMLAttributes } from "react";
import cc from "classcat";
import { Arrow, LoadingIndicator } from "@/components/01-atoms";

export enum ButtonVariant {
  DEFAULT,
  DEFAULT_WHITE,
  ALTERNATIVE,
}

export enum arrowColor {
  WHITE = "#FFFFFF",
  BLACK = "#181A19",
  YELLOW = "#DDF23D",
}

interface ButtonVariantConfig {
  style: string;
  arrowColorInHex?: arrowColor;
  isLoading?: boolean;
}

const ButtonVariantsConfigs: Record<ButtonVariant, ButtonVariantConfig> = {
  [ButtonVariant.DEFAULT]: {
    style:
      "w-32 h-8 bg-button-default rounded-lg shadow justify-center items-center gap-3 inline-flex ",
    arrowColorInHex: arrowColor.BLACK,
  },
  [ButtonVariant.DEFAULT_WHITE]: {
    style:
      "w-32 h-8 bg-button-default rounded-lg shadow justify-center items-center gap-3 inline-flex ",
    arrowColorInHex: arrowColor.WHITE,
  },
  [ButtonVariant.ALTERNATIVE]: {
    style:
      "w-[200px] h-14 px-5 py-2  text-yellow-300 rounded-lg border-[1px] border-yellow-300 justify-center items-center gap-3 inline-flex bg-opacity-5 hover:bg-[#b0ca43] hover:bg-opacity-30 hover:cursor-pointer hover:transform-all duration-700 mr-3",
    arrowColorInHex: arrowColor.YELLOW,
  },
};

interface Props<T> extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  label: string;
  onClick?: () => void;
  aditionalStyle?: string;
  isLoading?: boolean;
}

export function GenericButton<T>({
  variant = ButtonVariant.DEFAULT,
  label,
  onClick = () => {},
  aditionalStyle,
  isLoading = false,
  ...props
}: Props<T>) {
  return (
    <button
      onClick={onClick}
      className={cc([
        ButtonVariantsConfigs[variant].style,
        "flex justify-center items-center py-2 gap-2 transition-all duration-300 ease-in-out group ",
        aditionalStyle,
      ])}
      {...props}
      disabled={isLoading}
    >
      {label}
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <Arrow color={ButtonVariantsConfigs[variant].arrowColorInHex} />
      )}
    </button>
  );
}
