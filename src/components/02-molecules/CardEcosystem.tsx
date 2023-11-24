import React from "react";
import cc from "classcat";

export const CardEcosystem = () => {
  return (
    <div
      className={cc([
        "xl:w-[1216px] xl:h-[320px] xl:py-[60px] xl:px-12 xl:my-8 lg:w-[850px] lg:h-[350px] md:w-[600px] md:h-[250px] md:pt-4 border md:px-4 rounded-[20px] border-greenLight bg-greenDark  ",
      ])}
      style={{
        backgroundImage: "url('/ecosystem-bg.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
      }}
    >
      <div className="flex justify-center lg:title-h1 mb-10 md:title-h2">
        <h1>
          Swaplace
          <span className="text-secondaryColored"> ecosystem</span>{" "}
        </h1>
      </div>
      <div>
        <div className="flex justify-center items-center ">
          <input
            type="search"
            className="w-[600px] h-[68px] pl-5 pr-3 py-3 bg-greenLight rounded-xl shadow border border-teal-900 relative z-10 text-black-200 "
            placeholder="Search for projects, categories"
            aria-label="Search"
            aria-describedby="button-addon1"
          />
          <div className=" bg-yellow-300 rounded-xl flex justify-center items-center w-16 h-16">
            <button
              type="submit"
              aria-label="Ecosystem"
              style={{
                backgroundImage: "url('/Search.svg')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top",
                width: "50%",
                height: "50%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
