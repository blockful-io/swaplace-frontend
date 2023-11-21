import { ReactNode, useContext } from "react";
import { ThemeContext } from "@/contexts/theme-config";
import { Footer } from "@/components/02-molecules";
import cc from "classcat";

interface ILayout {
  children?: ReactNode;
}

export default function Layout({ children }: ILayout) {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div
        className={cc([
          "w-screen h-screen flex flex-col justify-center items-center bg-teal-950	",
        ])}
      >
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
