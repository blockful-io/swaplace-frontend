import cc from "classcat";
import { CardBenefits } from "@/components/02-molecules";
import { ButtonVariant, GenericButton } from "@/components/01-atoms";
import { swaplaceContracts } from "../utils";

const BenefitsSection = () => {
  return (
    <section
      className={cc(["flex flex-col items-center h-[574px] py-24 px-8"])}
    >
      <div className="h-full w-full max-w-screen-2xl flex items-center flex-col space-x-4 justify-center ">
        <div className="w-[807px] h-[82px] title-h3">
          With Swaplace, you can create products that solve significant issues
          in the ecosystem
        </div>
        <CardBenefits />
        <div>
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
