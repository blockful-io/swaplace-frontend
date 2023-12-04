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
      "w-[205px] h-14 bg-button-default rounded-lg shadow justify-center items-center inline-flex border border-secondaryColored",
    arrowColorInHex: arrowColor.BLACK,
  },
  [ButtonVariant.DEFAULT_WHITE]: {
    style:
      "w-[205px] h-14 bg-button-default rounded-lg shadow justify-center items-center inline-flex border border-secondaryColored",
    arrowColorInHex: arrowColor.WHITE,
  },
  [ButtonVariant.ALTERNATIVE]: {
    style:
      "w-[205px] h-14 px-5 text-yellow-300 rounded-lg border border-yellow-300 justify-center items-center inline-flex bg-opacity-5 hover:bg-button-default hover:bg-opacity-30 hover:cursor-pointer hover:transform-all duration-700 md:mr-3",
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
        "flex justify-center items-center py-2 transition-all duration-300 ease-in-out group",
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
