import { useContext } from "react";
import { NextPage } from "next";
import { ThemeContext } from "@/contexts/theme-config";
import cc from "classcat";

import LandingPageLayout from "@/components/03-organisms/Layout";
import HomeSection from "@/components/04-templates/HomeSection";
import CardSection from "@/components/04-templates/CardSection";

const IndexPage: NextPage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={cc([
        "w-screen h-screen flex flex-col justify-center items-center",
      ])}
    >
      <LandingPageLayout>
        <HomeSection />
        <CardSection />
      </LandingPageLayout>
    </div>
  );
};

export default IndexPage;
