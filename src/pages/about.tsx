import LandingPageLayout from "@/components/03-organisms/Layout";
import React, { ReactElement } from "react";
import cc from "classcat";
import { AboutSection } from "@/components/04-templates";
import { BannerAbout } from "@/components/02-molecules";

const About = () => {
  return (
    <div
      className={cc([
        "w-full h-full  flex flex-col justify-center items-center	",
      ])}
    >
      <LandingPageLayout>
        <AboutSection />
        <BannerAbout />
      </LandingPageLayout>
    </div>
  );
};

export default About;
