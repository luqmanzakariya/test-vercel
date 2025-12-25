"use client";
import CardDream from "@/components/molecules/card/card-dream";
import Line2Icon from "@/components/atoms/icons/line2";
import CreateAccountIcon from "@/components/atoms/icons/create-account";
import FindBusinessIcon from "@/components/atoms/icons/find-business";
import SellPropertyIcon from "@/components/atoms/icons/sell-property";
import ArrowRightIcon from "@/components/atoms/icons/arrow-right";
import { DictProps } from "@/types/dict";
import { usePathname, useSearchParams } from "next/navigation";
import { queryString } from "@/utils/queryString";
import Link from "next/link";
import { UserProps } from "@/types/userInfo";
import { APP_ROUTE } from "@/constant/route";

const WereHereToHelp = ({ dict, userInfo }: { dict: DictProps; userInfo?: UserProps }) => {
  const currentPathName = usePathname();
  const searchParams = useSearchParams();
  let query = {};

  if (searchParams?.entries) {
    query = Object.fromEntries(searchParams?.entries());
  }
  return (
    <div className="were-here-to-help flex flex-col items-center">
      <div className="text-black text-[32px] lg:text-[64px] font-medium leading-[100%] lg:leading-[79px] relative text-center">
        {/* <div>{dict.common.weAreHereToHelp}</div> */}
        <div>{dict.common.yougetYourDreamBusiness}</div>
        <Line2Icon className="hidden lg:absolute right-[-49px] bottom-[-4px]" />
      </div>
      <div className="mt-5 lg:mt-[31px] text-black text-[24px] font-normal leading-[35px] text-center">
        {dict.common.itsEasyToStartWithUs}
      </div>
      <div className="mt-[71px] lg:flex lg:align-center lg:justify-center lg:gap-[48px]">
        {userInfo?.id ? (
          <div>
            <CardDream
              icon={<CreateAccountIcon />}
              title={dict.common.createAccount}
              description={`${dict.common.itsVeryEasyToOpen}.`}
            />
          </div>
        ) : (
          <Link
            href={{
              pathname: currentPathName,
              query: queryString({ ...query, login: "show", register: undefined }),
            }}
            replace={true}
          >
            <CardDream
              icon={<CreateAccountIcon />}
              title={dict.common.createAccount}
              description={`${dict.common.itsVeryEasyToOpen}.`}
            />
          </Link>
        )}
        <ArrowRightIcon className="mt-[100px] hidden lg:block" />
        <Link href={APP_ROUTE.LISTING} className="mt-6 lg:mt-0">
          <CardDream
            icon={<FindBusinessIcon />}
            title={dict.common.findBusiness}
            description={`${dict.common.completeYourProfileWith}.`}
          />
        </Link>
        <ArrowRightIcon className="mt-[100px] hidden lg:block" />
        <div className="mt-6 lg:mt-0">
          <CardDream
            icon={<SellPropertyIcon />}
            title={dict.common.quickProcess}
            description={`${dict.common.applyAndGetYourPreferable}.`}
          />
        </div>
      </div>
    </div>
  );
};

export default WereHereToHelp;
