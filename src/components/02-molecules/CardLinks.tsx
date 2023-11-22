import React from "react";
import CTAButton, { ButtonCTAVariant } from "../01-atoms/CTAButton";
import { blockfulContact, blockfulDiscord, swaplaceContracts } from "../utils";

const CardLinks = () => {
  return (
    <>
      <div className="flex space-x-4">
        <CTAButton
          label="Read the docs"
          variant={ButtonCTAVariant.DEFAULT}
          description={
            "The kickstart between you and your next hackathon project."
          }
          onClick={() => {
            window.open(swaplaceContracts, "_blank");
          }}
        />
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
        <CTAButton
          label="Join the community"
          variant={ButtonCTAVariant.DEFAULT}
          description={"Collaborate with the ecosystem and receive incentives."}
          onClick={() => {
            window.open(blockfulDiscord, "_blank");
          }}
        />
      </div>
    </>
  );
};

export default CardLinks;
