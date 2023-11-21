import GenericButton, { ButtonVariant } from "../01-atoms/GenericButton";
import Lottie from "lottie-react";
import groovyWalkAnimation from "@/components/animation/typing.json";
import { swaplaceTelegram } from "@/components/utils";
import cc from "classcat";
import bgImage from "@/assets/Background.png";
import Image from "next/image";

const HomeSection = () => {
  return (
    <section className={cc(["flex flex-col items-center w-screen h-[640px] "])}>
      <div className="h-full w-full max-w-screen-2xl flex items-center flex-col justify-center ">
        <Image
          alt="Background Home"
          src={bgImage}
          quality={100}
          fill={true}
          style={{
            objectFit: "cover",
            zIndex: -1,
            backgroundColor: "#05332B",
          }}
        />
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
        <div className="w-[500px] text-center text-stone-100 text-2xl font-light font-['Onest'] leading-[33.60px]">
          <h1>
            Swaplace is a P2P Ownerless, Open-source and feeless environment for
            swaps between ERC20 or ERC721 standards.
          </h1>
        </div>
        <div className="mt-12">
          <GenericButton
            onClick={() => {
              window.open(swaplaceTelegram, "_blank");
            }}
            label="Meet Swaplace"
            aditionalStyle="mx-5"
            variant={ButtonVariant.ALTERNATIVE}
          />
          <GenericButton
            label={"Start now"}
            variant={ButtonVariant.DEFAULT}
            aditionalStyle={"w-[200px] h-[50px] px-5 py-2"}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
