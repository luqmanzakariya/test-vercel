import React from "react";
import FacebookProfileIcon from "@/components/atoms/icons/facebook-profile";
import InstagramIcon from "@/components/atoms/icons/instagram";
import LinkedinIcon from "@/components/atoms/icons/linkedin";
import TwitterIcon from "@/components/atoms/icons/twitter";
import Image, { StaticImageData } from "next/image";
import { DictProps } from "@/types/dict";
import { User } from "@/types/business";
import ContactAgent from "../contactAgent";
import LockedComponent from "@/components/molecules/lockedComponent";

const ListingDetailAgentProfile = ({
  profileImage,
  dict,
  user,
}: {
  profileImage: StaticImageData;
  dict: DictProps;
  user: User;
}) => {
  return (
    <div className="rounded overflow-hidden shadow-lg w-full bg-white p-5 relative">
      {user && !user.id && <LockedComponent dict={dict} />}
      <div className="flex items-center justify-center">
        {user && user.photo_profile ? (
          <Image
            src={user.photo_profile}
            alt="User Photo"
            className="object-none w-[80px] h-[80px] rounded-full border-2 border-black bg-white"
            width={50}
            height={50}
          />
        ) : (
          <Image
            src={profileImage}
            alt="User Photo"
            className="object-none w-[80px] h-[80px] rounded-full"
          />
        )}
      </div>
      <div className="text-[18px] mt-6 text-center">{user?.name}</div>
      <div className="text-[14px] text-gray-500 mb-6 text-center">
        {user?.broker_details?.job_title}
      </div>
      <div className="flex items-center mb-6 justify-center">
        <FacebookProfileIcon className="mx-2" />
        <TwitterIcon className="mx-2" />
        <InstagramIcon className="mx-2" />
        <LinkedinIcon className="mx-2" />
      </div>
      <div className="border border-black mb-6"></div>
      <div className="flex items-center justify-between text-[14px] mb-4">
        <div className="text-start text-gray-500">{dict.common.location}:</div>
        <div className="text-end">
          {user?.address_details?.city}, {user?.address_details?.state}
        </div>
      </div>
      <div className="flex items-center justify-between text-[14px] mb-4">
        <div className="text-start text-gray-500">{dict.common.email}:</div>
        <div className="text-end">{user?.email}</div>
      </div>
      <div className="flex items-center justify-between text-[14px] mb-6">
        <div className="text-start text-gray-500">{dict.common.phone}:</div>
        <div className="text-end">{user?.phone_number}</div>
      </div>
      <div className="mb-4">
        <ContactAgent dict={dict} user={user} />
      </div>
    </div>
  );
};

export default ListingDetailAgentProfile;
