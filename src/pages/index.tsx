import { useContext } from "react";
import { NextPage } from "next";
import { ThemeContext } from "@/contexts/theme-config";
import cc from "classcat";

import LandingPageLayout from "@/components/03-organisms/Layout";

const IndexPage: NextPage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={cc([
        "w-screen h-screen flex flex-col justify-center items-center	",
      ])}
    >
      <LandingPageLayout>
        <div>Home</div>
      </LandingPageLayout>
    </div>
  );
};

export default IndexPage;
