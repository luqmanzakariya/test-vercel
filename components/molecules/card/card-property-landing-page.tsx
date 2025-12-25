"use client";
import ArrowSlightUp from "@/components/atoms/icons/arrow-slightUp";
import DotLines from "@/components/atoms/icons/dot-lines";
// import SqftIcon from "@/components/atoms/icons/sqft";
import Image from "next/image";
import { BusinessListing } from "@/types/business";
import { thousandSeparator } from "@/utils/helper/formatNumber";
import Belibiz from "@/public/assets/image/Belibiz Logo.png";
import { useRouter } from "next/navigation";

const CardPropertyLandingPage = ({ data }: { data: BusinessListing }) => {
  const router = useRouter();

  const goToDetailPage = (id: number) => {
    router.push(`/listing/${id}`);
  };
  return (
    <div className="flex flex-col items-center rounded">
      <div className="bg-white rounded-2xl lg:rounded-[25px] overflow-hidden shadow-lg w-full">
        <div className="p-4 sm:p-5">
          {data?.media?.photos && data?.media?.photos.length > 0 ? (
            <Image
              className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover rounded-lg lg:rounded-xl mb-4 lg:mb-5"
              src={data?.media?.photos[0]}
              alt="Property Image"
              width={500}
              height={500}
            />
          ) : (
            <Image
              className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-contain rounded-lg lg:rounded-xl bg-gray-100 mb-4 lg:mb-5"
              src={Belibiz}
              alt="No Image"
              width={500}
              height={500}
            />
          )}
          <div className="text-xl sm:text-2xl truncate">{data?.title}</div>
          <div className="text-gray-400 text-sm sm:text-base mb-4 lg:mb-5 truncate">
            {data?.description}
          </div>
          <div className="mb-5 lg:mb-7 text-sm sm:text-base truncate">{data?.reason}</div>
          <DotLines className="mb-4 lg:mb-5 w-full" />
          <div className="flex justify-between items-center mb-2">
            <div className="text-xl sm:text-2xl flex items-center">
              {data?.currency} {thousandSeparator(data?.price || 0)}
            </div>
            <div className="flex items-center justify-end">
              <button
                className="bg-red-800 text-white rounded-full p-2 sm:p-3"
                onClick={() => goToDetailPage(data?.id)}
              >
                <ArrowSlightUp className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPropertyLandingPage;
