import { useContext } from "react";
import { NextPage } from "next";
import { ThemeContext } from "@/contexts/theme-config";
import cc from "classcat";

import LandingPageLayout from "@/components/03-organisms/Layout";
import HomeSection from "@/components/04-templates/HomeSection";
import CardSection from "@/components/04-templates/CardSection";
import BenefitsSection from "@/components/04-templates/BenefitsSection";

const IndexPage: NextPage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={cc([
        "w-full h-full flex flex-col justify-center items-center",
      ])}
    >
      <LandingPageLayout>
        <HomeSection />
        <div
          className="lg:pt-20"
          style={{
            backgroundImage: `url("/home-know-more.png")`,
            backgroundSize: "cover",
            backgroundPosition: "top left",
          }}
        >
          <CardSection />
          <BenefitsSection />
        </div>
      </LandingPageLayout>
    </div>
  );
};

export default IndexPage;
