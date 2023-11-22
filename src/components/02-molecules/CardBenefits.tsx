import React from "react";
import { Card } from "@/components/01-atoms";
import BenefitsIllustration1 from "@/assets/BenefitsIllustration1.svg";
import BenefitsIllustration2 from "@/assets/BenefitsIllustration2.svg";
import BenefitsIllustration3 from "@/assets/BenefitsIllustration3.svg";
import BenefitsIllustration4 from "@/assets/BenefitsIllustration4.svg";

export const CardBenefits = () => {
  return (
    <>
      <div className="flex-row space-x-4 my-12">
        <Card
          title={"Fair fees"}
          label={"No high fees like the ones that are charged by marketplaces."}
          img={BenefitsIllustration1}
        />
        <Card
          title={"Intermediary-free"}
          label={"Transactions are conducted without intermediaries."}
          img={BenefitsIllustration2}
        />
        <Card
          title={"One transaction, multiple tokens"}
          label={
            "There's no need to separate transactions to transfer different tokens."
          }
          img={BenefitsIllustration3}
        />
        <Card
          title={"Token payment flexibility"}
          label={
            "No requirement to pay with a mixed asset combination for tokens."
          }
          img={BenefitsIllustration4}
        />
      </div>
    </>
  );
};
