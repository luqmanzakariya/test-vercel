import React from "react";
// import MinusIcon from "@/components/atoms/icons/minus";
// import PlusIcon from "@/components/atoms/icons/plus";
import { DictProps } from "@/types/dict";
import { BusinessListing } from "@/types/business";
import { thousandSeparator } from "@/utils/helper/formatNumber";
import moment from "moment";

const ListingDetailPropertyFeatures = ({
  dict,
  businessData,
}: {
  dict: DictProps;
  businessData: BusinessListing;
}) => {
  return (
    <div className="rounded overflow-hidden shadow-lg w-full p-8 mb-4 lg:mb-10">
      <div className="text-[34px] mb-2">{dict.common.propertyFeature}</div>
      <div className="border-y border-gray-300">
        {/* <div className="flex items-center justify-between">
          <div className="text-[24px] py-4">{dict.common.propertyFeature}</div>
          <button className="bg-black rounded-full px-2 py-[13px]">
            <MinusIcon />
          </button>
        </div> */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap lg:gap-4 w-full justify-items-stretch my-4 text-[21px]">
          <div className="text-gray-500">{dict.addNewProperty.businessScales}:</div>
          <div className="text-start lg:text-end">{businessData.business_detail.scales}</div>
          <div className="text-gray-500">{dict.addNewProperty.businessType}:</div>
          <div className="text-start lg:text-end">{businessData.business_type}</div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap lg:gap-4 w-full justify-items-stretch my-4 text-[21px]">
          <div className="text-gray-500">{dict.addNewProperty.legalEntity}:</div>
          <div className="text-start lg:text-end">{businessData.business_detail.legal_entity}</div>
          <div className="text-gray-500">{dict.addNewProperty.yearEstablised}:</div>
          <div className="text-start lg:text-end">{businessData.year_established}</div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap lg:gap-4 w-full justify-items-stretch my-4 text-[21px]">
          <div className="text-gray-500">{dict.addNewProperty.withholdingTax}:</div>
          <div className="text-start lg:text-end">
            {businessData.business_detail.withholding_tax_report}
          </div>
          <div className="text-gray-500">{dict.addNewProperty.assetOwnership}:</div>
          <div className="text-start lg:text-end">
            {businessData.business_detail.asset_ownership}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap lg:gap-4 w-full justify-items-stretch my-4 text-[21px]">
          <div className="text-gray-500">{dict.addNewProperty.shareholder}:</div>
          <div className="text-start lg:text-end">{businessData.business_detail.shareholder}</div>
          <div className="text-gray-500">{dict.addNewProperty.numberOfEmployee}:</div>
          <div className="text-start lg:text-end">
            {businessData.business_detail.number_of_employees}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap lg:gap-4 w-full justify-items-stretch my-4 text-[21px]">
          <div className="text-gray-500">{dict.addNewProperty.employeeStatus}:</div>
          <div className="text-start lg:text-end">
            {businessData.business_detail.employee_status}
          </div>
          <div className="text-gray-500">{dict.addNewProperty.bookeepingSystem}:</div>
          <div className="text-start lg:text-end">
            {businessData.business_detail.bookkeeping_system}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap lg:gap-4 w-full justify-items-stretch my-4 text-[21px]">
          <div className="text-gray-500">{dict.addNewProperty.moveable}:</div>
          <div className="text-start lg:text-end">
            {businessData.business_detail.rent_information.movable}
          </div>
          <div className="text-gray-500">{dict.addNewProperty.leasedUntil}:</div>
          <div className="text-start lg:text-end">
            {moment(businessData.business_detail.rent_information.leased_until).format(
              "D MMMM YYYY"
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap lg:gap-4 w-full justify-items-stretch my-4 text-[21px]">
          <div className="text-gray-500">{dict.addNewProperty.annualIncome}:</div>
          <div className="text-start lg:text-end">
            {businessData.currency} {thousandSeparator(businessData.business_detail.annual_income)}
          </div>
          <div className="text-gray-500">{dict.addNewProperty.averageCustomer}:</div>
          <div className="text-start lg:text-end">
            {businessData.business_detail.rent_information.average_customer_per_month}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full justify-items-stretch my-4 text-[21px]">
          <div className="text-gray-500">{dict.addNewProperty.supportTraining}:</div>
          <div className="text-start lg:text-end">
            {businessData.business_detail.support_and_training}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full justify-items-stretch my-4 text-[21px]">
          <div className="text-gray-500">{dict.addNewProperty.competitors}:</div>
          <div className="text-start lg:text-end">{businessData.business_detail.competitors}</div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full justify-items-stretch my-4 text-[21px]">
          <div className="text-gray-500">{dict.addNewProperty.inventory}:</div>
          <div className="text-start lg:text-end">
            {businessData.business_detail.inventory_and_facilities}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full justify-items-stretch my-4 text-[21px]">
          <div className="text-gray-500">{dict.addNewProperty.rentStatus}:</div>
          <div className="text-start lg:text-end">
            {businessData.business_detail.selling_price_status.rent_status}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full justify-items-stretch my-4 text-[21px]">
          <div className="text-gray-500">{dict.addNewProperty.inventoryStatus}:</div>
          <div className="text-start lg:text-end">
            {businessData.business_detail.selling_price_status.inventory_status}
          </div>
        </div>
      </div>
      <div className="text-[34px] mb-2 mt-4">{dict.user.addressLocation}</div>
      <div className="border-y border-gray-300">
        {/* <div className="flex items-center justify-between">
          <div className="text-[24px] py-4">{dict.common.utilityDetail}</div>
          <button className="bg-black rounded-full p-2">
            <PlusIcon />
          </button>
        </div> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full justify-items-stretch my-4 text-[21px]">
          <div className="text-gray-500">{dict.user.address}:</div>
          <div className="text-start lg:text-end">{businessData.address}</div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 w-full justify-items-stretch my-4 text-[21px]">
          <div className="text-gray-500">{dict.user.country}:</div>
          <div className="text-start lg:text-end">{businessData.country}</div>
          <div className="text-gray-500">{dict.user.state}:</div>
          <div className="text-start lg:text-end">{businessData.state}</div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 w-full justify-items-stretch my-4 text-[21px]">
          <div className="text-gray-500">{dict.user.city}:</div>
          <div className="text-start lg:text-end">{businessData.city}</div>
          <div className="text-gray-500">{dict.user.zipCode}:</div>
          <div className="text-start lg:text-end">{businessData.zip_code}</div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetailPropertyFeatures;
