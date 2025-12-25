import RoundedDropdown from "@/components/atoms/input/rounded-dropdown";
import { IBusinessListingPayload } from "@/types/authentication";
import { DictProps } from "@/types/dict";
import { FieldErrors, UseFormRegister, UseFormSetError } from "react-hook-form";
import { CountryData, StateData } from "@/types/location";

const CardAddressBusinessInput = ({
  dict,
  register,
  setError,
  errors,
  countries,
  states,
  cities,
}: {
  dict: DictProps;
  register: UseFormRegister<IBusinessListingPayload>;
  setError: UseFormSetError<IBusinessListingPayload>;
  errors: FieldErrors<IBusinessListingPayload>;
  countries: CountryData[];
  states: StateData[];
  cities: string[];
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full p-4 sm:p-6 md:p-[60px] my-6 sm:my-8 md:my-10">
      <div className="text-lg sm:text-xl md:text-[24px] mb-6 sm:mb-8 font-semibold">
        {dict.user.addressLocation}
      </div>

      {/* Address Field */}
      <div className="mb-4 sm:mb-5">
        <label className="text-sm sm:text-base">{dict.user.address}*</label>
        <input
          type="text"
          className="appearance-none border border-black rounded-lg w-full py-[14px] px-[25px] mt-2 leading-tight focus:outline-none focus:bg-white"
          {...register("address", {
            required: dict.error.addressRequired,
            onChange: () => {
              setError("address", { message: "" });
            },
          })}
        />
        <div className="text-xs sm:text-[12px] text-redError mt-1">{errors.address?.message}</div>
      </div>

      {/* Location Fields Grid */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-5">
        {/* Country Dropdown */}
        <div className="w-full text-sm sm:text-base">
          <RoundedDropdown
            label={`${dict.user.country}*`}
            option={countries.map((country) => country.country)}
            register={{
              ...register("country", {
                required: dict.error.countryRequired,
                onChange: () => {
                  setError("country", { message: "" });
                },
              }),
            }}
          />
          <div className="text-xs sm:text-[12px] text-redError mt-1">{errors.country?.message}</div>
        </div>

        {/* State Dropdown */}
        <div className="w-full text-sm sm:text-base">
          <RoundedDropdown
            label={`${dict.user.state}*`}
            option={states.map((state) => state.state)}
            register={{
              ...register("state", {
                required: dict.error.stateRequired,
                onChange: () => {
                  setError("state", { message: "" });
                },
              }),
            }}
          />
          <div className="text-xs sm:text-[12px] text-redError mt-1">{errors.state?.message}</div>
        </div>

        {/* City Dropdown */}
        <div className="w-full text-sm sm:text-base">
          <RoundedDropdown
            label={`${dict.user.city}*`}
            option={cities}
            register={{
              ...register("city", {
                required: dict.error.cityRequired,
                onChange: () => {
                  setError("city", { message: "" });
                },
              }),
            }}
          />
          <div className="text-xs sm:text-[12px] text-redError mt-1">{errors.city?.message}</div>
        </div>

        {/* Zip Code Field */}
        <div className="w-full">
          <label className="text-sm sm:text-base">{dict.user.zipCode}*</label>
          <input
            type="text"
            className="appearance-none border border-black rounded-lg w-full py-[14px] px-[25px] mt-2 leading-tight focus:outline-none focus:bg-white"
            {...register("zip_code", {
              required: dict.error.zipCodeRequired,
              onChange: () => {
                setError("zip_code", { message: "" });
              },
            })}
          />
          <div className="text-xs sm:text-[12px] text-redError mt-1">
            {errors.zip_code?.message}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAddressBusinessInput;
