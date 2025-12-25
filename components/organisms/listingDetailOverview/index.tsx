import { DictProps } from "@/types/dict";
import React from "react";
import { BusinessListing } from "@/types/business";

const ListingDetailOverview = ({
  dict,
  businessData,
}: {
  dict: DictProps;
  businessData: BusinessListing;
}) => {
  return (
    <div className="rounded overflow-hidden shadow-lg w-full p-8 mb-4 lg:mb-10">
      <div className="text-[28px] lg:text-[34px] mb-2">{dict.common.overview}</div>
      <div className="text-[18px] lg:text-[21px] text-gray-500">{businessData?.description}</div>
    </div>
  );
};

export default ListingDetailOverview;
