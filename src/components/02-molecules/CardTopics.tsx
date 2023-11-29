import React from "react";
import cc from "classcat";
import Image from "next/image";
import aboutIllustration from "public/AboutIllustration1.svg";
import aboutIllustration2 from "public/AboutIllustration2.svg";
import aboutIllustration3 from "public/AboutIllustration3.svg";
import aboutIllustration4 from "public/AboutIllustration4.svg";
import {
  blockfulDiscord,
  blockfulWebsite,
  howToBuildSectionId,
  manifestoSectionId,
  swaplaceContracts,
  swaplaceContractsMain,
  theTeamSectionId,
  whatIsSwaplaceSectionId,
} from "@/components/utils";

export const CardTopics = () => {
  return (
    <div className="xl:h-[1402px] border-t my-11 mx-8 border-[#10584C] ">
      <div
        id={manifestoSectionId}
        className={cc([
          "xl:w-[1216px] xl:h-fit grid grid-cols-3 gap-2 border-b border-[#10584C] py-11",
        ])}
      >
        <div className="flex items-center justify-center">
          <div className="mb-5 items-start">
            <div className="mb-5">
              <Image
                alt="About Illustration 1"
                src={aboutIllustration}
                quality={100}
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="xl:w-[292px]">
              <h1 className="title-h2-medium ">Manifesto</h1>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="xl:w-fit xl:h-full  text-justify p-medium">
            With Swaplace, we believe in a decentralized future where
            peer-to-peer exchanges are seamless, open-source, ownerless and
            feeless.
            <br />
            <br /> We envision a world where individuals can exchange digital
            assets effortlessly, without the burden of high fees,
            intermediaries, or complex transactions. Swaplace is a movement
            towards empowering the community, fostering collaboration, and
            embracing the potential of blockchain technology.
            <br />
            <br /> Swaplace is also a public good. As an open-source project,
            Swaplace is designed to support the greater good of the community.
            It thrives on the collaborative efforts of our users, who contribute
            to its development, making it a truly community-driven initiative.
            With Swaplace, there are no external contract dependencies, no
            ownership, and no fees. Instead, the platform operates on
            allowances, ensuring a transparent and accessible environment for
            all.
          </div>
        </div>
      </div>

      <div
        id={whatIsSwaplaceSectionId}
        className={cc([
          "xl:w-[1216px] xl:h-fit grid grid-cols-3 gap-2 border-b border-[#10584C] py-11",
        ])}
      >
        <div className="flex items-center justify-center">
          <div className="mb-5 items-start ">
            <div className="mb-5 ">
              <Image
                alt="About Illustration 2"
                src={aboutIllustration2}
                quality={100}
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="xl:w-[292px]">
              <h1 className="title-h2-medium ">What is Swaplace?</h1>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="xl:w-fit xl:h-full  text-justify p-medium">
            Swaplace is a P2P DEX, ownerless platform designed for token swaps.
            It allows you to exchange tokens directly, eliminating the need for
            intermediaries and reducing transaction complexities.
            <br />
            <br />
            You can trade one token or multiple tokens in a single click, paying
            only the necessary gas fees from the blockchain. Our intuitive
            interface enables you to select specific tokens for swapping,
            putting you in control of your transactions. We've simplified the
            process, making it efficient, straightforward, and user-friendly.
          </div>
        </div>
      </div>

      <div
        id={theTeamSectionId}
        className={cc([
          "xl:w-[1216px] xl:h-fit grid grid-cols-3 gap-2 border-b border-[#10584C] py-11",
        ])}
      >
        <div className="flex flex-col items-center justify-center">
          <div className="mb-5 items-start ">
            <div className="mb-5">
              <Image
                alt="About Illustration3"
                src={aboutIllustration3}
                quality={100}
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="xl:w-[292px]">
              <h1 className="title-h2-medium ">The Team</h1>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="xl:w-fit xl:h-full  text-justify p-medium">
            The development team is from Blockful. Our team fosters innovation
            through curiosity and learning.
            <br />
            <br /> Blockful empowers Blockchain projects with Smart Contracts,
            DeFi Infrastructure, and Expert Consulting. We have experience and
            the full potential of Blockchain projects with our expert team,
            transforming ideas into powerful solutions, propelling your success
            to new heights.
            <br />
            <br />
            The team operates as a squad-as-a-service, creating DeFi and Smart
            Contracts development. Here you can learn more about our team and{" "}
            <a href={blockfulWebsite} target="_blank">
              Blockful
            </a>
          </div>
        </div>
      </div>

      <div
        id={howToBuildSectionId}
        className={cc(["xl:w-[1216px] xl:h-fit grid grid-cols-3 gap-2 py-11"])}
      >
        <div className="flex-col items-center justify-center flex">
          <div className="mb-5 items-start">
            <div className="mb-5">
              <Image
                alt="About Illustration 4"
                src={aboutIllustration4}
                quality={100}
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="xl:w-[292px]">
              <h1 className="title-h2-medium ">How to build</h1>
            </div>
          </div>
        </div>

        <div className="xl:w-fit xl:h-full text-justify col-span-2 p-medium">
          1. Access the Swaplace docs on{" "}
          <a href={swaplaceContracts} target="_blank">
            Github
          </a>
          <br />
          2. There you will find everything you need to start building,
          especially the{" "}
          <a href={swaplaceContractsMain} target="_blank">
            contract codes
          </a>{" "}
          <br />
          3. All documentation is <span className="font-bold">
            Open-Source
          </span>{" "}
          and you can use the technology to build your own product <br />
          4. If you have any difficulties or want to ask any questions, don't
          hesitate to access our{" "}
          <a href={blockfulDiscord} target="_blank">
            Discord community{" "}
          </a>
          to contact the devs <br />
          5. There you will find a category for Swaplace builders, pick the
          “Swaplace Builder” role and feel free to join our community of
          builders
          <br />
          <br />
          Welcome, builder!
        </div>
      </div>
    </div>
  );
};
