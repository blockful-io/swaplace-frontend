import React, { ButtonHTMLAttributes } from "react";
import Arrow from "./Arrow";
import cc from "classcat";
import LoadingIndicator from "./LoadingIndicator";

export enum ButtonVariant {
  DEFAULT,
  ALTERNATIVE,
}

interface ButtonVariantConfig {
  style: string;
  arrowColorInHex?: string;
  isLoading?: boolean;
}

const ButtonVariantsConfigs: Record<ButtonVariant, ButtonVariantConfig> = {
  [ButtonVariant.DEFAULT]: {
    style:
      "w-32 h-8 bg-button-default rounded-lg shadow justify-center items-center gap-3 inline-flex text-zinc-900 text-sm font-medium font-['Onest'] leading-none",
    arrowColorInHex: "#181A19",
  },
  [ButtonVariant.ALTERNATIVE]: {
    style:
      "bg-white bg-opacity-10 text-white hover:bg-opacity-20 rounded-default ",
    arrowColorInHex: "#FFFFFF",
  },
};

interface Props<T> extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  label: string;
  onClick?: () => void;
  aditionalStyle?: string;
  isLoading?: boolean;
}

function GenericButton<T>({
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
        "flex justify-center items-center px-4 py-2 gap-2 transition-all duration-300 ease-in-out group ",
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

export default GenericButton;
