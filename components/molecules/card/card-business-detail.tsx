import RoundedDropdown from "@/components/atoms/input/rounded-dropdown";
import { IBusinessListingPayload } from "@/types/authentication";
import { DictProps } from "@/types/dict";
import React from "react";
import { FieldErrors, UseFormRegister, UseFormSetError } from "react-hook-form";

const CardBusinessDetail = ({
  dict,
  register,
  setError,
  errors,
}: {
  dict: DictProps;
  register: UseFormRegister<IBusinessListingPayload>;
  setError: UseFormSetError<IBusinessListingPayload>;
  errors: FieldErrors<IBusinessListingPayload>;
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full p-4 sm:p-6 md:p-[60px] my-6 sm:my-8 md:my-10">
      <div className="text-lg sm:text-xl md:text-[24px] mb-6 sm:mb-8 font-semibold">
        {dict.addNewProperty.businessDetail}
      </div>

      {/* Grid Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-4 sm:gap-5">
        {/* Business Scales */}
        <div>
          <RoundedDropdown
            label={`${dict.addNewProperty.businessScales}*`}
            option={["Big", "Medium", "Small"]}
            register={{
              ...register("business_detail.scales", {
                required: dict.error.scalesRequired,
                onChange: () => {
                  setError("business_detail.scales", { message: "" });
                },
              }),
            }}
          />
          <div className="text-xs sm:text-[12px] text-redError mt-1">
            {errors.business_detail?.scales?.message}
          </div>
        </div>

        {/* Legal Entity */}
        <div>
          <RoundedDropdown
            label={`${dict.addNewProperty.legalEntity}*`}
            option={["None", "PT", "CV"]}
            register={{
              ...register("business_detail.legal_entity", {
                required: dict.error.legalRequired,
                onChange: () => {
                  setError("business_detail.legal_entity", { message: "" });
                },
              }),
            }}
          />
          <div className="text-xs sm:text-[12px] text-redError mt-1">
            {errors.business_detail?.legal_entity?.message}
          </div>
        </div>

        {/* Withholding Tax */}
        <div>
          <RoundedDropdown
            label={`${dict.addNewProperty.withholdingTax}*`}
            option={["Yes", "No"]}
            register={{
              ...register("business_detail.withholding_tax_report", {
                required: dict.error.taxReportRequired,
                onChange: () => {
                  setError("business_detail.withholding_tax_report", { message: "" });
                },
              }),
            }}
          />
          <div className="text-xs sm:text-[12px] text-redError mt-1">
            {errors.business_detail?.withholding_tax_report?.message}
          </div>
        </div>

        {/* Bookkeeping System */}
        <div>
          <RoundedDropdown
            label={`${dict.addNewProperty.bookeepingSystem}*`}
            option={["Manual", "Digital System", "Cloud-based Accounting Software"]}
            register={{
              ...register("business_detail.bookkeeping_system", {
                required: dict.error.bookeepingSystemRequired,
                onChange: () => {
                  setError("business_detail.bookkeeping_system", { message: "" });
                },
              }),
            }}
          />
          <div className="text-xs sm:text-[12px] text-redError mt-1">
            {errors.business_detail?.bookkeeping_system?.message}
          </div>
        </div>

        {/* Annual Income */}
        <div>
          <label className="text-sm sm:text-base">{dict.addNewProperty.annualIncome}*</label>
          <input
            type="text"
            className="appearance-none border border-black rounded-lg w-full py-3 sm:py-[14px] px-4 sm:px-[25px] mt-2 leading-tight focus:outline-none focus:bg-white text-sm sm:text-base"
            placeholder="In rupiah"
            {...register("business_detail.annual_income", {
              required: dict.error.incomeRequired,
              onChange: () => {
                setError("business_detail.annual_income", { message: "" });
              },
            })}
          />
          <div className="text-xs sm:text-[12px] text-redError mt-1">
            {errors.business_detail?.annual_income?.message}
          </div>
        </div>

        {/* Year Established */}
        <div>
          <label className="text-sm sm:text-base">{dict.addNewProperty.yearEstablised}*</label>
          <input
            type="text"
            className="appearance-none border border-black rounded-lg w-full py-3 sm:py-[14px] px-4 sm:px-[25px] mt-2 leading-tight focus:outline-none focus:bg-white text-sm sm:text-base"
            placeholder="2025"
            {...register("year_established", {
              required: dict.error.yearEstablisedRequired,
              onChange: () => {
                setError("year_established", { message: "" });
              },
            })}
          />
          <div className="text-xs sm:text-[12px] text-redError mt-1">
            {errors.year_established?.message}
          </div>
        </div>

        {/* Shareholder */}
        <div>
          <label className="text-sm sm:text-base">{dict.addNewProperty.shareholder}*</label>
          <input
            type="text"
            className="appearance-none border border-black rounded-lg w-full py-3 sm:py-[14px] px-4 sm:px-[25px] mt-2 leading-tight focus:outline-none focus:bg-white text-sm sm:text-base"
            placeholder="2"
            {...register("business_detail.shareholder", {
              required: dict.error.shareholderRequired,
              onChange: () => {
                setError("business_detail.shareholder", { message: "" });
              },
            })}
          />
          <div className="text-xs sm:text-[12px] text-redError mt-1">
            {errors.business_detail?.shareholder?.message}
          </div>
        </div>

        {/* Number of Employee */}
        <div>
          <label className="text-sm sm:text-base">{dict.addNewProperty.numberOfEmployee}*</label>
          <input
            type="text"
            className="appearance-none border border-black rounded-lg w-full py-3 sm:py-[14px] px-4 sm:px-[25px] mt-2 leading-tight focus:outline-none focus:bg-white text-sm sm:text-base"
            placeholder="15"
            {...register("business_detail.number_of_employees", {
              required: dict.error.numberOfEmployeeRequired,
              onChange: () => {
                setError("business_detail.number_of_employees", { message: "" });
              },
            })}
          />
          <div className="text-xs sm:text-[12px] text-redError mt-1">
            {errors.business_detail?.number_of_employees?.message}
          </div>
        </div>

        {/* Employee Status */}
        <div>
          <RoundedDropdown
            label={`${dict.addNewProperty.employeeStatus}*`}
            option={["Full-time", "Part-time", "Intern"]}
            register={{
              ...register("business_detail.employee_status", {
                required: dict.error.employeeStatusRequired,
                onChange: () => {
                  setError("business_detail.employee_status", { message: "" });
                },
              }),
            }}
          />
          <div className="text-xs sm:text-[12px] text-redError mt-1">
            {errors.business_detail?.employee_status?.message}
          </div>
        </div>

        {/* Asset Ownership */}
        <div>
          <RoundedDropdown
            label={`${dict.addNewProperty.assetOwnership}*`}
            option={["Lease", "Private", "Owned"]}
            register={{
              ...register("business_detail.asset_ownership", {
                required: dict.error.assetOwnershipRequired,
                onChange: () => {
                  setError("business_detail.asset_ownership", { message: "" });
                },
              }),
            }}
          />
          <div className="text-xs sm:text-[12px] text-redError mt-1">
            {errors.business_detail?.asset_ownership?.message}
          </div>
        </div>

        {/* Leased Until */}
        <div>
          <label className="text-sm sm:text-base">{dict.addNewProperty.leasedUntil}*</label>
          <input
            type="date"
            className="appearance-none border border-black rounded-lg w-full py-3 sm:py-[14px] px-4 sm:px-[25px] mt-2 leading-tight focus:outline-none focus:bg-white text-sm sm:text-base"
            {...register("business_detail.rent_information.leased_until", {
              required: dict.error.leasedUntilRequired,
              onChange: () => {
                setError("business_detail.rent_information.leased_until", { message: "" });
              },
            })}
          />
          <div className="text-xs sm:text-[12px] text-redError mt-1">
            {errors.business_detail?.rent_information?.leased_until?.message}
          </div>
        </div>

        {/* Average Customer */}
        <div>
          <label className="text-sm sm:text-base">{dict.addNewProperty.averageCustomer}*</label>
          <input
            type="text"
            className="appearance-none border border-black rounded-lg w-full py-3 sm:py-[14px] px-4 sm:px-[25px] mt-2 leading-tight focus:outline-none focus:bg-white text-sm sm:text-base"
            placeholder="100"
            {...register("business_detail.rent_information.average_customer_per_month", {
              required: dict.error.averageCustomerRequired,
              onChange: () => {
                setError("business_detail.rent_information.average_customer_per_month", {
                  message: "",
                });
              },
            })}
          />
          <div className="text-xs sm:text-[12px] text-redError mt-1">
            {errors.business_detail?.rent_information?.average_customer_per_month?.message}
          </div>
        </div>

        {/* Moveable */}
        <div>
          <RoundedDropdown
            label={`${dict.addNewProperty.moveable}*`}
            option={["Yes", "No"]}
            register={{
              ...register("business_detail.rent_information.movable", {
                required: dict.error.movableRequired,
                onChange: () => {
                  setError("business_detail.rent_information.movable", { message: "" });
                },
              }),
            }}
          />
          <div className="text-xs sm:text-[12px] text-redError mt-1">
            {errors.business_detail?.rent_information?.movable?.message}
          </div>
        </div>
      </div>

      {/* Support Training */}
      <div className="mt-4 sm:mt-5">
        <label className="text-sm sm:text-base">{dict.addNewProperty.supportTraining}</label>
        <textarea
          className="appearance-none border border-black rounded-lg w-full h-32 sm:h-[150px] py-3 sm:py-[14px] px-4 sm:px-[25px] mt-2 leading-tight focus:outline-none focus:bg-white text-sm sm:text-base resize-vertical"
          placeholder={dict.addNewProperty.trainingDescription}
          {...register("business_detail.support_and_training")}
        />
      </div>

      {/* Competitors */}
      <div className="mt-4 sm:mt-5">
        <label className="text-sm sm:text-base">{dict.addNewProperty.competitors}</label>
        <input
          type="text"
          className="appearance-none border border-black rounded-lg w-full py-3 sm:py-[14px] px-4 sm:px-[25px] mt-2 leading-tight focus:outline-none focus:bg-white text-sm sm:text-base"
          placeholder={dict.addNewProperty.competitorDescription}
          {...register("business_detail.competitors")}
        />
      </div>

      {/* Inventory */}
      <div className="mt-4 sm:mt-5">
        <label className="text-sm sm:text-base">{dict.addNewProperty.inventory}</label>
        <textarea
          className="appearance-none border border-black rounded-lg w-full h-32 sm:h-[150px] py-3 sm:py-[14px] px-4 sm:px-[25px] mt-2 leading-tight focus:outline-none focus:bg-white text-sm sm:text-base resize-vertical"
          placeholder={dict.addNewProperty.inventoryDescription}
          {...register("business_detail.inventory_and_facilities")}
        />
      </div>

      {/* Rent Status */}
      <div className="mt-4 sm:mt-5">
        <label className="text-sm sm:text-base">{dict.addNewProperty.rentStatus}</label>
        <input
          type="text"
          className="appearance-none border border-black rounded-lg w-full py-3 sm:py-[14px] px-4 sm:px-[25px] mt-2 leading-tight focus:outline-none focus:bg-white text-sm sm:text-base"
          placeholder={dict.addNewProperty.leaseDescription}
          {...register("business_detail.selling_price_status.rent_status")}
        />
      </div>

      {/* Inventory Status */}
      <div className="mt-4 sm:mt-5">
        <label className="text-sm sm:text-base">{dict.addNewProperty.inventoryStatus}</label>
        <input
          type="text"
          className="appearance-none border border-black rounded-lg w-full py-3 sm:py-[14px] px-4 sm:px-[25px] mt-2 leading-tight focus:outline-none focus:bg-white text-sm sm:text-base"
          placeholder={dict.addNewProperty.inventoryStatusDescription}
          {...register("business_detail.selling_price_status.inventory_status")}
        />
      </div>
    </div>
  );
};

export default CardBusinessDetail;
