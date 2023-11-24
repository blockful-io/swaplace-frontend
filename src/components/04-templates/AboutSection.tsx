import React from "react";
import cc from "classcat";
import { CardAbout, CardTopics } from "@/components/02-molecules";

export const AboutSection = () => {
  return (
    <section
      className={cc([
        "w-full flex flex-col items-center h-full xl:mt-32 lg:mt-40 md:mt-60 mb-8 px-8",
      ])}
    >
      <div className="w-full h-full flex items-center flex-col justify-center">
        <CardAbout />
        <CardTopics />
      </div>
    </section>
  );
};
