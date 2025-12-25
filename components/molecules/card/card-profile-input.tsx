import Image from "next/image";
import UserPhoto from "@/public/assets/image/UserPhoto.webp";
import RoundedDropdown from "@/components/atoms/input/rounded-dropdown";
import { DictProps } from "@/types/dict";
import { UseFormRegister } from "react-hook-form";
import { IProfilePayload } from "@/types/authentication";
import { Dispatch, SetStateAction } from "react";
import { UserProps } from "@/types/userInfo";

const CardProfileInput = ({
  dict,
  register,
  setSelectedFile,
  user,
}: {
  dict: DictProps;
  register: UseFormRegister<IProfilePayload>;
  setSelectedFile: Dispatch<SetStateAction<File | null>>;
  user: UserProps;
}) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    } else {
      setSelectedFile(null);
    }
  };
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full p-4 sm:p-6 md:p-[60px]">
      {/* Profile Photo Section */}
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
        {user && user.photo_profile ? (
          <Image
            src={user.photo_profile}
            alt="User Photo"
            className="object-cover w-16 h-16 sm:w-[65px] sm:h-[65px] rounded-full bg-white"
            width={64}
            height={64}
          />
        ) : (
          <Image
            src={UserPhoto}
            alt="User Photo"
            className="object-cover w-16 h-16 sm:w-[65px] sm:h-[65px] rounded-full"
            width={64}
            height={64}
          />
        )}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-[24px] w-full sm:w-auto">
          <button
            className="bg-white border border-black rounded-lg text-red-800 px-4 sm:px-[24px] py-2 sm:py-[8px] text-sm sm:text-base w-full sm:w-auto text-center"
            type="button"
          >
            <label htmlFor="file" className="cursor-pointer">
              {dict.user.uploadNewPhoto}
            </label>
          </button>
          <input
            type="file"
            id="file"
            className="hidden"
            onChange={(event) => handleFileChange(event)}
            accept="image/*"
          />
        </div>
      </div>

      {/* Name Field */}
      <div className="w-full mb-4 sm:mb-5">
        <label className="text-sm sm:text-base">{dict.user.name}*</label>
        <input
          type="text"
          className="appearance-none border border-black rounded-lg w-full py-[14px] px-[25px] mt-2 leading-tight focus:outline-none focus:bg-white"
          {...register("name")}
        />
      </div>

      {/* Grid Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-4 sm:gap-5">
        {/* Email */}
        <div className="sm:col-span-2 lg:col-span-1">
          <label className="text-sm sm:text-base">{dict.user.email}*</label>
          <input
            type="text"
            className="appearance-none border border-black rounded-lg w-full py-[14px] px-[25px] mt-2 leading-tight focus:outline-none focus:bg-white"
            {...register("email")}
          />
        </div>

        {/* Phone Number */}
        <div className="sm:col-span-2 lg:col-span-1">
          <label className="text-sm sm:text-base">{dict.user.phoneNumber}*</label>
          <input
            type="text"
            className="appearance-none border border-black rounded-lg w-full py-[14px] px-[25px] mt-2 leading-tight focus:outline-none focus:bg-white"
            {...register("phone_number")}
          />
        </div>

        {/* Type Dropdown - Full width on mobile, half on desktop */}
        <div className="text-sm sm:text-base">
          <RoundedDropdown
            label={`${dict.user.type}*`}
            option={["Owner", "Broker"]}
            register={{ ...register("type") }}
          />
        </div>

        {/* Job Title */}
        <div className="sm:col-span-2 lg:col-span-1">
          <label className="text-sm sm:text-base">{dict.user.jobTitle}*</label>
          <input
            type="text"
            className="appearance-none border border-black rounded-lg w-full py-[14px] px-[25px] mt-2 leading-tight focus:outline-none focus:bg-white"
            {...register("broker_details.job_title")}
          />
        </div>

        {/* Company */}
        <div className="sm:col-span-2 lg:col-span-1">
          <label className="text-sm sm:text-base">{dict.user.company}*</label>
          <input
            type="text"
            className="appearance-none border border-black rounded-lg w-full py-[14px] px-[25px] mt-2 leading-tight focus:outline-none focus:bg-white"
            {...register("broker_details.company")}
          />
        </div>

        {/* Website */}
        <div className="sm:col-span-2 lg:col-span-1">
          <label className="text-sm sm:text-base">{dict.user.website}*</label>
          <input
            type="text"
            className="appearance-none border border-black rounded-lg w-full py-[14px] px-[25px] mt-2 leading-tight focus:outline-none focus:bg-white"
            {...register("broker_details.website")}
          />
        </div>
      </div>

      {/* About Section */}
      <div className="mt-4 sm:mt-5">
        <label className="text-sm sm:text-base">{dict.user.about}*</label>
        <textarea
          className="appearance-none border border-black rounded-lg w-full py-[14px] px-[25px] mt-2 leading-tight focus:outline-none focus:bg-white"
          {...register("broker_details.about")}
        />
      </div>
      <div className="text-gray-500 text-sm sm:text-base">{dict.user.brief}</div>
    </div>
  );
};

export default CardProfileInput;
