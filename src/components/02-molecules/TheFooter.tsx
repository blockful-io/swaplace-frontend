import React from "react";
import {
  DiscordLogo,
  InstagramLogo,
  LinkedinLogo,
  MediumLogo,
  SwaplaceLogo,
  TelegramLogo,
  TwitterLogo,
} from "@/components/01-atoms";
import { BlockfulLogo } from "@/components/01-atoms";
import cc from "classcat";
import {
  blockfulContact,
  blockfulDiscord,
  blockfulInstagram,
  blockfulLinkedIn,
  blockfulMedium,
  blockfulWebsite,
  swaplaceTwitter,
} from "@/components/utils";
import Link from "next/link";

export const TheFooter = () => {
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
              <SwaplaceLogo />
            </Link>
          </div>
          <div>
            <p
              className={cc([
                "text-black-200 font-onest font-normal text-[16px] leading-5",
              ])}
            >
              Transforming tokens, empowering trade.
            </p>
          </div>
        </div>
      </div>
      <div
        className={cc([
          "w-full h-[72px] py-4 px-5 rounded-xl mt-8 mx-8 bg-[#212322] max-w-screen-2xl ",
        ])}
      >
        <div className={cc(["flex justify-between w-auto"])}>
          <div className={cc(["flex-col items-center space-y-2"])}>
            <div className={cc(["w-fit"])}>
              <a
                href={blockfulWebsite}
                aria-label="Blockful Logo"
                target="_blank"
              >
                <BlockfulLogo />
              </a>
            </div>
            <div>
              <p className={cc(["p-normal-xs"])}>
                2023 © Blockful. All rights reserved.
              </p>
            </div>
          </div>
          <div className={cc(["flex items-center space-x-2 "])}>
            <div>
              <button
                onClick={() => {
                  window.open(swaplaceTwitter, "_blank");
                }}
                className="w-8 h-8 rounded-md inline-flex justify-center items-center bg-opacity-5 hover:bg-[#DDF23D] hover:bg-opacity-30 hover:cursor-pointer hover:transform-all duration-700 mr-3"
                aria-label="Twitter Logo"
              >
                <TwitterLogo />
              </button>
              <button
                onClick={() => {
                  window.open(blockfulDiscord, "_blank");
                }}
                className="w-8 h-8 rounded-md inline-flex justify-center items-center bg-opacity-5 hover:bg-[#DDF23D] hover:bg-opacity-30 hover:cursor-pointer hover:transform-all duration-700 mr-3"
                aria-label="Discord Logo"
              >
                <DiscordLogo />
              </button>
              <button
                onClick={() => {
                  window.open(blockfulContact, "_blank");
                }}
                className="w-8 h-8 rounded-md inline-flex justify-center items-center bg-opacity-5 hover:bg-[#DDF23D] hover:bg-opacity-30 hover:cursor-pointer hover:transform-all duration-700 mr-3"
                aria-label="Telegram Logo"
              >
                <TelegramLogo />
              </button>
              <button
                onClick={() => {
                  window.open(blockfulLinkedIn, "_blank");
                }}
                className="w-8 h-8 rounded-md inline-flex justify-center items-center bg-opacity-5 hover:bg-[#DDF23D] hover:bg-opacity-30 hover:cursor-pointer hover:transform-all duration-700 mr-3"
                aria-label="Linkedin Logo"
              >
                <LinkedinLogo />
              </button>
              <button
                onClick={() => {
                  window.open(blockfulInstagram, "_blank");
                }}
                className="w-8 h-8 rounded-md inline-flex justify-center items-center bg-opacity-5 hover:bg-[#DDF23D] hover:bg-opacity-30 hover:cursor-pointer hover:transform-all duration-700 mr-3"
                aria-label="Instagram Logo"
              >
                <InstagramLogo />
              </button>
              <button
                onClick={() => {
                  window.open(blockfulMedium, "_blank");
                }}
                className="w-8 h-8 rounded-md inline-flex justify-center items-center bg-opacity-5 hover:bg-[#DDF23D] hover:bg-opacity-30 hover:cursor-pointer hover:transform-all duration-700 mr-3"
                aria-label="Medium Logo"
              >
                <MediumLogo />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
