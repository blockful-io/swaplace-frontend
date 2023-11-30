import React from "react";
import { Card } from "@/components/01-atoms";
import BenefitsIllustration1 from "public/BenefitsIllustration1.svg";
import BenefitsIllustration2 from "public/BenefitsIllustration2.svg";
import BenefitsIllustration3 from "public/BenefitsIllustration3.svg";
import BenefitsIllustration4 from "public/BenefitsIllustration4.svg";

export const CardBenefits = () => {
  return (
    <>
      <div className="grid gap-4 xl:grid-cols-4 lg:grid-cols-2  md:gap-4 md:grid-cols-2 grid-cols-1">
        <div className="flex">
          <Card
            title={"Feeless"}
            label={"No platform fees, you can enjoy your swaps."}
            img={BenefitsIllustration1}
          />
        </div>
        <div className="flex">
          <Card
            title={"Intermediary-free"}
            label={"Transactions are conducted without intermediaries."}
            img={BenefitsIllustration2}
          />
        </div>
        <div className="flex">
          <Card
            title={"One transaction, multiple tokens"}
            label={
              "There's no need to separate transactions to transfer different tokens."
            }
            img={BenefitsIllustration3}
          />
        </div>
        <div className="flex">
          <Card
            title={"Token payment flexibility"}
            label={
              "No requirement to pay with a mixed asset combination for tokens."
            }
            img={BenefitsIllustration4}
          />
        </div>
      </div>
    </>
  );
};
