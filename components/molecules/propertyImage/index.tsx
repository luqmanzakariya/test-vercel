"use client";
// import NextIcon from "@/components/atoms/icons/next";
// import PreviousIcon from "@/components/atoms/icons/previous";
import { BusinessListing } from "@/types/business";
import Image from "next/image";
import React, { useState } from "react";
import Belibiz from "@/public/assets/image/Belibiz Logo.png";

const PropertyImage = ({ businessData }: { businessData: BusinessListing }) => {
  const [firstPhoto, setFirstPhoto] = useState(businessData?.media?.photos[0] || "");
  const handleOnClick = (item: string) => {
    setFirstPhoto(item);
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 w-full justify-items-stretch gap-10 mb-4 lg:mb-20">
      <div className="lg:col-span-4 flex justify-center items-center">
        {/* <div className="absolute left-[50px] top-[50px]">
          <button className="bg-white rounded-full p-3 mr-4">
            <PreviousIcon className="h-6 w-6" />
          </button>
          <button className="bg-white rounded-full p-3">
            <NextIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="absolute right-[50px] top-[50px]">
          <button className="bg-white rounded text-black px-4 py-2">See all 37 Photos</button>
        </div> */}
        {businessData?.media?.photos && businessData?.media?.photos.length > 0 ? (
          <div className="flex justify-center">
            <Image
              className="w-full max-h-[800px] rounded-xl"
              src={firstPhoto}
              alt="Property Image"
              width={500}
              height={500}
            />
          </div>
        ) : (
          <div className="flex justify-center">
            <Image
              className="w-[500px] max-h-[500px] rounded-xl"
              src={Belibiz}
              alt="No Image"
              width={500}
              height={500}
            />
          </div>
        )}
      </div>
      <div className="rounded-xl shadow-lg w-full p-2 overflow-y-auto max-h-[800px] justify-center items-center">
        {businessData?.media?.photos &&
          businessData?.media?.photos.length > 0 &&
          businessData?.media?.photos?.map((item, idx) => (
            <div
              className="relative aspect-video w-full cursor-pointer"
              key={idx}
              onClick={() => handleOnClick(item)}
            >
              <Image
                className="rounded-xl object-cover"
                src={item}
                alt="Property Image"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default PropertyImage;
