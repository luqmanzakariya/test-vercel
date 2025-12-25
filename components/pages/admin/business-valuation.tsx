"use client";
import ShowIcon from "@/components/atoms/icons/show";
import TripleDotsIcon from "@/components/atoms/icons/triple-dots";
import Pagination from "@/components/molecules/pagination";
import { BusinessValuationResponse } from "@/types/business";
import { DictProps } from "@/types/dict";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const BusinessValuationPage = ({
  dict,
  businessValuationData,
}: {
  dict: DictProps;
  businessValuationData: BusinessValuationResponse;
}) => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "9";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const [entries, setEntries] = useState(businessValuationData?.data?.slice(start, end));
  useEffect(() => {
    setEntries(businessValuationData?.data?.slice(start, end));
  }, [businessValuationData?.data, end, page, per_page, start]);
  return (
    <div>
      <div className="mx-4 sm:mx-6 md:mx-[40px] my-4 sm:my-6 md:my-[40px]">
        {/* <ModalUpdateStatus dict={dict} handleRefetch={handleRefetch} /> */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full p-4 sm:p-6 md:p-[30px]">
          {/* Table Header - Hidden on mobile, visible on larger screens */}
          <div className="hidden sm:flex items-center justify-between bg-blue-950 text-white rounded-xl h-fit w-full px-4 sm:px-[15px] py-3 sm:py-[15px]">
            <div className="w-[200px] text-sm sm:text-base">
              {dict.valuationBusiness.businessName.toUpperCase()}
            </div>
            <div className="w-[200px] text-sm sm:text-base">
              {dict.valuationBusiness.email.toUpperCase()}
            </div>
            <div className="w-[150px] text-sm sm:text-base">
              {dict.valuationBusiness.phoneNumber.toUpperCase()}
            </div>
            <div className="w-[100px] text-sm sm:text-base">
              {dict.valuationBusiness.action.toUpperCase()}
            </div>
          </div>

          {/* Mobile Header - Visible only on mobile */}
          <div className="sm:hidden bg-blue-950 text-white text-center rounded-xl w-full px-4 py-3 mb-4">
            <div className="text-sm font-medium">
              {dict.valuationBusiness.businessList || "BUSINESS LIST"}
            </div>
          </div>

          {entries &&
            entries.map((item, idx) => (
              <div
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 sm:py-[30px] border-b border-gray-300 gap-3 sm:gap-0"
                key={idx}
              >
                {/* Mobile Card Layout */}
                <div className="sm:hidden space-y-2 w-full">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600 text-sm">
                      {dict.valuationBusiness.businessName}:
                    </span>
                    <span className="text-right text-sm">{item.business_name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600 text-sm">
                      {dict.valuationBusiness.email}:
                    </span>
                    <span className="text-right text-sm break-all">{item.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600 text-sm">
                      {dict.valuationBusiness.phoneNumber}:
                    </span>
                    <span className="text-right text-sm">
                      {item.phone_number ? item.phone_number : "-"}
                    </span>
                  </div>
                </div>

                {/* Desktop Layout - Hidden on mobile */}
                <div className="hidden sm:block w-[200px] ml-2">{item.business_name}</div>
                <div className="hidden sm:block w-[200px]">{item.email}</div>
                <div className="hidden sm:block w-[150px]">
                  {item.phone_number ? item.phone_number : "-"}
                </div>

                {/* Action Button - Different placement for mobile vs desktop */}
                <div className="flex justify-end sm:justify-center w-full sm:w-[100px] mt-2 sm:mt-0">
                  <Popover>
                    <PopoverButton className="outline-none">
                      <TripleDotsIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </PopoverButton>
                    <PopoverPanel
                      anchor="bottom end"
                      transition
                      className="mt-1 border bg-white p-4 rounded-[15px] shadow-lg transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 z-10"
                    >
                      <Link
                        href={{
                          pathname: `/admin/business-valuation/${item?.id}`,
                        }}
                      >
                        <div className="flex items-center gap-3 sm:gap-[12px]">
                          <div className="py-1 sm:py-[8px]">
                            <ShowIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                          </div>
                          <div className="text-sm sm:text-base">
                            {dict.valuationBusiness.detail}
                          </div>
                        </div>
                      </Link>
                    </PopoverPanel>
                  </Popover>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="mx-4 sm:mx-6 md:mx-[40px] my-6 sm:my-8 md:my-[40px] text-center">
        <Pagination
          hasNextPage={end < businessValuationData?.data?.length}
          hasPrevPage={start > 0}
          totalCount={businessValuationData?.data?.length || 0}
        />
      </div>
    </div>
  );
};

export default BusinessValuationPage;
