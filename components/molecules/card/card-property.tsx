"use client";
import ArrowSlightUp from "@/components/atoms/icons/arrow-slightUp";
import DotLines from "@/components/atoms/icons/dot-lines";
// import SqftIcon from "@/components/atoms/icons/sqft";
import Image from "next/image";
import { UserProps } from "@/types/userInfo";
import { BusinessListing } from "@/types/business";
import { thousandSeparator } from "@/utils/helper/formatNumber";
import Belibiz from "@/public/assets/image/Belibiz Logo.png";
import { useRouter } from "next/navigation";

const CardProperty = ({ data }: { data: BusinessListing; userInfo: UserProps }) => {
  const router = useRouter();

  const goToDetailPage = (id: number) => {
    router.push(`/listing/${id}`);
  };

  return (
    <div className="flex flex-col items-center rounded">
      <div className="bg-white rounded-[25px] overflow-hidden shadow-lg w-full">
        <div className="p-5">
          {data?.media?.photos && data?.media?.photos.length > 0 ? (
            <Image
              className="w-full h-[300px] object-cover rounded-xl mb-5"
              src={data?.media?.photos[0]}
              alt="Property Image"
              width={500}
              height={500}
            />
          ) : (
            <Image
              className="w-full h-[300px] object-contain rounded-xl bg-gray-100 mb-5"
              src={Belibiz}
              alt="No Image"
              width={500}
              height={500}
            />
          )}
          <div className="text-2xl truncate">{data?.title}</div>
          <div className="text-gray-400 mb-5 truncate">{data?.description}</div>
          <div className="mb-7 truncate">{data?.reason}</div>
          <DotLines className="mb-5 w-full" />
          <div className="flex justify-items-stretch mb-2">
            <div className="w-full text-2xl flex items-center">
              {data?.currency} {thousandSeparator(data?.price || 0)}
            </div>
            <div className="flex items-center justify-end">
              <button
                className="bg-red-800 text-white rounded-full p-3"
                onClick={() => goToDetailPage(data?.id)}
              >
                <ArrowSlightUp />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProperty;
