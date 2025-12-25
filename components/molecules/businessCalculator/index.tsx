"use client";
import { useState } from "react";
import { DictProps } from "@/types/dict";
import { LIST_CURRENT_ASSETS, LIST_CURRENT_LIABILITIES } from "@/constant";
import { useForm } from "react-hook-form";
import { BusinessValuationDetail } from "@/types/business";
import RoundedDropdownWithValue from "@/components/atoms/input/rounded-dropdown-with-value";
import { postBusinessValuationClient } from "@/utils/api/client/business";
import { useToast } from "@/components/templates/toast";
import Button from "@/components/atoms/button";
import Link from "next/link";

const BusinessCalculator = ({ dict }: { dict: DictProps }) => {
  const { add } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [congratulation, setIsCongratulation] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
    // watch,
    // setValue,
  } = useForm<BusinessValuationDetail>({
    defaultValues: {
      name: "",
      business_name: "",
      email: "",
      phone_number: "",
      industri_type: "",
      current_assets: "",
      current_liabilities: "",
      other_assets: "",
      gross_sale: 0,
    },
  });

  const onSubmit = async (input: BusinessValuationDetail) => {
    setIsLoading(true);
    const payload = { ...input, gross_sale: Number(input.gross_sale) };
    try {
      const res = await postBusinessValuationClient(payload);
      if (res.status === 200) {
        add({
          type: "success",
          message: "Business Sent Successfully",
          duration: 5000,
          position: "topRight",
        });
        setIsCongratulation(true);
      }
      reset();
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      let errorMessage = "An unknown error occurred";

      // Check if it's an axios-like error
      if (typeof error === "object" && error !== null && "response" in error) {
        errorMessage =
          (error as { response: { data: { message: string } } }).response?.data?.message ||
          errorMessage;
      }

      add({
        type: "error",
        message: errorMessage,
        duration: 5000,
        position: "topRight",
      });
    }
  };

  return (
    <div className="w-full bg-white rounded-2xl lg:rounded-[15px] shadow-lg border-2 border-blue-950">
      {!congratulation ? (
        <div className="px-6 lg:px-4 py-6 lg:py-4 flex items-center justify-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label>{dict.valuationBusiness.name}*</label>
                <input
                  type="text"
                  className="appearance-none border border-black rounded-lg w-full py-[14px] px-[25px] mt-2 leading-tight focus:outline-none focus:bg-white"
                  placeholder={dict.valuationBusiness.namePlaceholder}
                  {...register("name", {
                    required: dict.valuationBusiness.nameRequired,
                    onChange: () => {
                      setError("name", { message: "" });
                    },
                  })}
                />
                <div className="text-[12px] text-redError">{errors.name?.message}</div>
              </div>
              <div>
                <label>{dict.valuationBusiness.businessName}*</label>
                <input
                  type="text"
                  className="appearance-none border border-black rounded-lg w-full py-[14px] px-[25px] mt-2 leading-tight focus:outline-none focus:bg-white"
                  placeholder={dict.valuationBusiness.businessName}
                  {...register("business_name", {
                    required: dict.valuationBusiness.businessNameRequired,
                    onChange: () => {
                      setError("business_name", { message: "" });
                    },
                  })}
                />
                <div className="text-[12px] text-redError">{errors.business_name?.message}</div>
              </div>
              <div>
                <label>{dict.valuationBusiness.email}*</label>
                <input
                  type="text"
                  className="appearance-none border border-black rounded-lg w-full py-[14px] px-[25px] mt-2 leading-tight focus:outline-none focus:bg-white"
                  placeholder={dict.valuationBusiness.email}
                  {...register("email", {
                    required: dict.error.emailRequired,
                    onChange: () => {
                      setError("email", { message: "" });
                    },
                  })}
                />
                <div className="text-[12px] text-redError">{errors.email?.message}</div>
              </div>
              <div>
                <label>{dict.valuationBusiness.phoneNumber}*</label>
                <input
                  type="text"
                  className="appearance-none border border-black rounded-lg w-full py-[14px] px-[25px] mt-2 leading-tight focus:outline-none focus:bg-white"
                  placeholder={dict.valuationBusiness.phoneNumber}
                  {...register("phone_number", {
                    required: dict.error.phoneRequired,
                    onChange: () => {
                      setError("phone_number", { message: "" });
                    },
                  })}
                />
                <div className="text-[12px] text-redError">{errors.phone_number?.message}</div>
              </div>
              <div>
                <label>{dict.valuationBusiness.industryType}*</label>
                <input
                  type="text"
                  className="appearance-none border border-black rounded-lg w-full py-[14px] px-[25px] mt-2 leading-tight focus:outline-none focus:bg-white"
                  placeholder={dict.valuationBusiness.industryType}
                  {...register("industri_type", {
                    required: dict.valuationBusiness.industryTypeRequired,
                    onChange: () => {
                      setError("industri_type", { message: "" });
                    },
                  })}
                />
                <div className="text-[12px] text-redError">{errors.industri_type?.message}</div>
              </div>
              <div>
                <RoundedDropdownWithValue
                  label={`${dict.valuationBusiness.currentAsset}*`}
                  option={LIST_CURRENT_ASSETS}
                  register={{
                    ...register("current_assets", {
                      required: dict.valuationBusiness.currentAssetRequired,
                      onChange: () => {
                        setError("current_assets", { message: "" });
                      },
                    }),
                  }}
                />
                <div className="text-[12px] text-redError">{errors.current_assets?.message}</div>
              </div>
              <div>
                <RoundedDropdownWithValue
                  label={`${dict.valuationBusiness.currentLiabilities}*`}
                  option={LIST_CURRENT_LIABILITIES}
                  register={{
                    ...register("current_liabilities", {
                      required: dict.valuationBusiness.currentLiabilitiesRequired,
                      onChange: () => {
                        setError("current_liabilities", { message: "" });
                      },
                    }),
                  }}
                />
                <div className="text-[12px] text-redError">
                  {errors.current_liabilities?.message}
                </div>
              </div>
              <div>
                <label>{dict.valuationBusiness.otherAssets}</label>
                <input
                  type="text"
                  className="appearance-none border border-black rounded-lg w-full py-[14px] px-[25px] mt-2 leading-tight focus:outline-none focus:bg-white"
                  placeholder={dict.valuationBusiness.otherAssets}
                  {...register("other_assets", {
                    onChange: () => {
                      setError("other_assets", { message: "" });
                    },
                  })}
                />
                <div className="text-[12px] text-redError">{errors.other_assets?.message}</div>
              </div>
              <div>
                <label>{dict.valuationBusiness.grossSale}</label>
                <input
                  type="text"
                  inputMode="decimal"
                  pattern="[0-9]*[.,]?[0-9]*"
                  className="appearance-none border border-black rounded-lg w-full py-[14px] px-[25px] mt-2 leading-tight focus:outline-none focus:bg-white"
                  placeholder={dict.valuationBusiness.grossSale}
                  {...register("gross_sale", {
                    onChange: (e) => {
                      // Allow only numbers and decimal point
                      const value = parseInt(e.target.value.replace(/[^0-9.,]/g, ""));
                      if (value) {
                        e.target.value = value;
                      } else {
                        e.target.value = 0;
                      }
                      setError("gross_sale", { message: "" });
                    },
                  })}
                />
                <div className="text-[12px] text-redError">{errors.gross_sale?.message}</div>
              </div>
            </div>
            <div className="mt-4 w-full flex items-center justify-center gap-2">
              <button className="bg-blue-950 text-white rounded-lg py-3 px-12" disabled={isLoading}>
                {dict.valuationBusiness.submit}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="px-10 py-6 lg:px-20 lg:py-6 text-center">
          {/* Title */}
          <h2 className="font-bold mb-4 lg:mb-8 mt-4 bg-yellow-400 py-1 mx-6 lg:mx-16 rounded-lg">
            {dict.valuationBusiness.line1}
          </h2>

          {/* Congratulations */}
          <h3 className="text-2xl lg:text-[45px] font-bold mb-4 lg:mb-8">
            {dict.valuationBusiness.line2}
          </h3>

          {/* Message */}
          <div className="text-base lg:text-[20px] leading-relaxed mb-6 lg:mb-8 space-y-1 lg:space-y-2">
            <p>{dict.valuationBusiness.line3}</p>
            <p>{dict.valuationBusiness.line4}</p>
            <p>{dict.valuationBusiness.line5}</p>
          </div>

          {/* Button */}
          <Link
            href={{
              pathname: "/listing",
            }}
          >
            <Button
              variant="primary"
              className="font-semibold py-1 lg:py-4 px-6 lg:px-8 rounded-full w-full text-sm lg:text-base"
            >
              {dict.valuationBusiness.browse}
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default BusinessCalculator;
