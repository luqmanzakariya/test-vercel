"use client";
import EditIcon from "@/components/atoms/icons/edit";
import TripleDotsIcon from "@/components/atoms/icons/triple-dots";
import Pagination from "@/components/molecules/pagination";
import ModalUpdatePassword from "@/components/organisms/modalUpdatePassword";
import { UsersResponse } from "@/types/business";
import { DictProps } from "@/types/dict";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const ListUserPage = ({ dict, userListData }: { dict: DictProps; userListData: UsersResponse }) => {
  const currentPathName = usePathname();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "9";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const [entries, setEntries] = useState(userListData?.data?.slice(start, end));

  useEffect(() => {
    setEntries(userListData?.data?.slice(start, end));
  }, [end, page, per_page, start, userListData?.data]);
  return (
    <div>
      <div className="mx-4 sm:mx-6 md:mx-[40px] my-4 sm:my-6 md:my-[40px]">
        <ModalUpdatePassword dict={dict} />
        <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full p-4 sm:p-6 md:p-[30px]">
          {/* Table Header - Hidden on mobile, visible on larger screens */}
          <div className="hidden sm:flex items-center justify-between bg-blue-950 text-white rounded-xl h-fit w-full px-4 sm:px-[15px] py-3 sm:py-[15px]">
            <div className="w-[200px] text-sm sm:text-base">{dict.user.name.toUpperCase()}</div>
            <div className="w-[200px] text-sm sm:text-base">{dict.user.email.toUpperCase()}</div>
            <div className="w-[150px] text-sm sm:text-base">
              {dict.user.phoneNumber.toUpperCase()}
            </div>
            <div className="w-[100px] text-sm sm:text-base">{dict.user.action.toUpperCase()}</div>
          </div>

          {/* Mobile Header - Visible only on mobile */}
          <div className="sm:hidden bg-blue-950 text-white text-center rounded-xl w-full px-4 py-3 mb-4">
            <div className="text-sm font-medium">{dict.user.userList || "USER LIST"}</div>
          </div>

          {entries &&
            entries.map((item, idx) => (
              <div
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 sm:py-[30px] border-b border-gray-300 gap-3 sm:gap-0"
                key={idx}
              >
                {/* Mobile Card Layout */}
                <div className="sm:hidden space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600">{dict.user.name}:</span>
                    <span className="text-right">{item.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600">{dict.user.email}:</span>
                    <span className="text-right text-sm break-all">{item.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600">{dict.user.phoneNumber}:</span>
                    <span className="text-right">
                      {item.phone_number ? item.phone_number : "-"}
                    </span>
                  </div>
                </div>

                {/* Desktop Layout - Hidden on mobile */}
                <div className="hidden sm:block w-[200px] ml-2">{item.name}</div>
                <div className="hidden sm:block w-[200px]">{item.email}</div>
                <div className="hidden sm:block w-[150px]">
                  {item.phone_number ? item.phone_number : "-"}
                </div>

                {/* Action Button - Different placement for mobile vs desktop */}
                <div className="flex justify-end sm:justify-end sm:w-[100px] sm:pr-[60px] mt-2 sm:mt-0">
                  <Popover>
                    <PopoverButton className="outline-none">
                      <TripleDotsIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </PopoverButton>
                    <PopoverPanel
                      anchor="bottom end"
                      transition
                      className="mt-1 border bg-white p-4 rounded-[15px] shadow-lg transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 z-10"
                    >
                      <Link
                        href={{
                          pathname: currentPathName,
                          query: { update: "show", id: item.id },
                        }}
                      >
                        <div className="flex items-center gap-3 sm:gap-[12px]">
                          <div className="py-1 sm:py-[8px]">
                            <EditIcon className="stroke-black w-4 h-4 sm:w-5 sm:h-5" />
                          </div>
                          <div className="text-sm sm:text-base">{dict.user.changePassword1}</div>
                        </div>
                      </Link>
                    </PopoverPanel>
                  </Popover>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="mx-4 sm:mx-6 md:mx-[40px] my-6 sm:my-8 md:my-[40px] text-center">
        <Pagination
          hasNextPage={end < userListData?.data?.length}
          hasPrevPage={start > 0}
          totalCount={userListData?.data?.length || 0}
        />
      </div>
    </div>
  );
};

export default ListUserPage;
