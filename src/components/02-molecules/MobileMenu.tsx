import { useEffect } from "react";
import cc from "classcat";
import Link from "next/link";
import {
  ButtonVariant,
  CloseIcon,
  DiscordLogo,
  GenericButton,
  GitbookLogo,
  GithubLogo,
  SwaplaceLogoIcon,
  TwitterLogo,
} from "@/components/01-atoms";
import {
  blockfulDiscord,
  blockfulWebsite,
  swaplaceDapp,
  swaplaceDocs,
  swaplaceGithubContracts,
  swaplaceTwitter,
} from "@/components/utils";

interface IMobileMenu {
  isOpen?: Boolean;
  functionClose: () => void;
}

export const MobileMenu = ({ isOpen = true, functionClose }: IMobileMenu) => {
  function useLockBodyScroll(isLocked: Boolean) {
    useEffect(() => {
      if (isLocked) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }

      return () => {
        document.body.classList.remove("overflow-hidden");
      };
    }, [isLocked]);
  }

  useLockBodyScroll(isOpen);

  return (
    <div
      className={cc([
        "bg-greenDark fixed top-0 right-0 h-full w-full  bg-dark-green transition-transform duration-500 flex flex-col justify-between lg:w-full lg:flex  rounded-xl z-10 ",
        isOpen ? "translate-x-0" : "translate-x-full",
      ])}
    >
      <div>
        <div className="flex items-center justify-between px-8 py-4 border-b border-white border-opacity-5">
          <Link href={"/"} aria-label="Swaplace Logo Icon">
            <SwaplaceLogoIcon className="w-[40px] h-[40px]" />
          </Link>
          <button
            onClick={() => {
              functionClose();
            }}
            aria-label="Close Icon"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="w-full p-4 gap-8 flex flex-col">
          <Link
            className="p-small !text-[24px] h-[40px] py-1 px-4 flex-grow flex justify-center flex-col items-start rounded-lg	 hover:bg-greenLight"
            aria-label="Home"
            href={"/"}
          >
            Home
          </Link>
          <Link
            className="p-small !text-[24px] h-[40px] py-1 px-4 flex-grow flex justify-center flex-col items-start rounded-lg hover:bg-greenLight "
            aria-label="About"
            href={"/about"}
          >
            About
          </Link>
          <button
            className="p-small !text-[24px] h-[40px] py-1 px-4 flex-grow flex justify-center flex-col items-start rounded-lg hover:bg-greenLight "
            aria-label="Blockful"
            onClick={() => {
              window.open(blockfulWebsite, "_blank");
            }}
          >
            Blockful
          </button>
        </div>
      </div>

      <div className="p-4 border-white border-opacity-5 flex flex-col items-center justify-center">
        <div className="w-full p-8 gap-4 flex justify-center items-center">
          <button
            onClick={() => {
              window.open(swaplaceDocs, "_blank");
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
        <div>
          <GenericButton
            label={"Go to dApp"}
            variant={ButtonVariant.DEFAULT}
            onClick={() => {
              window.open(swaplaceDapp, "_blank");
            }}
            aditionalStyle="button-medium w-[343px] h-8 !w-40 rounded-xl	"
          />
        </div>
      </div>
    </div>
  );
};
