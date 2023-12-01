import React from "react";
import cc from "classcat";
import { ButtonVariant, GenericButton } from "@/components/01-atoms";
import { blockfulContact } from "@/components/utils";

export const BannerAbout = () => {
  return (
    <div
      className={cc([
        "w-full xl:h-[318px] bg-secondaryColored smallmobile:w-[280px]",
      ])}
      style={{
        backgroundImage: "url('/about-banner.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
      }}
    >
      <div className=" items-center justify-center flex-col  grid grid-rows-2">
        <div className="xl:mt-16 title-h2-medium-2 xl:h-24 xl:w-[671px] lg:h-30 lg:w-[fit] lg:my-4 md:my-4 text-center ">
          Want to know more about Swaplace ?
        </div>
        <div className="items-center justify-center flex">
          <GenericButton
            label={"Talk to us"}
            onClick={() => {
              window.open(blockfulContact, "_blank");
            }}
            variant={ButtonVariant.DEFAULT_WHITE}
            aditionalStyle="w-[200px] h-[56px] bg-primaryColored button-medium-white"
          ></GenericButton>
        </div>
      </div>
    </div>
  );
};
