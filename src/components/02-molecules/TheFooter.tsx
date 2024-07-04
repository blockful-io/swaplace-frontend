import React from "react";
import cc from "classcat";
import {
  BlockfulLogo,
  DiscordLogo,
  InstagramLogo,
  LinkedinLogo,
  MediumLogo,
  TelegramLogo,
  TwitterLogo,
  SwaplaceLogoMax,
  SwaplaceLogo,
  GithubLogo,
  GitbookLogo,
} from "@/components/01-atoms";
import {
  blockfulContact,
  blockfulDiscord,
  blockfulInstagram,
  blockfulLinkedIn,
  blockfulMedium,
  blockfulWebsite,
  swaplaceDocs,
  swaplaceGithubContracts,
  swaplaceTwitter,
} from "@/components/utils";
import { useScreenSize } from "@/hooks/useScreenSize";
import Link from "next/link";

export const TheFooter = () => {
  const { isMobile } = useScreenSize();

  return (
    <footer
      className={cc([
        "w-full h-auto px-8 py-10 bg-[#181A19] flex-col justify-start items-center gap-8 flex bottom-0",
      ])}
    >
      <div className={cc(["w-full h-14 max-w-screen-2xl "])}>
        <div
          className={cc(["justify-center  items-center flex flex-col gap-3 "])}
        >
          <div>
            <Link href="/" aria-label="Swaplace Logo">
              {isMobile ? <SwaplaceLogoMax /> : <SwaplaceLogo />}
            </Link>
          </div>
          <div>
            <p
              className={cc([
                "text-black-200 font-onest font-normal text-[16px] leading-5",
              ])}
            >
              Empowering Swaps.
            </p>
          </div>
        </div>
      </div>
      <div
        className={cc([
          "md:w-full md:h-[72px] md:py-4 md:px-5 rounded-xl md:mt-8 md:mx-8 bg-[#212322] max-w-screen-2xl w-[311px] h-[117px]  smallmobile:w-[280px] smallmobile:h-[137px] p-4 justify-between ",
        ])}
      >
        <div
          className={cc([
            "flex justify-between  md:gap-8",
            isMobile
              ? "flex-col-reverse justify-center items-center gap-2 smallmobile:gap-4  "
              : "flex",
          ])}
        >
          <div
            className={cc([
              "flex-col items-center  md:w-full gap-2   ",
              isMobile ? "justify-center items-center flex" : "flex-col ",
            ])}
          >
            <div className={cc(["w-fit flex md:mb-2"])}>
              <a
                href={blockfulWebsite}
                aria-label="Blockful Logo"
                target="_blank"
                className="hover:text-black-200"
              >
                <BlockfulLogo />
              </a>
            </div>
            <div className="flex">
              <p className={cc(["p-normal-xs"])}>
                2023 © Blockful. All rights reserved.
              </p>
            </div>
          </div>
          <div className="md:hidden  w-[279px] h-px bg-black-500 smallmobile:w-[249px]"></div>

          <div
            className={cc([
              "flex items-center space-x-2 smallmobile:h-[32px] ",
            ])}
          >
            {isMobile ? (
              <div className="flex">
                <div className="flex">
                  <button
                    onClick={() => {
                      window.open(swaplaceDocs, "_blank");
                    }}
                    className="w-8 h-8 rounded-md inline-flex justify-center items-center bg-opacity-5 hover:bg-[#DDF23D] hover:bg-opacity-30 hover:cursor-pointer hover:transform-all duration-700 md:mr-2 hover:bg-#464c27"
                    aria-label="Gitbook Logo"
                  >
                    <GitbookLogo />
                  </button>
                </div>
                <div className="flex">
                  <button
                    onClick={() => {
                      window.open(swaplaceGithubContracts, "_blank");
                    }}
                    className="w-8 h-8 rounded-md inline-flex justify-center items-center bg-opacity-5 hover:bg-[#DDF23D] hover:bg-opacity-30 hover:cursor-pointer hover:transform-all duration-700 md:mr-2 hover:bg-#464c27"
                    aria-label="Github Logo"
                  >
                    <GithubLogo />
                  </button>
                </div>
                <div className="flex">
                  <button
                    onClick={() => {
                      window.open(swaplaceTwitter, "_blank");
                    }}
                    className="w-8 h-8 rounded-md inline-flex justify-center items-center bg-opacity-5 hover:bg-[#DDF23D] hover:bg-opacity-30 hover:cursor-pointer hover:transform-all duration-700 md:mr-2 hover:bg-#464c27"
                    aria-label="Twitter Logo"
                  >
                    <TwitterLogo />
                  </button>
                </div>
                <div className="flex">
                  <button
                    onClick={() => {
                      window.open(blockfulDiscord, "_blank");
                    }}
                    className="w-8 h-8 rounded-md inline-flex justify-center items-center bg-opacity-5 hover:bg-[#DDF23D] hover:bg-opacity-30 hover:cursor-pointer hover:transform-all duration-700 md:mr-2 hover:bg-#464c27"
                    aria-label="Discord Logo"
                  >
                    <DiscordLogo />
                  </button>
                </div>
                <div className="flex">
                  <button
                    onClick={() => {
                      window.open(blockfulContact, "_blank");
                    }}
                    className="w-8 h-8 rounded-md inline-flex justify-center items-center bg-opacity-5 hover:bg-[#DDF23D] hover:bg-opacity-30 hover:cursor-pointer hover:transform-all duration-700 md:mr-2 hover:bg-#464c27"
                    aria-label="Telegram Logo"
                  >
                    <TelegramLogo />
                  </button>
                </div>
                <div className="flex">
                  <button
                    onClick={() => {
                      window.open(blockfulLinkedIn, "_blank");
                    }}
                    className="w-8 h-8 rounded-md inline-flex justify-center items-center bg-opacity-5 hover:bg-[#DDF23D] hover:bg-opacity-30 hover:cursor-pointer hover:transform-all duration-700 md:mr-2 hover:bg-#464c27"
                    aria-label="Linkedin Logo"
                  >
                    <LinkedinLogo />
                  </button>
                </div>
                <div className="flex">
                  <button
                    onClick={() => {
                      window.open(blockfulInstagram, "_blank");
                    }}
                    className="w-8 h-8 rounded-md inline-flex justify-center items-center bg-opacity-5 hover:bg-[#DDF23D] hover:bg-opacity-30 hover:cursor-pointer hover:transform-all duration-700 md:mr-2 hover:bg-#464c27"
                    aria-label="Instagram Logo"
                  >
                    <InstagramLogo />
                  </button>
                </div>
                <div className="flex">
                  <button
                    onClick={() => {
                      window.open(blockfulMedium, "_blank");
                    }}
                    className="w-8 h-8 rounded-md inline-flex justify-center items-center bg-opacity-5 hover:bg-[#DDF23D] hover:bg-opacity-30 hover:cursor-pointer hover:transform-all duration-700 md:mr-2 hover:bg-#464c27"
                    aria-label="Medium Logo"
                  >
                    <MediumLogo />
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex">
                  <button
                    onClick={() => {
                      window.open(swaplaceDocs, "_blank");
                    }}
                    className="w-8 h-8 rounded-md inline-flex justify-center items-center bg-opacity-5 hover:bg-[#DDF23D] hover:bg-opacity-30 hover:cursor-pointer hover:transform-all duration-700 md:mr-2 hover:bg-#464c27"
                    aria-label="Gitbook Logo"
                  >
                    <GitbookLogo />
                  </button>
                </div>
                <div className="flex">
                  <button
                    onClick={() => {
                      window.open(swaplaceGithubContracts, "_blank");
                    }}
                    className="w-8 h-8 rounded-md inline-flex justify-center items-center bg-opacity-5 hover:bg-[#DDF23D] hover:bg-opacity-30 hover:cursor-pointer hover:transform-all duration-700 md:mr-2 hover:bg-#464c27"
                    aria-label="Github Logo"
                  >
                    <GithubLogo />
                  </button>
                </div>
                <div className="flex">
                  <button
                    onClick={() => {
                      window.open(swaplaceTwitter, "_blank");
                    }}
                    className="w-8 h-8 rounded-md inline-flex justify-center items-center bg-opacity-5 hover:bg-[#DDF23D] hover:bg-opacity-30 hover:cursor-pointer hover:transform-all duration-700 md:mr-2 hover:bg-#464c27"
                    aria-label="Twitter Logo"
                  >
                    <TwitterLogo />
                  </button>
                </div>
                <div className="flex">
                  <button
                    onClick={() => {
                      window.open(blockfulDiscord, "_blank");
                    }}
                    className="w-8 h-8 rounded-md inline-flex justify-center items-center bg-opacity-5 hover:bg-[#DDF23D] hover:bg-opacity-30 hover:cursor-pointer hover:transform-all duration-700 md:mr-2 hover:bg-#464c27"
                    aria-label="Discord Logo"
                  >
                    <DiscordLogo />
                  </button>
                </div>
                <div className="flex">
                  <button
                    onClick={() => {
                      window.open(blockfulContact, "_blank");
                    }}
                    className="w-8 h-8 rounded-md inline-flex justify-center items-center bg-opacity-5 hover:bg-[#DDF23D] hover:bg-opacity-30 hover:cursor-pointer hover:transform-all duration-700 md:mr-2 hover:bg-#464c27"
                    aria-label="Telegram Logo"
                  >
                    <TelegramLogo />
                  </button>
                </div>
                <div className="flex">
                  <button
                    onClick={() => {
                      window.open(blockfulLinkedIn, "_blank");
                    }}
                    className="w-8 h-8 rounded-md inline-flex justify-center items-center bg-opacity-5 hover:bg-[#DDF23D] hover:bg-opacity-30 hover:cursor-pointer hover:transform-all duration-700 md:mr-2 hover:bg-#464c27"
                    aria-label="Linkedin Logo"
                  >
                    <LinkedinLogo />
                  </button>
                </div>
                <div className="flex">
                  <button
                    onClick={() => {
                      window.open(blockfulInstagram, "_blank");
                    }}
                    className="w-8 h-8 rounded-md inline-flex justify-center items-center bg-opacity-5 hover:bg-[#DDF23D] hover:bg-opacity-30 hover:cursor-pointer hover:transform-all duration-700 md:mr-2 hover:bg-#464c27"
                    aria-label="Instagram Logo"
                  >
                    <InstagramLogo />
                  </button>
                </div>
                <div className="flex">
                  <button
                    onClick={() => {
                      window.open(blockfulMedium, "_blank");
                    }}
                    className="w-8 h-8 rounded-md inline-flex justify-center items-center bg-opacity-5 hover:bg-[#DDF23D] hover:bg-opacity-30 hover:cursor-pointer hover:transform-all duration-700 md:mr-2 hover:bg-#464c27"
                    aria-label="Medium Logo"
                  >
                    <MediumLogo />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
