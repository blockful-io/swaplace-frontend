import React from "react";
import cc from "classcat";
import LandingPageLayout from "@/components/03-organisms/Layout";
import { EcosystemSection } from "@/components/04-templates/EcosystemSection";

const Ecosystem = () => {
  return (
    <div
      className={cc([
        "w-full h-full  flex flex-col justify-center items-center	",
      ])}
    >
      <LandingPageLayout>
        <EcosystemSection />
      </LandingPageLayout>
    </div>
  );
};

export default Ecosystem;
