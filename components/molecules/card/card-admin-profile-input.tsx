import Image from "next/image";
import UserPhoto from "@/public/assets/image/UserPhoto.webp";
import { DictProps } from "@/types/dict";
import { UseFormRegister } from "react-hook-form";
import { IProfilePayload } from "@/types/authentication";
import { Dispatch, SetStateAction } from "react";
import { UserProps } from "@/types/userInfo";

const CardAdminProfileInput = ({
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
          className="appearance-none border border-black rounded-lg w-full py-3 sm:py-[14px] px-4 sm:px-[25px] mt-2 leading-tight focus:outline-none focus:bg-white text-sm sm:text-base"
          {...register("name")}
        />
      </div>

      {/* Email and Phone Number Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-4 sm:gap-5">
        <div>
          <label className="text-sm sm:text-base">{dict.user.email}*</label>
          <input
            type="text"
            className="appearance-none border border-black rounded-lg w-full py-3 sm:py-[14px] px-4 sm:px-[25px] mt-2 leading-tight focus:outline-none focus:bg-white text-sm sm:text-base"
            {...register("email")}
          />
        </div>
        <div>
          <label className="text-sm sm:text-base">{dict.user.phoneNumber}*</label>
          <input
            type="text"
            className="appearance-none border border-black rounded-lg w-full py-3 sm:py-[14px] px-4 sm:px-[25px] mt-2 leading-tight focus:outline-none focus:bg-white text-sm sm:text-base"
            {...register("phone_number")}
          />
        </div>
      </div>
    </div>
  );
};

export default CardAdminProfileInput;
