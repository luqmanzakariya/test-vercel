import React from "react";
import BathIcon from "@/components/atoms/icons/bath";
import BedIcon from "@/components/atoms/icons/bed";
import FoodIcon from "@/components/atoms/icons/food";
import SqftIcon from "@/components/atoms/icons/sqft";
import VenueIcon from "@/components/atoms/icons/venue";
import { DictProps } from "@/types/dict";

const ListingDetailBusinessOverview = ({ dict }: { dict: DictProps }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg w-full p-8 mb-10">
      <div className="text-[26px] mb-10">{dict.common.businessOverview}</div>
      <div className="grid grid-cols-5 divide-x-2 text-center">
        <div className="w-full justify-items-center">
          <SqftIcon className="h-[30px] w-[30px] mb-2" />
          <div className="text-[18px]">Sqft . 3,720</div>
        </div>
        <div className="w-full justify-items-center">
          <BedIcon className="h-[30px] w-[30px] mb-2" />
          <div className="text-[18px]">Rating : 3.5</div>
        </div>
        <div className="w-full justify-items-center">
          <BathIcon className="h-[30px] w-[30px] mb-2" />
          <div className="text-[18px]">Rating : 4.1</div>
        </div>
        <div className="w-full justify-items-center">
          <FoodIcon className="h-[30px] w-[30px] mb-2" />
          <div className="text-[18px]">Rating : 4.0</div>
        </div>
        <div className="w-full justify-items-center">
          <VenueIcon className="h-[30px] w-[30px] mb-2" />
          <div className="text-[18px]">Type : Coffee Shop</div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetailBusinessOverview;
