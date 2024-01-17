import cc from "classcat";
import { ButtonVariant, GenericButton } from "@/components/01-atoms";
import { CardBenefits } from "@/components/02-molecules";
import { swaplaceContracts } from "@/components/utils";

export const BenefitsSection = () => {
  return (
    <section
      className={cc([
        "flex h-full flex-col items-center md:py-[100px] px-8 gap-12 smallmobile:px-4 ",
      ])}
    >
      <div className="md:w-[600px] md:h-full lg:w-[807px] text-center md:title-h2-normal title-h2-small h-[124px] w-[327px] flex justify-center items-center smallmobile:w-[280px] ">
        <h2>
          With Swaplace, you can
          <span className="text-secondaryColored">
            {" "}
            create products <br />
          </span>{" "}
          that solve significant issues in the ecosystem
        </h2>
      </div>
      <div className=" flex justify-center items-center ">
        <CardBenefits />
      </div>
      <div className="flex md:mb-0 mb-20">
        <GenericButton
          label={"Build now"}
          variant={ButtonVariant.DEFAULT}
          aditionalStyle={"px-5 py-2 button-medium"}
          onClick={() => {
            window.open(swaplaceContracts, "_blank");
          }}
        />
      </div>
    </section>
  );
};
