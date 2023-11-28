import React from "react";
import cc from "classcat";
import { TheLayout } from "@/components/03-organisms/TheLayout";
import { EcosystemSection } from "@/components/04-templates/EcosystemSection";

const Ecosystem = () => {
  return (
    <div
      className={cc([
        "w-full h-full  flex flex-col justify-center items-center	",
      ])}
    >
      <TheLayout>
        <EcosystemSection />
      </TheLayout>
    </div>
  );
};

export default Ecosystem;
