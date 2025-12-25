"use client";
import { DictProps } from "@/types/dict";
import Line3Icon from "@/components/atoms/icons/line3";
import CardProfitableBusiness from "@/components/molecules/card/card-profitable-business";
import FindBusinessIcon from "@/components/atoms/icons/find-business";
import SellPropertyIcon from "@/components/atoms/icons/sell-property";
import BagCircleIcon from "@/components/atoms/icons/bag-circle";
import { UserProps } from "@/types/userInfo";
import Link from "next/link";
import { APP_ROUTE } from "@/constant/route";
import { usePathname } from "next/navigation";

const FindOurBestProfitableBusiness = ({
  dict,
  userInfo,
}: {
  dict: DictProps;
  userInfo?: UserProps;
}) => {
  const currentPathName = usePathname();
  return (
    <div className="bg-cream px-4 py-8 lg:pb-[145px] lg:pt-[149px] justify-center">
      <div className="text-center w-fit relative m-auto">
        <div className="text-black text-[32px] lg:text-[64px] font-medium leading-[100%] lg:leading-[80px]">
          {dict.common.findOurBestProfitableBusiness}
        </div>
        <div className="mt-4 text-[32px] text-black/[0.75] font-normal leading-[50px]">
          {dict.common.yourTrustedBusinessPartnerInEveryTransaction}.
        </div>
        <Line3Icon className="hidden lg:block absolute right-[-32px] bottom-[50px]" />
      </div>
      <div className="mt-4 lg:mt-[71px] block lg:flex align-center justify-center gap-[81px]">
        <Link href={APP_ROUTE.LISTING}>
          <CardProfitableBusiness
            icon={<BagCircleIcon />}
            title={dict.common.buyABusiness}
            description={`${dict.common.explore2Million}.`}
          />
        </Link>
        <Link
          href={userInfo?.id ? APP_ROUTE.USER_ADD_BUSINESS : `${currentPathName}?login=show`}
          className="mt-6 lg:mt-0"
        >
          <CardProfitableBusiness
            icon={<SellPropertyIcon />}
            title={dict.common.sellProperty}
            description={`${dict.common.listSellThrive}.`}
          />
        </Link>
        <Link
          href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Hello, I'm interested in your business services and would like to get more information.`}
          className="mt-6 lg:mt-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardProfitableBusiness
            icon={<FindBusinessIcon />}
            title={dict.common.investABusiness}
            description={`${dict.common.discoverARental}.`}
          />
        </Link>
      </div>
    </div>
  );
};

export default FindOurBestProfitableBusiness;
