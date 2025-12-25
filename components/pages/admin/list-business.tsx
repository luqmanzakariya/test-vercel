"use client";
import EditIcon from "@/components/atoms/icons/edit";
import ShowIcon from "@/components/atoms/icons/show";
import TripleDotsIcon from "@/components/atoms/icons/triple-dots";
import Pagination from "@/components/molecules/pagination";
// import ShowingResult from "@/components/molecules/showingResult";
import ModalUpdateStatus from "@/components/organisms/modalUpdateStatus";
import SuccessModalUpdateStatus from "@/components/organisms/successModalUpdateStatus";
import Belibiz from "@/public/assets/image/Belibiz Logo.png";
import { BusinessListingResponse } from "@/types/business";
import { DictProps } from "@/types/dict";
import { postBusinessListingRefetchClient } from "@/utils/api/client/authentication-client";
import { thousandSeparator } from "@/utils/helper/formatNumber";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ListBusinessPage = ({
  dict,
  businessListData,
}: {
  dict: DictProps;
  businessListData: BusinessListingResponse;
}) => {
  const currentPathName = usePathname();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "9";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false); // State untuk modal
  const [entries, setEntries] = useState(businessListData?.data?.slice(start, end));
  const handleRefetch = () => {
    postBusinessListingRefetchClient()
      .then((data) => {
        setEntries(data?.data);

        // Tampilkan modal sukses
        setShowSuccessModal(true);

        // Sembunyikan modal setelah 3 detik
        setTimeout(() => {
          setShowSuccessModal(false);
        }, 5000);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  useEffect(() => {
    setEntries(businessListData?.data?.slice(start, end));
  }, [businessListData?.data, end, page, per_page, start]);

  const handleStatus = (status: string) => {
    if (status === "VERIFIED") {
      return (
        <div className="rounded-full bg-[#D0F3DA] text-[#29A54C] text-center py-2 w-full">
          {status}
        </div>
      );
    } else if (status === "UNVERIFIED") {
      return (
        <div className="rounded-full bg-[#FEE9E9] text-[#D06767] text-center py-2 w-full">
          {status}
        </div>
      );
    } else if (status === "WAITING FOR VERIFICATION") {
      return (
        <div className="rounded-full bg-[#F9EEC8] text-[#B5A367] text-center py-2 w-full text-[12px]">
          {status}
        </div>
      );
    } else {
      return (
        <div className="rounded-full bg-[#F5F5F5] text-[#333333] text-center py-2 w-full">
          {status}
        </div>
      );
    }
  };
  return (
    <div>
      {showSuccessModal && <SuccessModalUpdateStatus dict={dict} />}
      <div className="mx-4 sm:mx-6 md:mx-[40px] my-4 sm:my-6 md:my-[40px]">
        <ModalUpdateStatus dict={dict} handleRefetch={handleRefetch} />
        <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full p-4 sm:p-6 md:p-[30px]">
          {/* Table Header - Hidden on mobile, visible on larger screens */}
          <div className="hidden sm:flex items-center justify-between bg-blue-950 text-white rounded-xl h-fit w-full px-4 sm:px-[15px] py-3 sm:py-[15px]">
            <div className="w-[300px] text-sm sm:text-base">{dict.user.title.toUpperCase()}</div>
            <div className="w-[120px] text-sm sm:text-base">{dict.user.date.toUpperCase()}</div>
            <div className="w-[120px] text-sm sm:text-base">{dict.user.status.toUpperCase()}</div>
            <div className="w-[100px] text-sm sm:text-base">{dict.user.action.toUpperCase()}</div>
          </div>

          {/* Mobile Header - Visible only on mobile */}
          <div className="sm:hidden bg-blue-950 text-white text-center rounded-xl w-full px-4 py-3 mb-4">
            <div className="text-sm font-medium">
              {dict.user.propertyList || "PROPERTY LISTINGS"}
            </div>
          </div>

          {entries &&
            entries.map((item, idx) => (
              <div
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 sm:py-[40px] border-b border-gray-300 gap-4 sm:gap-0"
                key={idx}
              >
                {/* Mobile Card Layout */}
                <div className="sm:hidden w-full space-y-3">
                  {/* Image and Basic Info */}
                  <div className="flex gap-3">
                    {item?.media?.photos && item?.media?.photos.length > 0 ? (
                      <Image
                        className="w-20 h-20 object-cover rounded-xl flex-shrink-0"
                        src={item?.media?.photos[0]}
                        alt="Property Image"
                        width={80}
                        height={80}
                      />
                    ) : (
                      <Image
                        className="w-20 h-20 object-contain rounded-xl bg-gray-100 flex-shrink-0"
                        src={Belibiz}
                        alt="No Image"
                        width={80}
                        height={80}
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="text-base font-semibold truncate" title={item.title}>
                        {item.title}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{item.city}</div>
                      <div className="text-sm font-semibold mt-1">
                        {item.currency} {thousandSeparator(item.price)}
                      </div>
                    </div>
                  </div>

                  {/* Date and Status Row */}
                  <div className="flex flex-col gap-2 text-sm">
                    <div>
                      <span className="text-gray-500">{dict.user.date}: </span>
                      {moment(item.updated_at).format("D MMM YYYY")}
                    </div>
                    <div>{handleStatus(item.status)}</div>
                  </div>
                </div>

                {/* Desktop Layout - Hidden on mobile */}
                {/* Title Column */}
                <div className="hidden sm:flex w-[300px] items-center">
                  {item?.media?.photos && item?.media?.photos.length > 0 ? (
                    <Image
                      className="w-[100px] h-[100px] object-cover rounded-xl flex-shrink-0"
                      src={item?.media?.photos[0]}
                      alt="Property Image"
                      width={100}
                      height={100}
                    />
                  ) : (
                    <Image
                      className="w-[100px] h-[100px] object-contain rounded-xl bg-gray-100 flex-shrink-0"
                      src={Belibiz}
                      alt="No Image"
                      width={100}
                      height={100}
                    />
                  )}
                  <div className="pl-4 md:pl-[40px] min-w-0">
                    <div
                      className="text-base md:text-[20px] font-semibold truncate"
                      title={item.title}
                    >
                      {item.title}
                    </div>
                    <div className="text-xs md:text-[14px] text-gray-500 mt-1">{item.city}</div>
                    <div className="text-base md:text-[20px] font-semibold mt-1">
                      {item.currency} {thousandSeparator(item.price)}
                    </div>
                  </div>
                </div>

                {/* Date Column - Desktop */}
                <div className="hidden sm:block w-[120px] text-sm md:text-base">
                  {moment(item.updated_at).format("D MMM YYYY")}
                </div>

                {/* Status Column - Desktop */}
                <div className="hidden sm:block w-[120px]">{handleStatus(item.status)}</div>

                {/* Action Button - Both mobile and desktop */}
                <div className="flex justify-end sm:justify-center w-full sm:w-[100px] mt-2 sm:mt-0">
                  <Popover>
                    <PopoverButton className="outline-none">
                      <TripleDotsIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </PopoverButton>
                    <PopoverPanel
                      anchor="bottom end"
                      transition
                      className="mt-1 border bg-white p-3 sm:p-4 rounded-[15px] shadow-lg transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 z-10"
                    >
                      {/* View Link */}
                      <Link
                        href={{
                          pathname: `/listing/${item?.id}`,
                        }}
                        className={
                          item.status === "VERIFIED" ? "" : "pointer-events-none opacity-50"
                        }
                        aria-disabled={item.status !== "VERIFIED"}
                      >
                        <div className="flex items-center gap-3 sm:gap-[12px] py-1 sm:py-0">
                          <div className="py-1 sm:py-[8px]">
                            <ShowIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                          </div>
                          <div className="text-sm sm:text-base">{dict.sidebar.view}</div>
                        </div>
                      </Link>

                      {/* Change Status Link */}
                      <Link
                        href={{
                          pathname: currentPathName,
                          query: { update: "show", id: item.id, status: item.status },
                        }}
                      >
                        <div className="flex items-center gap-3 sm:gap-[12px] py-1 sm:py-0 mt-1 sm:mt-0">
                          <div className="py-1 sm:py-[8px]">
                            <EditIcon className="stroke-black w-4 h-4 sm:w-5 sm:h-5" />
                          </div>
                          <div className="text-sm sm:text-base">{dict.sidebar.changeStatus}</div>
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
          hasNextPage={end < businessListData?.data?.length}
          hasPrevPage={start > 0}
          totalCount={businessListData?.data?.length || 0}
        />
      </div>
    </div>
  );
};

export default ListBusinessPage;
