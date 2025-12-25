"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import Button from "@/components/atoms/button";
import { DictProps } from "@/types/dict";

const GetBusinessValuation = ({ dict }: { dict: DictProps }) => {
  const currentPathName = usePathname();
  return (
    <div className="mt-4 lg:mt-8 mb-4 lg:mb-4 flex justify-center px-4">
      <div className="mt-[40px] lg:mt-[120px] flex justify-center px-4">
        <div className="w-full max-w-[600px] lg:max-w-[1140px] h-auto lg:h-[130px] bg-white rounded-2xl lg:rounded-[15px] px-6 lg:px-7 py-6 lg:py-9 shadow-lg border-2 border-blue-950 flex items-center justify-center">
          <Link
            href={{
              pathname: currentPathName,
              query: { valuation: "show" },
            }}
          >
            <Button
              variant="primary"
              className="w-[280px] lg:w-[600px] h-[55px] lg:h-[80px] text-sm lg:text-[28px]"
            >
              {dict.common.getBusinessValuation}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetBusinessValuation;
