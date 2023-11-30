import React from "react";
import { Card } from "@/components/01-atoms";
import BenefitsIllustration1 from "@/assets/BenefitsIllustration1.svg";
import BenefitsIllustration2 from "@/assets/BenefitsIllustration2.svg";
import BenefitsIllustration3 from "@/assets/BenefitsIllustration3.svg";
import BenefitsIllustration4 from "@/assets/BenefitsIllustration4.svg";

export const CardBenefits = () => {
  return (
    <>
      <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:my-12 md:gap-4 md:grid-cols-2 grid-cols-1">
        <div>
          <Card
            title={"Feeless"}
            label={"No platform fees, you can enjoy your swaps."}
            img={BenefitsIllustration1}
          />
        </div>
        <div>
          <Card
            title={"Intermediary-free"}
            label={"Transactions are conducted without intermediaries."}
            img={BenefitsIllustration2}
          />
        </div>
        <div>
          <Card
            title={"One transaction, multiple tokens"}
            label={
              "There's no need to separate transactions to transfer different tokens."
            }
            img={BenefitsIllustration3}
          />
        </div>
        <div>
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
