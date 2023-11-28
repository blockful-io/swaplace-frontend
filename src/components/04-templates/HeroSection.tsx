import { useContext } from "react";
import cc from "classcat";
import Lottie from "lottie-react";
import groovyWalkAnimation from "@/components/animation/typing.json";
import { ThemeContext } from "@/contexts/theme-config";
import { GenericButton, ButtonVariant } from "@/components/01-atoms";
import { blockfulDiscord, swaplaceProject } from "@/components/utils";

export const HeroSection = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={cc(["w-full flex flex-col items-center h-[640px] mt-20"])}
    >
      <div
        style={{
          background: "url('/home-hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "top left",
        }}
        className="w-full h-full flex items-center flex-col justify-center"
      >
        <div>
          <Lottie
            animationData={groovyWalkAnimation}
            loop={true}
            autoPlay={true}
            rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
            style={{
              height: "100%",
              width: "100%",
              top: 0,
              left: 0,
              zIndex: -1,
            }}
          />
        </div>
        <div className="w-[600px] h-[101px] text-center text-stone-100 text-2xl font-light font-onest leading-[33.60px]">
          <h1>
            Swaplace is a P2P DEX, ownerless, open-source, and feeless
            environment designed for swaps between ERC20 or ERC721 standards.
          </h1>
        </div>
        <div className="mt-12">
          <GenericButton
            onClick={() => {
              window.open(blockfulDiscord, "_blank");
            }}
            label="Meet Swaplace"
            aditionalStyle="mx-5 button-medium w-[205px]"
            variant={ButtonVariant.ALTERNATIVE}
          />
          <GenericButton
            label={"Start now"}
            variant={ButtonVariant.DEFAULT}
            aditionalStyle={"w-[200px] h-[50px] px-5 py-2 button-medium"}
            onClick={() => {
              window.open(swaplaceProject, "_blank");
            }}
          />
        </div>
      </div>
    </section>
  );
};
