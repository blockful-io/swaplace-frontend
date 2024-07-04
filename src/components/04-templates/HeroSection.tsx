import cc from "classcat";
import dynamic from "next/dynamic";
const DynamicLottie = dynamic(() => import("lottie-react"), { ssr: false });
import groovyWalkAnimation from "@/components/animation/typing.json";
import { GenericButton, ButtonVariant } from "@/components/01-atoms";
import { swaplaceDapp, swaplaceDocs } from "@/components/utils";
import Image from "next/image";
import { useScreenSize } from "@/hooks/useScreenSize";

export const HeroSection = () => {
  const { isMobile } = useScreenSize();

  const enum heroBg {
    DESKTOP = "/home-hero-bg.png",
    MOBILE = "/home-hero-mobile-bg.png",
  }

  return (
    <section
      className={cc(["w-full flex flex-col items-center h-[640px] mt-20"])}
    >
      <div
        className={cc([
          "w-full h-full flex items-center flex-col justify-center",
        ])}
      >
        {isMobile ? (
          <Image
            alt="Hero Background"
            src={heroBg.MOBILE}
            fill={true}
            quality={100}
            style={{
              objectFit: "cover",
              backgroundPosition: "top left",
              backgroundSize: "cover",
            }}
          />
        ) : (
          <Image
            alt="Hero Background"
            src={heroBg.DESKTOP}
            fill={true}
            quality={100}
            style={{
              objectFit: "cover",
              backgroundPosition: "top left",
              backgroundSize: "cover",
            }}
          />
        )}

        <div className="w-[327px] md:w-fit smallmobile:w-[280px]">
          <DynamicLottie
            animationData={groovyWalkAnimation}
            loop={true}
            autoPlay={true}
            rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
            style={{
              height: "100%",
              width: "100%",
              top: 0,
              left: 0,
            }}
          />
        </div>
        <div className="w-[327px] h-[101px] p-medium md:w-[600px] md:h-[101px] text-center md:title-h2-medium smallmobile:w-[280px] z-10">
          <h1>
            Swaplace is a P2P DEX, Ownerless, Open-source, Cross-chain and
            Feeless environment designed for swaps.
          </h1>
        </div>
        <div className="md:mt-12 w-[327px] h-[108px] gap-3 flex flex-col justify-center items-center md:flex-row-reverse md:gap-0 smallmobile:w-[280px] smallmobile:mt-4">
          <div className="flex">
            <GenericButton
              label={"Go to dApp"}
              variant={ButtonVariant.DEFAULT}
              aditionalStyle={"px-5 py-2 button-medium z-10"}
              onClick={() => {
                window.open(swaplaceDapp, "_blank");
              }}
            />
          </div>
          <div className="flex">
            <GenericButton
              onClick={() => {
                window.open(swaplaceDocs, "_blank");
              }}
              label="Learn"
              aditionalStyle="w-[205px] button-medium z-10"
              variant={ButtonVariant.ALTERNATIVE}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
