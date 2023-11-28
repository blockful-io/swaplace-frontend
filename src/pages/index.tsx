import { useContext } from "react";
import cc from "classcat";
import { NextPage } from "next";
import { ThemeContext } from "@/contexts/theme-config";
import { TheLayout } from "@/components/03-organisms/TheLayout";
import {
  HeroSection,
  CardSection,
  BenefitsSection,
} from "@/components/04-templates";

const IndexPage: NextPage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={cc([
        "w-full h-full flex flex-col justify-center items-center",
      ])}
    >
      <TheLayout>
        <HeroSection />
        <div className="lg:pt-20">
          <CardSection />
          <BenefitsSection />
        </div>
      </TheLayout>
    </div>
  );
};

export default IndexPage;
