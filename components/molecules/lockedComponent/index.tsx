"use client";
import { DictProps } from "@/types/dict";
import Button from "@/components/atoms/button";
import LockIcon from "@/components/atoms/icons/lock";
import { usePathname, useSearchParams } from "next/navigation";
import { queryString } from "@/utils/queryString";
import Link from "next/link";

const LockedComponent = ({ dict }: { dict: DictProps }) => {
  const currentPathName = usePathname();
  const searchParams = useSearchParams();
  let query = {};

  if (searchParams?.entries) {
    query = Object.fromEntries(searchParams?.entries());
  }

  return (
    <div className="absolute top-0 left-0 w-full h-full z-10 bg-[rgba(0,0,0,0.4)] flex items-center justify-center">
      <div className="z-20 text-white text-center">
        <Link
          href={{
            pathname: currentPathName,
            query: queryString({ ...query, login: "show", register: undefined }),
          }}
          replace={true}
        >
          <Button variant="secondary" style="w-[130px] h-[55px] bg-white">
            <div className="flex items-center gap-[12px]">
              {dict.common.login}
              <LockIcon />
            </div>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LockedComponent;
