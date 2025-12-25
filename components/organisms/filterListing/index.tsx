"use client";
// import FavoritesIcon from "@/components/atoms/icons/favorites";
import ResetIcon from "@/components/atoms/icons/reset";
import SearchIcon from "@/components/atoms/icons/search";
import SquareDropdown from "@/components/atoms/input/square-dropdown";
import { IFilterPayload } from "@/types/authentication";
import { DictProps } from "@/types/dict";
import { FormEvent } from "react";
import { FieldErrors, UseFormRegister, UseFormSetError } from "react-hook-form";
import { StateData } from "@/types/location";

const type = [
  "Cafe",
  "Rental",
  "Cloud Kitchen",
  "Cleaning",
  "Car Rental",
  "Restaurant",
  "Property",
  "Pet Shop",
  "Service",
  "Event",
  "Food Truck",
  "Food Court",
  "Bakery",
  "Provider",
  "Content Creator",
  "Barbeque",
  "Laundry",
  "Salon",
  "Lawn",
];

const FilterListing = ({
  dict,
  register,
  handleReset,
  isLoading,
  errors,
  setError,
  states,
  cities,
}: {
  dict: DictProps;
  register: UseFormRegister<IFilterPayload>;
  handleReset: () => void;
  isLoading: boolean;
  errors: FieldErrors<IFilterPayload>;
  setError: UseFormSetError<IFilterPayload>;
  states: StateData[];
  cities: string[];
}) => {
  const onReset = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleReset();
  };
  return (
    <>
      <SquareDropdown
        label={dict.addNewProperty.businessType}
        option={type}
        register={{ ...register("business_type") }}
      />
      {/* <SquareDropdown
        label={dict.user.country}
        option={["Indonesia"]}
        register={{ ...register("country") }}
      /> */}
      <SquareDropdown
        label={dict.user.state}
        option={states.map((state) => state.state)}
        register={{ ...register("state") }}
      />
      <SquareDropdown label={dict.user.city} option={cities} register={{ ...register("city") }} />
      <div className="font-bold mb-5">{dict.common.pricerange.toUpperCase()}</div>
      <div className="mb-5">
        <div className="grid grid-cols-3 justify-items-center">
          <input
            type="number"
            className="appearance-none border border-gray-950 w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white placeholder:text-center"
            placeholder="Min"
            {...register("min_price", {
              onChange: () => {
                setError("max_price", { message: "" });
              },
            })}
          />
          <div className="flex items-center">-</div>
          <input
            type="number"
            className="appearance-none border border-gray-950 w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white placeholder:text-center"
            placeholder="Max"
            {...register("max_price", {
              onChange: () => {
                setError("max_price", { message: "" });
              },
            })}
          />
        </div>
        <div className="min-h-[24px]">
          <div className="text-[12px] text-redError">{errors.min_price?.message}</div>
          <div className="text-[12px] text-redError">{errors.max_price?.message}</div>
        </div>
      </div>
      <div className="mb-5">
        <label>{dict.common.minyearbuilt}</label>
        <input
          type="number"
          className="appearance-none border border-gray-950 w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white placeholder:text-center"
          placeholder="2025"
          {...register("year_established", {
            onChange: () => {
              setError("year_established", { message: "" });
            },
          })}
        />
      </div>
      <div className="min-h-[24px] text-[12px] text-redError">
        {errors.year_established?.message}
      </div>
      <div className="mb-5">
        <button
          className="bg-blue-950 text-white w-full py-2 px-4 flex items-center justify-center"
          disabled={isLoading}
        >
          <SearchIcon className="mr-2 text-white stroke-white" />
          <div>{dict.common.search.toUpperCase()}</div>
        </button>
      </div>
      <div className="mb-20">
        <div className="justify-items-center mb-2">
          <button
            className="w-full text-[14px] flex items-center justify-center"
            type="reset"
            onClick={onReset}
            disabled={isLoading}
          >
            <ResetIcon className="mr-2" />
            <div>{dict.common.resetfilter}</div>
          </button>
          {/* <button className="w-full text-[14px] flex items-center justify-center" disabled>
            <FavoritesIcon className="mr-2" />
            <div>{dict.common.savesearch}</div>
          </button> */}
        </div>
      </div>
    </>
  );
};

export default FilterListing;
