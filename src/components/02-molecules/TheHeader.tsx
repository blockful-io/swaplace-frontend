import React from "react";
import cc from "classcat";
import Link from "next/link";
import {
  ButtonVariant,
  GenericButton,
  SwaplaceLogo,
} from "@/components/01-atoms";
import { blockfulContact, blockfulDiscord } from "@/components/utils";

export const TheHeader = () => {
  return (
    <header
      className={cc([
        "w-full h-16 flex top-0 px-8 gap-8 space-x-4 rounded-xl justify-between items-center fixed bg-emerald-950  mt-4 mx-8 p-4 z-10 md:w-[704px]  lg:max-xl:w-[960px]  xl:max-2xl:w-[1376px]  2xl:w-[1500px]",
      ])}
    >
      <div>
        <Link
          className={cc([
            "w-fit h-full opacity-80 justify-start items-center gap-[6.45px] flex pl-4 pr-4 rounded-lg ",
          ])}
          href="/"
          aria-label="Swaplace Logo"
        >
          <SwaplaceLogo />
        </Link>
      </div>
      <div className=" rounded-lg justify-start items-center gap-1 flex ">
        <Link
          className={cc([
            "w-fit px-4 py-1 hover:bg-[#05332B] rounded-lg justify-start items-center flex",
          ])}
          href="/"
        >
          <div className="font-onest text-center text-stone-100 text-base font-normal leading-tight ">
            <button aria-label="Home">Home</button>
          </div>
        </Link>
        <Link
          className={cc([
            "w-fit px-4 py-1 hover:bg-[#05332B] bg-emerald-950 rounded-lg justify-start items-center flex",
          ])}
          href="/about"
        >
          <div className="font-onest text-center text-stone-100 text-base font-normal leading-tight  ">
            <button aria-label="About">About</button>
          </div>
        </Link>
        <Link
          className={cc([
            "w-fit px-4 py-1 hover:bg-[#05332B] bg-emerald-950 rounded-lg justify-start items-center flex",
          ])}
          href={blockfulDiscord}
          target="_blank"
        >
          <div className="text-center font-onest text-stone-100 text-base font-normal leading-tight">
            <button aria-label="Community">Community</button>
          </div>
        </Link>
        <Link
          className={cc([
            "w-fit px-4 py-1 hover:bg-[#05332B] bg-emerald-950 rounded-lg justify-start items-center flex",
          ])}
          href={blockfulDiscord}
          target="_blank"
        >
          <div className="text-center text-stone-100 text-base font-normal font-onest">
            <button aria-label="Incentives">Incentives</button>
          </div>
        </Link>
      </div>
      <div
        className={cc(["justify-center items-center flex shadow bg-darkBase "])}
      >
        <GenericButton
          label={"Get in touch"}
          variant={ButtonVariant.DEFAULT}
          onClick={() => {
            window.open(blockfulContact, "_blank");
          }}
          aditionalStyle="button-small"
        />
      </div>
    </header>
  );
};
