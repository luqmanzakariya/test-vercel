"use client";
import React from "react";
// import SearchIcon from "@/components/atoms/icons/search";
// import NotificationIcon from "@/components/atoms/icons/notification";
// import Button from "@/components/atoms/button";
// import ArrowBusinessIcon from "@/components/atoms/icons/arrow-business";
import Image from "next/image";
import UserPhoto from "@/public/assets/image/UserPhoto.webp";
import { DictProps } from "@/types/dict";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Link from "next/link";
import { APP_ROUTE } from "@/constant/route";
import LogoutIcon from "@/components/atoms/icons/logout";
import { usePathname } from "next/navigation";
import { UserProps } from "@/types/userInfo";

// import DashboardIcon from "@/components/atoms/icons/dashboard";
// import MessageIcon from "@/components/atoms/icons/message";
import ProfileIcon from "@/components/atoms/icons/profile";
import SettingIcon from "@/components/atoms/icons/setting";
import MyPropertiesIcon from "@/components/atoms/icons/myproperties";
import SavedsearchIcon from "@/components/atoms/icons/savedsearch";
import HomeIcon from "@/components/atoms/icons/home";

const NavbarAdminDashboard = ({
  dict,
  userInfo,
  isMobile,
}: {
  dict: DictProps;
  userInfo?: UserProps;
  isMobile?: boolean;
}) => {
  const currentPathName = usePathname();
  const parts = currentPathName.split("/");
  const result = parts[parts.length - 1].replace(/-/g, " "); // Or parts.pop();
  // const result = parts[parts.length - 1];
  // const capitalizeString = result.charAt(0).toUpperCase() + result.slice(1);
  return (
    <div className="flex items-center px-[45px] py-[35px] justify-between">
      <div className="text-[36px] w-[420px] capitalize">
        {result.length >= 2 ? result : "Valuation Detail"}
      </div>
      <div className="flex items-center justify-end">
        {/* <div className="relative mr-[40px]">
          <div className="absolute right-[12px] top-[12px]">
            <SearchIcon />
          </div>
          <input
            type="text"
            className="bg-none appearance-none border border-black rounded-full w-[280px] px-5 py-3 leading-tight focus:outline-none"
            placeholder="Search here..."
          />
        </div> */}
        {/* <NotificationIcon className="mr-4 sm:mr-8 md:mr-10 w-5 h-5 sm:w-7 sm:h-7 md:w-[22px] md:h-[26px]" /> */}
        {/* <Link
          href={{
            pathname: "/user/add-business",
          }}
        >
          <Button className="mr-[30px]" variant="primary" style="w-[185px] h-[55px]">
            <div className="flex items-center gap-[34px]">
              <div>{dict.common.addBusiness}</div>
              <ArrowBusinessIcon />
            </div>
          </Button>
        </Link> */}
        <div className="justify-end items-end text-end align-bottom justify-items-end">
          <Popover>
            <PopoverButton className="outline-none">
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-black bg-white overflow-hidden">
                <Image
                  src={userInfo?.photo_profile || UserPhoto}
                  alt="User Photo"
                  className="object-cover"
                  fill
                  sizes="(max-width: 640px) 48px, 64px"
                  priority
                />
              </div>
            </PopoverButton>
            <PopoverPanel
              anchor="bottom end"
              transition
              className="mt-1 bg-white p-4 rounded-[15px] transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
            >
              {isMobile && (
                <>
                  {/* <Link
                    href={`${APP_ROUTE.ADMIN_DASHBOARD}`}
                    replace={true}
                    prefetch={false}
                    className="cursor-pointer"
                  >
                    <div className="flex items-center gap-[12px] mb-3">
                      <div className="rounded-full pl-[7px] pr-[11px] py-[8px]">
                        <DashboardIcon />
                      </div>
                      <div>{dict.sidebar.dashboard}</div>
                    </div>
                  </Link>
                  <Link
                    href={`${APP_ROUTE.ADMIN_MESSAGE}`}
                    replace={true}
                    prefetch={false}
                    className="cursor-pointer"
                  >
                    <div className="flex items-center gap-[12px] mb-3">
                      <div className="rounded-full pl-[7px] pr-[11px] py-[8px]">
                        <MessageIcon />
                      </div>
                      <div>{dict.sidebar.message}</div>
                    </div>
                  </Link> */}
                  <Link
                    href={`${APP_ROUTE.HOME}`}
                    replace={true}
                    prefetch={false}
                    className="cursor-pointer"
                  >
                    <div className="flex items-center gap-[12px] mb-3">
                      <div className="rounded-full pl-[7px] pr-[11px] py-[8px]">
                        <HomeIcon />
                      </div>
                      <div>{dict.sidebar.home}</div>
                    </div>
                  </Link>
                  <Link
                    href={`${APP_ROUTE.ADMIN_PROFILE}`}
                    replace={true}
                    prefetch={false}
                    className="cursor-pointer"
                  >
                    <div className="flex items-center gap-[12px] mb-3">
                      <div className="rounded-full pl-[7px] pr-[11px] py-[8px]">
                        <ProfileIcon />
                      </div>
                      <div>{dict.sidebar.profile}</div>
                    </div>
                  </Link>
                  <Link
                    href={`${APP_ROUTE.ADMIN_CHANGE_PASSWORD}`}
                    replace={true}
                    prefetch={false}
                    className="cursor-pointer"
                  >
                    <div className="flex items-center gap-[12px] mb-3">
                      <div className="rounded-full pl-[7px] pr-[11px] py-[8px]">
                        <SettingIcon />
                      </div>
                      <div>{dict.sidebar.changePassword}</div>
                    </div>
                  </Link>
                  <Link
                    href={`${APP_ROUTE.ADMIN_LIST_USER}`}
                    replace={true}
                    prefetch={false}
                    className="cursor-pointer"
                  >
                    <div className="flex items-center gap-[12px] mb-3">
                      <div className="rounded-full pl-[7px] pr-[11px] py-[8px]">
                        <ProfileIcon />
                      </div>
                      <div>{dict.sidebar.listUser}</div>
                    </div>
                  </Link>
                  <Link
                    href={`${APP_ROUTE.ADMIN_LIST_BUSINESS}`}
                    replace={true}
                    prefetch={false}
                    className="cursor-pointer"
                  >
                    <div className="flex items-center gap-[12px] mb-3">
                      <div className="rounded-full pl-[7px] pr-[11px] py-[8px]">
                        <MyPropertiesIcon />
                      </div>
                      <div>{dict.sidebar.listBusiness}</div>
                    </div>
                  </Link>
                  <Link
                    href={`${APP_ROUTE.ADMIN_BUSINESS_VALUATION}`}
                    replace={true}
                    prefetch={false}
                    className="cursor-pointer"
                  >
                    <div className="flex items-center gap-[12px] mb-3">
                      <div className="rounded-full pl-[7px] pr-[11px] py-[8px]">
                        <SavedsearchIcon />
                      </div>
                      <div>{dict.sidebar.businessValuation}</div>
                    </div>
                  </Link>
                </>
              )}
              <Link
                href={`${APP_ROUTE.LOGOUT}`}
                replace={true}
                prefetch={false}
                className="cursor-pointer"
              >
                <div className="flex items-center gap-[12px]">
                  <div className="bg-blue-950 text-white rounded-full pl-[7px] pr-[11px] py-[8px]">
                    <LogoutIcon />
                  </div>
                  <div>{dict.sidebar.logout}</div>
                </div>
              </Link>
            </PopoverPanel>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default NavbarAdminDashboard;
