import React from "react";
import CheckIcon from "@/components/atoms/icons/check";
import { DictProps } from "@/types/dict";

const ListingDetailAmenities = ({ amenities, dict }: { amenities: string[]; dict: DictProps }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg w-full p-8 mb-10">
      <div className="text-[34px] mb-2">{dict.common.amenities}</div>
      <div className="text-[18px] text-gray-500 mb-8">
        Risk management and compliance, when approached strategically, have the potential to go
        beyond mitigating threats.
      </div>
      <div className="grid grid-cols-4 w-full justify-items-stretch mb-4 text-[18px] gap-5">
        {amenities &&
          amenities.map((item, idx) => (
            <div className="flex items-center" key={idx}>
              <CheckIcon />
              <div className="ml-4">{item}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ListingDetailAmenities;
