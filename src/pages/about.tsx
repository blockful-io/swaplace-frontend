import React from "react";
import cc from "classcat";
import { BannerAbout } from "@/components/02-molecules";
import { TheLayout } from "@/components/03-organisms";
import { AboutSection } from "@/components/04-templates";

const About = () => {
  return (
    <div
      className={cc([
        "w-full h-full  flex flex-col justify-center items-center	",
      ])}
    >
      <TheLayout>
        <AboutSection />
        <BannerAbout />
      </TheLayout>
    </div>
  );
};

export default About;
