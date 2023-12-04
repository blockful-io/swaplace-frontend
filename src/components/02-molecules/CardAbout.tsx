import React from "react";
import cc from "classcat";
import { ButtonCTAVariant, CTAButton } from "@/components/01-atoms";
import {
  howToBuildSectionId,
  manifestoSectionId,
  theTeamSectionId,
  whatIsSwaplaceSectionId,
} from "@/components/utils";
import aboutCtaBg from "/public/about-cta-bg.png";
import aboutCtaMobileBg from "/public/about-cta-mobile-bg.png";
import Image from "next/image";
import { useScreenSize } from "@/hooks/useScreenSize";

export const CardAbout = () => {
  const { isTablet } = useScreenSize();

  return (
    <div
      className={cc([
        " w-full rounded-b-[20px] px-6 pb-8 gap-10 h-[549px] pt-[100px] xl:w-[1216px] xl:h-[320px] xl:py-[60px] xl:px-12 xl:my-8 lg:w-[900px] lg:h-[350px] md:w-[500px] md:h-[550px] md:pt-4 md:pb-0 md:px-0 border md:rounded-[20px] border-greenLight bg-greenDark  ",
      ])}
      style={{ position: "relative" }}
    >
      {isTablet ? (
        <Image
          alt="About CTA Background"
          src={aboutCtaMobileBg}
          fill={true}
          quality={100}
          priority={false}
          style={{
            objectFit: "cover",
          }}
        />
      ) : (
        <Image
          src={aboutCtaBg}
          alt={"About CTA Background"}
          fill={true}
          style={{
            objectFit: "contain",
          }}
        />
      )}

      <div className="flex flex-col justify-center items-center  md:pt-0">
        <div className="flex justify-center title-h2-normal-mobile lg:title-h1 mb-10 md:title-h2 ">
          <h1>
            About
            <span className="text-secondaryColored"> Swaplace</span>{" "}
          </h1>
        </div>
        <div className="justify-center items-center flex">
          <div className="grid xl:grid-cols-4 lg:grid-cols-2 gap-4 md:gap-6 ">
            <div className="flex">
              <CTAButton
                label="Manifesto"
                variant={ButtonCTAVariant.VARIANT}
                onClick={() => {
                  const aboutAnchorSection =
                    document.getElementById(manifestoSectionId);
                  aboutAnchorSection?.scrollIntoView({ behavior: "smooth" });
                }}
              />
            </div>
            <div className="flex">
              <CTAButton
                label="What is Swaplace?"
                variant={ButtonCTAVariant.VARIANT}
                onClick={() => {
                  const aboutAnchorSection = document.getElementById(
                    whatIsSwaplaceSectionId,
                  );
                  aboutAnchorSection?.scrollIntoView({ behavior: "smooth" });
                }}
              />
            </div>
            <div className="flex">
              <CTAButton
                label="The team"
                variant={ButtonCTAVariant.VARIANT}
                onClick={() => {
                  const aboutAnchorSection =
                    document.getElementById(theTeamSectionId);
                  aboutAnchorSection?.scrollIntoView({ behavior: "smooth" });
                }}
              />
            </div>
            <div className="flex">
              <CTAButton
                label="How to build"
                variant={ButtonCTAVariant.VARIANT}
                onClick={() => {
                  const aboutAnchorSection =
                    document.getElementById(howToBuildSectionId);
                  aboutAnchorSection?.scrollIntoView({ behavior: "smooth" });
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
