import cc from "classcat";
import { ButtonVariant, GenericButton } from "@/components/01-atoms";
import { CardBenefits } from "@/components/02-molecules";
import { swaplaceContracts } from "@/components/utils";

export const BenefitsSection = () => {
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
      <div className="md:h-[774px] w-full flex items-center flex-col space-x-4 justify-center h-full md:mb-20">
        <div className="lg:w-[807px] text-center align-middle	title-h2-normal md:w-[600px]">
          <h1>
            With Swaplace, you can
            <span className="text-secondaryColored">
              {" "}
              create products <br />
            </span>{" "}
            that solve significant issues in the ecosystem
          </h1>
        </div>
        <div className="my-12">
          <CardBenefits />
        </div>
        <div>
          <GenericButton
            label={"Build now"}
            variant={ButtonVariant.DEFAULT}
            aditionalStyle={"w-[200px] h-[50px] px-5 py-2 button-medium"}
            onClick={() => {
              window.open(swaplaceContracts, "_blank");
            }}
          />
        </div>
      </div>
    </section>
  );
};
