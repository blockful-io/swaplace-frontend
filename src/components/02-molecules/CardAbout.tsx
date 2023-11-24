import React from "react";
import cc from "classcat";
import CTAButton, { ButtonCTAVariant } from "../01-atoms/CTAButton";
import {
  howToBuildSectionId,
  manifestoSectionId,
  theTeamSectionId,
  whatIsSwaplaceSectionId,
} from "@/components/utils";

export const CardAbout = () => {
  return (
    <div className="flex justify-center items-center ">
      <div
        className={cc([
          "xl:w-[1216px] xl:h-[320px] xl:py-[60px] xl:px-12 xl:my-8 lg:w-[900px] lg:h-[350px] md:w-[500px] md:h-[550px] md:pt-4 border rounded-[20px] border-greenLight bg-greenDark  ",
        ])}
        style={{
          backgroundImage: "url('/about-cta-bg.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
        }}
      >
        <div className="flex justify-center lg:title-h1 mb-10 md:title-h2">
          <h1>
            About
            <span className="text-secondaryColored"> Swaplace</span>{" "}
          </h1>
        </div>
        <div className="justify-center items-center flex">
          <div className="grid xl:grid-cols-4 lg:grid-cols-2 gap-4 md:gap-6 ">
            <CTAButton
              label="Manifesto"
              variant={ButtonCTAVariant.VARIANT}
              onClick={() => {
                const aboutAnchorSection =
                  document.getElementById(manifestoSectionId);
                aboutAnchorSection?.scrollIntoView({ behavior: "smooth" });
              }}
            />
            <CTAButton
              label="What is Swaplace"
              variant={ButtonCTAVariant.VARIANT}
              onClick={() => {
                const aboutAnchorSection = document.getElementById(
                  whatIsSwaplaceSectionId,
                );
                aboutAnchorSection?.scrollIntoView({ behavior: "smooth" });
              }}
            />
            <CTAButton
              label="The team"
              variant={ButtonCTAVariant.VARIANT}
              onClick={() => {
                const aboutAnchorSection =
                  document.getElementById(theTeamSectionId);
                aboutAnchorSection?.scrollIntoView({ behavior: "smooth" });
              }}
            />
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
  );
};
