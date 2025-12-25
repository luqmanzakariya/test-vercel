"use client";
import LineIcon from "@/components/atoms/icons/line";
import { DictProps } from "@/types/dict";
import InputEmailWithButton from "@/components/atoms/input/input-email-with-button";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { queryString } from "@/utils/queryString";

const StartJourney = ({ dict }: { dict: DictProps }) => {
  const currentPathName = usePathname();
  let query = {};
  const searchParams = useSearchParams();

  if (searchParams?.entries) {
    query = Object.fromEntries(searchParams?.entries());
  }

  return (
    <div className="start-journey">
      <div className="font-abril text-white text-[32px] lg:text-[64px] font-normal leading-[100%] lg:leading-[80px] relative">
        <div>{dict.common.startYourJourney}</div>
        <LineIcon className="hidden lg:block absolute right-[-36px] top-[75px]" />
        <div>{dict.common.asABusinessOwner}</div>
      </div>
      <div className="mt-4 lg:mt-0">
        <InputEmailWithButton dict={dict} />
        <div className="mt-4 lg:mt-[11.51px] font-secondary text-white font-normal text-4 leading-[18.91px]">
          {dict.common.alreadyAAgent}?{" "}
          <Link
            href={{
              pathname: currentPathName,
              query: queryString({ ...query, login: "show", register: undefined }),
            }}
            replace={true}
            className="text-orange underline"
          >
            {dict.common.signIn}.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StartJourney;
