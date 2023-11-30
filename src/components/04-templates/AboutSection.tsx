import React from "react";
import cc from "classcat";
import { CardAbout, CardTopics } from "@/components/02-molecules";

export const AboutSection = () => {
  return (
    <section
      className={cc([
        "w-full flex flex-col items-center h-full xl:mt-32 lg:mt-40 md:mt-60 md:mb-8 md:px-8",
      ])}
    >
      <div className="w-full h-[549px] md:h-full flex items-center flex-col justify-center">
        <CardAbout />
      </div>
      <div className="flex px-6 pb-10  md:px-0 md:pb-0 ">
        <CardTopics />
      </div>
    </section>
  );
};
