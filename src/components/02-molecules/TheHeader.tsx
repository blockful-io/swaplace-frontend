import React, { useState } from "react";
import cc from "classcat";
import Link from "next/link";
import {
  ButtonVariant,
  BurgerMenu,
  GenericButton,
  SwaplaceLogo,
  SwaplaceLogoMin,
  GithubLogo,
  GitbookLogo,
  TwitterLogo,
  DiscordLogo,
} from "@/components/01-atoms";
import {
  blockfulDiscord,
  blockfulWebsite,
  swaplaceDapp,
  swaplaceGithubContracts,
  swaplaceTwitter,
} from "@/components/utils";
import { MobileMenu } from "@/components/02-molecules";
import { useScreenSize } from "@/hooks/useScreenSize";

export const TheHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isWideScreen } = useScreenSize();

  return (
    <header
      className={cc([
        "lg:w-full lg:h-16 lg:flex top-0 px-8 w-[359px]  rounded-xl  items-center fixed bg-emerald-950  mt-4 mx-8 p-4 z-50 md:w-[704px]  lg:max-xl:w-[960px]  xl:max-2xl:w-[1376px]  2xl:w-[1500px] smallmobile:w-[280px]",
      ])}
    >
      <div className="hidden lg:flex space-x-4 justify-between w-full">
        <div className="flex">
          <Link
            className={cc([
              "w-fit h-full opacity-80 justify-start items-center gap-[6.45px] flex pl-4 pr-4 rounded-lg ",
              isWideScreen && "pr-[134px]",
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
            href={blockfulWebsite}
            target="_blank"
          >
            <div className="text-center font-onest text-stone-100 text-base font-normal leading-tight">
              <button aria-label="Blockful">Blockful</button>
            </div>
          </Link>
        </div>

        <div className={"justify-center items-center flex shadow gap-3"}>
          <div className="flex justify-normal">
            <button
              onClick={() => {
                window.open(swaplaceGithubContracts, "_blank");
              }}
              className="w-8 h-8 rounded-md inline-flex justify-center items-center bg-opacity-5 hover:bg-[#DDF23D] hover:bg-opacity-30 hover:cursor-pointer hover:transform-all duration-700 md:mr-2 hover:bg-#464c27"
              aria-label="Gitbook Logo"
            >
              <GitbookLogo />
            </button>
            <button
              onClick={() => {
                window.open(swaplaceGithubContracts, "_blank");
              }}
              className="w-8 h-8 rounded-md inline-flex justify-center items-center bg-opacity-5 hover:bg-[#DDF23D] hover:bg-opacity-30 hover:cursor-pointer hover:transform-all duration-700 md:mr-2 hover:bg-#464c27"
              aria-label="Github Logo"
            >
              <GithubLogo />
            </button>
            <button
              onClick={() => {
                window.open(swaplaceTwitter, "_blank");
              }}
              className="w-8 h-8 rounded-md inline-flex justify-center items-center bg-opacity-5 hover:bg-[#DDF23D] hover:bg-opacity-30 hover:cursor-pointer hover:transform-all duration-700 md:mr-2 hover:bg-#464c27"
              aria-label="Twitter Logo"
            >
              <TwitterLogo />
            </button>
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
          <div className="flex justify-end">
            <GenericButton
              label={"Go to dApp"}
              variant={ButtonVariant.DEFAULT}
              onClick={() => {
                window.open(swaplaceDapp, "_blank");
              }}
              aditionalStyle="h-8 !w-32 button-small"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start">
          <Link
            className="lg:hidden inline-block"
            aria-label="Swaplace Logo"
            href={"/"}
          >
            <SwaplaceLogoMin />
          </Link>
        </div>
        <div className="flex items-center justify-end ">
          <button
            className="lg:hidden inline-block"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
            aria-label="Header Mobile Menu"
          >
            <BurgerMenu />
          </button>
        </div>

        <MobileMenu
          functionClose={() => {
            setMenuOpen(false);
          }}
          isOpen={menuOpen}
        />
      </div>
    </header>
  );
};
