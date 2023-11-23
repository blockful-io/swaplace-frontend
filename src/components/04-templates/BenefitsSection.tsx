import cc from "classcat";
import { CardBenefits } from "@/components/02-molecules";
import { ButtonVariant, GenericButton } from "@/components/01-atoms";
import { swaplaceContracts } from "../utils";

const BenefitsSection = () => {
  return (
    <section
      className={cc([
        "flex h-full flex-col items-center pt-[100px] px-8 gap-12 ",
      ])}
      style={{
        backgroundImage: "url('/home-know-more.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
      }}
    >
      <div className="h-full w-[300px]"></div>
      <div className="h-[774px] w-full flex items-center flex-col space-x-4 justify-center md:h-full md:mb-20">
        <div className="w-[807px] title-h1 md:w-[600px]">
          With Swaplace, you can
          <span className="text-secondaryColored">create products</span> that
          solve significant issues in the ecosystem
        </div>
        <div className="my-12">
          <CardBenefits />
        </div>
        <div className="">
          <GenericButton
            label={"Build now"}
            variant={ButtonVariant.DEFAULT}
            aditionalStyle={"w-[200px] h-[50px] px-5 py-2  "}
            onClick={() => {
              window.open(swaplaceContracts, "_blank");
            }}
          />
        </div>
      </div>
    </section>
  );
};
export default BenefitsSection;
