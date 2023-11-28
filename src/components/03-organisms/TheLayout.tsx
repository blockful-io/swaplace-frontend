import { ReactNode, useContext } from "react";
import cc from "classcat";
import { ThemeContext } from "@/contexts/theme-config";
import { TheFooter, TheHeader } from "@/components/02-molecules";

interface ITheLayout {
  children?: ReactNode;
}

export function TheLayout({ children }: ITheLayout) {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div
        className={cc([
          "w-full h-full flex flex-col justify-center items-center bg-gradient-green",
        ])}
      >
        <TheHeader />
        <main className="w-full bg-green">{children}</main>
        <TheFooter />
      </div>
    </>
  );
}
