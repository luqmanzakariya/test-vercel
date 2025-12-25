import { IBusinessListingPayload } from "@/types/authentication";
import { DictProps } from "@/types/dict";
import React from "react";
import { FieldErrors, UseFormRegister, UseFormSetError } from "react-hook-form";

const CardAddProperty = ({
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
    <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full p-4 sm:p-6 md:p-[60px]">
      <div className="text-lg sm:text-xl md:text-[24px] mb-6 sm:mb-8 font-semibold">
        {dict.addNewProperty.overview}
      </div>

      {/* Business Headline */}
      <div className="mt-4 sm:mt-5">
        <label className="text-sm sm:text-base">{dict.addNewProperty.businessHeadline}*</label>
        <input
          type="text"
          className="appearance-none border border-black rounded-lg w-full py-3 sm:py-[14px] px-4 sm:px-[25px] mt-2 leading-tight focus:outline-none focus:bg-white text-sm sm:text-base"
          placeholder={dict.addNewProperty.yourBusinessName}
          {...register("title", {
            required: dict.error.titleRequired,
            onChange: () => {
              setError("title", { message: "" });
            },
          })}
        />
        <div className="text-xs sm:text-[12px] text-redError mt-1">{errors.title?.message}</div>
      </div>

      {/* Business Description */}
      <div className="mt-4 sm:mt-5">
        <label className="text-sm sm:text-base">{dict.addNewProperty.businessDescription}*</label>
        <textarea
          className="appearance-none border border-black rounded-lg w-full h-32 sm:h-[150px] py-3 sm:py-[14px] px-4 sm:px-[25px] mt-2 leading-tight focus:outline-none focus:bg-white text-sm sm:text-base resize-vertical"
          placeholder={dict.addNewProperty.writeYourBusiness}
          {...register("description", {
            required: dict.error.descriptionRequired,
            onChange: () => {
              setError("description", { message: "" });
            },
          })}
        />
        <div className="text-xs sm:text-[12px] text-redError mt-1">
          {errors.description?.message}
        </div>
      </div>

      {/* Selling Price */}
      <div className="mt-4 sm:mt-5">
        <label className="text-sm sm:text-base">{dict.addNewProperty.sellingPrice}*</label>
        <input
          type="text"
          className="appearance-none border border-black rounded-lg w-full py-3 sm:py-[14px] px-4 sm:px-[25px] mt-2 leading-tight focus:outline-none focus:bg-white text-sm sm:text-base"
          placeholder="Your price in rupiah"
          {...register("price", {
            required: dict.error.priceRequired,
            onChange: () => {
              setError("price", { message: "" });
            },
          })}
        />
        <div className="text-xs sm:text-[12px] text-redError mt-1">{errors.price?.message}</div>
      </div>

      {/* Reason for Selling */}
      <div className="mt-4 sm:mt-5">
        <label className="text-sm sm:text-base">{dict.addNewProperty.reasonForSelling}*</label>
        <input
          type="text"
          className="appearance-none border border-black rounded-lg w-full py-3 sm:py-[14px] px-4 sm:px-[25px] mt-2 leading-tight focus:outline-none focus:bg-white text-sm sm:text-base"
          placeholder={dict.addNewProperty.yourSellingReason}
          {...register("reason", {
            required: dict.error.reasonRequired,
            onChange: () => {
              setError("reason", { message: "" });
            },
          })}
        />
        <div className="text-xs sm:text-[12px] text-redError mt-1">{errors.reason?.message}</div>
      </div>
    </div>
  );
};

export default CardAddProperty;
