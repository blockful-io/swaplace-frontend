import React from "react";
import ArrowCTA from "./ArrowCTA";
import cc from "classcat";
import { ICardProject, networkImages, swaplaceContracts } from "../utils";

export const CardProject = ({ projects }: { projects: ICardProject[] }) => {
  return (
    <div>
      {projects.map((item, index) => (
        <button
          key={index}
          className="w-[394px] h-[264px] bg-greenDark rounded-xl flex-col justify-start items-start inline-flex py-7 px-6 hover:bg-greenLight group"
          onClick={() => {
            window.open(swaplaceContracts, "_blank");
          }}
        >
          <div className="w-[355px] h-[48px] flex items-center justify-between ">
            <div className="flex items-start ">{item.icon}</div>
            <div className="flex items-end">
              <div className="w-[52px] h-[52px] p-5 bg-white bg-opacity-10 rounded-[100px] flex items-center justify-center gap-2.5 group-hover:duration-500">
                <div
                  className={cc([
                    "w-5 h-5 relative origin-top-left -rotate-45 hover:-translate-x-3/20 transition-all duration-500 ease-in-out items-center",
                  ])}
                />
                <ArrowCTA color={"#FFFFFF"} />
              </div>
            </div>
          </div>
          <div className="w-[355px] h-[112px] mb-[20px] overflow-clip">
            <div className="w-full h-20px flex  justify-between text-terciaryColored ">
              {item.title}
            </div>
            <div
              className={cc(["w-full h-88px flex p-extra-small text-left "])}
            >
              {item.description}
            </div>
          </div>
          <div className="flex w-[355px] h-[24px] gap-2">
            {item.networks.map((network, networkIndex) => (
              <div key={networkIndex}>{networkImages[network]}</div>
            ))}
          </div>
        </button>
      ))}
    </div>
  );
};
