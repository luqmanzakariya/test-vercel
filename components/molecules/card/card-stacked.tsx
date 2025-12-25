import Image from "next/image";
import CoffeeShopImg from "@/public/assets/image/Coffee Shop.webp";
import clsx from "clsx";
import ArrowSlightUp from "@/components/atoms/icons/arrow-slightUp";
import Button from "@/components/atoms/button";
import { DictProps } from "@/types/dict";

const CardStacked: React.FC<{ dict: DictProps }> = ({ dict }) => {
  return (
    <div className="flex relative">
      <div className="w-[675px] h-[390px] bg-white/[0.15] rounded-[20]"></div>
      <div className="w-[675px] h-[390px] bg-white/[0.30] absolute -top-[12px] -left-[10px] rounded-[20]"></div>
      <div className="w-[675px] h-[390px] bg-white absolute -top-[24px] -left-[24px] rounded-[20]">
        <div className="border-b border-white2 text-black pl-[10px] pt-[6px] pr-[40px] flex gap-[32px]">
          <div className="relative w-[298px] h-[299px]">
            <Image
              priority
              src={CoffeeShopImg}
              alt="Coffee Shop"
              layout="fill"
              className={clsx("rounded-5")}
            />
          </div>
          <div className="mt-[22px] flex flex-col gap-[29px] w-[calc(100%-298px-32px)]">
            <div className="text-black4">
              <div className="text-[18px] font-normal leading-[30px]">Coffee Shop</div>
              <div className="text-[18px] font-normal leading-[30px]">BSD Tangerang</div>
            </div>
            <div className="bg-image-container w-fit p-4 text-[44px] font-medium leading-[50px] relative">
              Rp 28,100.00
            </div>
            <div className="flex w-full justify-between">
              <div>
                <div className="text-black text-[20px] font-medium leading-[25px]">2137</div>
                <div className="text-black/[0.6] text-4 font-normal leading-[25px]">sqft</div>
              </div>
              <div className="border-l border-grey2 h-full w-[2px]"></div>
              <div>
                <div className="text-black text-[20px] font-medium leading-[25px]">12</div>
                <div className="text-black/[0.6] text-4 font-normal leading-[25px]">table</div>
              </div>
              <div className="border-l border-grey2 h-full w-[2px]"></div>
              <div>
                <div className="text-black text-[20px] font-medium leading-[25px]">3</div>
                <div className="text-black/[0.6] text-4 font-normal leading-[25px]">Room</div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[84px] flex items-center justify-between pl-9 pr-[28px]">
          <div className="text-[18px] font-medium leading-[33px]">
            {dict.common.checkFullDetails}
          </div>
          <Button className="bg-black h-[41.37] w-[41.37] rounded-full">
            <ArrowSlightUp />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardStacked;
