import LandingPageLayout from "@/components/03-organisms/Layout";
import React, { ReactElement } from "react";
import cc from "classcat";

const About = () => {
  return (
    <div
      className={cc([
        "w-screen h-max flex flex-col justify-center items-center	",
      ])}
    >
      <LandingPageLayout>
        <div>About</div>
      </LandingPageLayout>
    </div>
  );
};

export default About;
