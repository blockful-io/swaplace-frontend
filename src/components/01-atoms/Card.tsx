import Image from "next/image";
import React from "react";

interface ICard {
  title: string;
  label: string;
  img: string;
}

export const Card = ({ title, label, img }: ICard) => {
  return (
    <div className="w-[292px] h-[340px] bg-greenLight rounded-2xl border border-cyan-950 flex-col justify-start items-start  inline-flex">
      <div className="py-7 px-6 ">
        <div className="self-stretch text-stone-100 text-2xl font-medium font-onest ">
          {title}
        </div>
        <div className="self-stretch text-neutral-400 text-lg font-normal font-onest leading-normal ">
          {label}
        </div>
      </div>
      <div className="w-full flex justify-end overflow-hidden">
        <div>
          <Image
            alt="Illustration 1"
            src={img}
            quality={100}
            style={{
              objectFit: "fill",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
};
