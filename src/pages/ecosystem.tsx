import React from "react";
import cc from "classcat";
import LandingPageLayout from "@/components/03-organisms/Layout";

const Ecosystem = () => {
  return (
    <div
      className={cc([
        "w-screen h-screen flex flex-col justify-center items-center	",
      ])}
    >
      <LandingPageLayout>
        <div>Ecosystem Page</div>
      </LandingPageLayout>
    </div>
  );
};

export default Ecosystem;
