import React from "react";
import cc from "classcat";
import { ButtonVariant, GenericButton } from "@/components/01-atoms";
import { blockfulContact } from "@/components/utils";

export const BannerAbout = () => {
  return (
    <div
      className={cc([
        "w-full md:h-[318px] bg-secondaryColored  md:px-8 md:py-16 px-8 py-[58px] flex items-center justify-center",
      ])}
      style={{
        backgroundImage: "url('/about-banner.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
      }}
    >
      <div className="flex justify-center items-center ">
        <div className=" items-center justify-center flex-col ">
          <div className="flex md:h-fit md:title-h2-medium-2 title-h2-medium-mobile-green xl:h-24 md:w-[671px] lg:h-30 lg:w-[fit]  text-center w-[311px] h-[56px] smallmobile:w-[280px]">
            Want to know more about Swaplace ?
          </div>
          <div className="flex justify-center items-center mt-8">
            <GenericButton
              label={"Talk to us"}
              onClick={() => {
                window.open(blockfulContact, "_blank");
              }}
              variant={ButtonVariant.DEFAULT_WHITE}
              aditionalStyle="w-[200px] md:h-[56px] bg-primaryColored md:button-medium-white button-medium-white rounded-[12px] h-[48px]"
            ></GenericButton>
          </div>
        </div>
      </div>
    </div>
  );
};
