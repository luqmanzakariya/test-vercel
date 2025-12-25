import { BusinessValuationDetail } from "@/types/business";
import { DictProps } from "@/types/dict";
import React from "react";

const BusinessValuationDetailPage = ({
  dict,
  businessValuation,
}: {
  dict: DictProps;
  businessValuation: BusinessValuationDetail;
}) => {
  return (
    <div className="mx-4 sm:mx-6 md:mx-[40px] my-4 sm:my-6 md:my-[40px]">
      <div className="bg-white rounded overflow-hidden shadow-lg w-full p-4 sm:p-6 md:p-8 mb-4 lg:mb-10">
        {/* Header */}
        <div className="text-xl sm:text-2xl md:text-[34px] mb-4 sm:mb-2 font-semibold">
          {dict.valuationBusiness.businessValuationDetail}
        </div>

        {/* Content Grid */}
        <div className="border-y border-gray-300">
          {/* Row 1: Name & Business Name */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-4 w-full items-center py-3 sm:py-4">
            <div className="text-gray-500 text-base sm:text-lg md:text-[21px]">
              {dict.valuationBusiness.name}:
            </div>
            <div
              className="text-start lg:text-end text-base sm:text-lg md:text-[21px] truncate"
              title={businessValuation.name}
            >
              {businessValuation.name}
            </div>
            <div className="text-gray-500 text-base sm:text-lg md:text-[21px]">
              {dict.valuationBusiness.businessName}:
            </div>
            <div
              className="text-start lg:text-end text-base sm:text-lg md:text-[21px] truncate"
              title={businessValuation.business_name}
            >
              {businessValuation.business_name}
            </div>
          </div>

          {/* Row 2: Email & Phone Number */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-4 w-full items-center py-3 sm:py-4 border-t border-gray-200">
            <div className="text-gray-500 text-base sm:text-lg md:text-[21px]">
              {dict.valuationBusiness.email}:
            </div>
            <div
              className="text-start lg:text-end text-base sm:text-lg md:text-[21px] truncate"
              title={businessValuation.email}
            >
              {businessValuation.email}
            </div>
            <div className="text-gray-500 text-base sm:text-lg md:text-[21px]">
              {dict.valuationBusiness.phoneNumber}:
            </div>
            <div
              className="text-start lg:text-end text-base sm:text-lg md:text-[21px] truncate"
              title={businessValuation.phone_number}
            >
              {businessValuation.phone_number || "-"}
            </div>
          </div>

          {/* Row 3: Industry Type & Current Asset */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-4 w-full items-center py-3 sm:py-4 border-t border-gray-200">
            <div className="text-gray-500 text-base sm:text-lg md:text-[21px]">
              {dict.valuationBusiness.industryType}:
            </div>
            <div
              className="text-start lg:text-end text-base sm:text-lg md:text-[21px] truncate"
              title={businessValuation.industri_type}
            >
              {businessValuation.industri_type}
            </div>
            <div className="text-gray-500 text-base sm:text-lg md:text-[21px]">
              {dict.valuationBusiness.currentAsset}:
            </div>
            <div
              className="text-start lg:text-end text-base sm:text-lg md:text-[21px] truncate"
              title={businessValuation.current_assets}
            >
              {businessValuation.current_assets}
            </div>
          </div>

          {/* Row 4: Current Liabilities & Other Assets */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-4 w-full items-center py-3 sm:py-4 border-t border-gray-200">
            <div className="text-gray-500 text-base sm:text-lg md:text-[21px]">
              {dict.valuationBusiness.currentLiabilities}:
            </div>
            <div
              className="text-start lg:text-end text-base sm:text-lg md:text-[21px] truncate"
              title={businessValuation.current_liabilities}
            >
              {businessValuation.current_liabilities}
            </div>
            <div className="text-gray-500 text-base sm:text-lg md:text-[21px]">
              {dict.valuationBusiness.otherAssets}:
            </div>
            <div
              className="text-start lg:text-end text-base sm:text-lg md:text-[21px] truncate"
              title={businessValuation.other_assets}
            >
              {businessValuation.other_assets}
            </div>
          </div>

          {/* Row 5: Gross Sale (Full width on mobile) */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-4 w-full items-center py-3 sm:py-4 border-t border-gray-200">
            <div className="text-gray-500 text-base sm:text-lg md:text-[21px] lg:col-span-2">
              {dict.valuationBusiness.grossSale}:
            </div>
            <div className="text-start lg:text-end text-base sm:text-lg md:text-[21px] truncate lg:col-span-2">
              {businessValuation.gross_sale}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessValuationDetailPage;
