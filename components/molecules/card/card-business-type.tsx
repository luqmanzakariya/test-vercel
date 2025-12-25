import { IBusinessListingPayload } from "@/types/authentication";
import { DictProps } from "@/types/dict";
import React from "react";
import { UseFormRegister } from "react-hook-form";

const CardBusinessType = ({
  type,
  dict,
  register,
}: {
  type: string[];
  dict: DictProps;
  register: UseFormRegister<IBusinessListingPayload>;
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full p-4 sm:p-6 md:p-[60px] my-6 sm:my-8 md:my-10">
      <div className="text-lg sm:text-xl md:text-[24px] mb-6 sm:mb-8 font-semibold">
        {dict.addNewProperty.selectBusinessType}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full justify-items-stretch gap-3 sm:gap-4 md:gap-5 text-sm sm:text-base md:text-[18px]">
        {type &&
          type.map((item, idx) => (
            <div key={idx} className="flex items-center">
              <input
                className="mr-2 sm:mr-3 accent-black w-4 h-4 sm:w-5 sm:h-5"
                type="checkbox"
                value={item}
                {...register("business_type")}
              />
              <label className="break-words">{item}</label>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CardBusinessType;
