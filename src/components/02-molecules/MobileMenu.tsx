import { useEffect } from "react";
import cc from "classcat";
import Link from "next/link";
import {
  ButtonVariant,
  CloseIcon,
  GenericButton,
  SwaplaceLogoIcon,
} from "@/components/01-atoms";
import { blockfulContact, blockfulDiscord } from "@/components/utils";

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
        <div className="flex items-center justify-between px-4 py-4 border-b border-white border-opacity-5">
          <Link href={"/"} aria-label="Swaplace Logo Icon">
            <SwaplaceLogoIcon />
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

        <div className="w-full p-4 gap-2 flex flex-col">
          <Link
            className="p-small h-[40px] py-1 px-4 flex-grow flex justify-center flex-col items-start rounded-lg	 hover:bg-greenLight"
            aria-label="Home"
            href={"/"}
          >
            Home
          </Link>
          <Link
            className="p-small h-[40px] py-1 px-4 flex-grow flex justify-center flex-col items-start rounded-lg hover:bg-greenLight "
            aria-label="About"
            href={"/about"}
          >
            About
          </Link>
          <button
            className="p-small h-[40px] py-1 px-4 flex-grow flex justify-center flex-col items-start rounded-lg hover:bg-greenLight "
            aria-label="Community"
            onClick={() => {
              window.open(blockfulDiscord, "_blank");
            }}
          >
            Community
          </button>
          <button
            className="p-small h-[40px] py-1 px-4 flex-grow flex justify-center flex-col items-start rounded-lg hover:bg-greenLight "
            aria-label="Incentives"
            onClick={() => {
              window.open(blockfulDiscord, "_blank");
            }}
          >
            Incentives
          </button>
        </div>
      </div>

      <div className="p-4 border-white border-opacity-5 flex items-center justify-center">
        <GenericButton
          label={"Get in touch"}
          variant={ButtonVariant.DEFAULT}
          onClick={() => {
            window.open(blockfulContact, "_blank");
          }}
          aditionalStyle="button-medium w-[343px] h-[48px] rounded-xl	"
        />
      </div>
    </div>
  );
};
