import React from "react";
import { ButtonCTAVariant, CTAButton } from "@/components/01-atoms";
import {
  blockfulContact,
  blockfulDiscord,
  swaplaceDocs,
} from "@/components/utils";

export const CardLinks = () => {
  return (
    <>
      <div className="flex items-center justify-center lg:my-1 md:my-12 md:m-0 md:px-0 md:py-0 pt-10 ">
        <div className=" grid xl:grid-cols-3 lg:grid-cols-2  md:gap-4 md:grid-cols-1 grid-cols-1 md:w-fit md:h-fit w-fit h-[400px]">
          <div>
            <CTAButton
              label="Read the docs"
              variant={ButtonCTAVariant.DEFAULT}
              description={
                "The kickstart between you and your next hackathon project."
              }
              onClick={() => {
                window.open(swaplaceDocs, "_blank");
              }}
            />
          </div>
          <div>
            <CTAButton
              label="Submit your project"
              variant={ButtonCTAVariant.DEFAULT}
              description={
                "Build the next game-changing product on top of Swaplace."
              }
              onClick={() => {
                window.open(blockfulContact, "_blank");
              }}
            />
          </div>
          <div>
            <CTAButton
              label="Join the community"
              variant={ButtonCTAVariant.DEFAULT}
              description={
                "Collaborate with the ecosystem and receive incentives."
              }
              onClick={() => {
                window.open(blockfulDiscord, "_blank");
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
