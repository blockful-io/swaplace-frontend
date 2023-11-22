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
import { BlockfulLogo } from "../01-atoms/BlockfulLogo";
import cc from "classcat";
import {
  blockfulDiscord,
  blockfulInstagram,
  blockfulLinkedIn,
  blockfulMedium,
  blockfulTwitter,
  blockfulWebsite,
  swaplaceTelegram,
} from "@/components/utils";

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
            <a href="/" aria-label="Swaplace Logo">
              <SwaplaceLogo />
            </a>
          </div>
          <div>
            <a className={cc(["text-[#A3A9A5]"])}>
              Transforming tokens, empowering trade.
            </a>
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
              <a href={blockfulWebsite} aria-label="Blockful Logo">
                <BlockfulLogo />
              </a>
            </div>
            <div>
              <p className={cc(["text-[#A3A9A5]"])}>
                2023 © Blockful. All rights reserved.
              </p>
            </div>
          </div>
          <div className={cc(["flex items-center space-x-2 "])}>
            <div>
              <button
                onClick={() => {
                  window.open(blockfulTwitter, "_blank");
                }}
                className="w-8 h-8 rounded-md inline-flex justify-center items-center bg-opacity-5 hover:bg-[#DDF23D] hover:bg-opacity-30 hover:cursor-pointer hover:transform-all duration-700 mr-3"
              >
                <TwitterLogo />
              </button>
              <button
                onClick={() => {
                  window.open(blockfulDiscord, "_blank");
                }}
                className="w-8 h-8 rounded-md inline-flex justify-center items-center bg-opacity-5 hover:bg-[#DDF23D] hover:bg-opacity-30 hover:cursor-pointer hover:transform-all duration-700 mr-3"
              >
                <DiscordLogo />
              </button>
              <button
                onClick={() => {
                  window.open(swaplaceTelegram, "_blank");
                }}
                className="w-8 h-8 rounded-md inline-flex justify-center items-center bg-opacity-5 hover:bg-[#DDF23D] hover:bg-opacity-30 hover:cursor-pointer hover:transform-all duration-700 mr-3"
              >
                <TelegramLogo />
              </button>
              <button
                onClick={() => {
                  window.open(blockfulLinkedIn, "_blank");
                }}
                className="w-8 h-8 rounded-md inline-flex justify-center items-center bg-opacity-5 hover:bg-[#DDF23D] hover:bg-opacity-30 hover:cursor-pointer hover:transform-all duration-700 mr-3"
              >
                <LinkedinLogo />
              </button>
              <button
                onClick={() => {
                  window.open(blockfulInstagram, "_blank");
                }}
                className="w-8 h-8 rounded-md inline-flex justify-center items-center bg-opacity-5 hover:bg-[#DDF23D] hover:bg-opacity-30 hover:cursor-pointer hover:transform-all duration-700 mr-3"
              >
                <InstagramLogo />
              </button>
              <button
                onClick={() => {
                  window.open(blockfulMedium, "_blank");
                }}
                className="w-8 h-8 rounded-md inline-flex justify-center items-center bg-opacity-5 hover:bg-[#DDF23D] hover:bg-opacity-30 hover:cursor-pointer hover:transform-all duration-700 mr-3"
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
