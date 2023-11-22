import { ReactNode, useContext } from "react";
import { ThemeContext } from "@/contexts/theme-config";
import { Footer, Header } from "@/components/02-molecules";
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
          "w-full h-full flex flex-col justify-center items-center",
        ])}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
