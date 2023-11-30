import cc from "classcat";
import { NextPage } from "next";
import { TheLayout } from "@/components/03-organisms/TheLayout";
import {
  HeroSection,
  CardSection,
  BenefitsSection,
} from "@/components/04-templates";
import Image from "next/image";

const IndexPage: NextPage = () => {
  return (
    <div
      className={cc([
        "w-full h-full flex flex-col justify-center items-center",
      ])}
    >
      <TheLayout>
        <HeroSection />
        <div className="pt-20">
          <CardSection />
          <div
            className="relative"
            style={{
              paddingTop: "20px",
              backgroundImage: "url('/home-know-more-bg.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
            }}
          >
            <div className="pt-20 lg:pt-20 md:pt-10 ">
              <BenefitsSection />
            </div>
          </div>
        </div>
      </TheLayout>
    </div>
  );
};

export default IndexPage;
