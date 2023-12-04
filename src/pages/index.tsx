import cc from "classcat";
import { NextPage } from "next";
import { TheLayout } from "@/components/03-organisms/TheLayout";
import {
  HeroSection,
  CardSection,
  BenefitsSection,
} from "@/components/04-templates";
import Image from "next/image";
import { useScreenSize } from "@/hooks/useScreenSize";
import homeBg from "/public/home-know-more-bg.png";
import homeMobileBg from "/public/home-know-more-mobile-bg.png";

const IndexPage: NextPage = () => {
  const { isMobile } = useScreenSize();

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
          <div className="relative">
            {isMobile ? (
              <Image
                alt="Hero Background"
                src={homeMobileBg}
                sizes="100vw"
                quality={100}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            ) : (
              <Image
                alt="Hero Background"
                src={homeBg}
                sizes="100vw"
                quality={100}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "auto",
                  backgroundRepeat: "no-repeat",
                }}
              />
            )}
            <div className="lg:pt-20 md:pt-10">
              <BenefitsSection />
            </div>
          </div>
        </div>
      </TheLayout>
    </div>
  );
};

export default IndexPage;
