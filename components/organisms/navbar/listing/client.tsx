"use client";
import BelibizIcon from "@/components/atoms/icons/belibiz";
import { DictProps } from "@/types/dict";
import Link from "next/link";
import Button from "@/components/atoms/button";
import ArrowBusiness from "@/components/atoms/icons/arrow-business";
import LockIcon from "@/components/atoms/icons/lock";
// import ChevronDown from "@/components/atoms/icons/chevronDown";
import ModalLogin from "../../modalLogin";
import { queryString } from "@/utils/queryString";
import { usePathname, useSearchParams } from "next/navigation";
import { UserProps } from "@/types/userInfo";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import LogoutIcon from "@/components/atoms/icons/logout";
import { APP_ROUTE } from "@/constant/route";
import Image from "next/image";
import UserPhoto from "@/public/assets/image/UserPhoto.webp";
import DashboardIcon from "@/components/atoms/icons/dashboard";

const NavbarListingClient = ({ dict, userInfo }: { dict: DictProps; userInfo?: UserProps }) => {
  const currentPathName = usePathname();
  const searchParams = useSearchParams();
  let query = {};

  if (searchParams?.entries) {
    query = Object.fromEntries(searchParams?.entries());
  }

  const toDashboard = userInfo?.type === "ADMIN" ? "/admin/list-user" : "/user/dashboard";

  return (
    <div className="px-4 lg:px-[0px] pt-[4px] lg:pt-7 lg:pl-[61px] lg:pr-[47px] block lg:flex lg:items-center lg:justify-between mb-6">
      <ModalLogin dict={dict} />
      <div className="flex justify-between items-center mt-2 lg:mt-0 mb-6 lg:mb-0">
        <Link href="/">
          <BelibizIcon className="w-[135px] lg:w-[270px] h-[25px] lg:h-[50px] lg:mb-[0]" />
        </Link>
        {/* Mobile Version */}
        <div className="flex lg:hidden items-center gap-4">
          {userInfo?.id ? (
            <>
              {userInfo?.type !== "ADMIN" ? (
                <Link
                  href={{
                    pathname: "/user/add-business",
                  }}
                >
                  <Button variant="primary" style="w-[121px] lg:w-[185px] h-[40px] lg:h-[55px]">
                    <div className="flex items-center gap-[34px]">
                      <div>{dict.common.addBusiness}</div>
                      <ArrowBusiness className="hidden lg:block" />
                    </div>
                  </Button>
                </Link>
              ) : (
                <></>
              )}
              <Popover className="h-[40px]">
                <PopoverButton className="outline-none">
                  {userInfo && userInfo.photo_profile ? (
                    <Image
                      src={userInfo.photo_profile}
                      alt="User Photo"
                      className="object-none w-[40px] lg:w-[65px] h-[40px] lg:h-[65px] rounded-full border-2 border-black bg-white"
                      width={50}
                      height={50}
                    />
                  ) : (
                    <Image
                      src={UserPhoto}
                      alt="User Photo"
                      className="object-none w-[40px] lg:w-[65px] h-[40px] lg:h-[65px] rounded-full"
                    />
                  )}
                </PopoverButton>
                <PopoverPanel
                  anchor="bottom end"
                  transition
                  className="mt-1 bg-white p-4 rounded-[15px] transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
                >
                  <Link
                    href={{
                      pathname: toDashboard,
                    }}
                  >
                    <div className="flex items-center gap-[12px] mb-2">
                      <div className="bg-blue-950 text-white rounded-full pl-[10px] pr-[10px] py-[8px]">
                        <DashboardIcon className="stroke-white" />
                      </div>
                      <div>{dict.sidebar.dashboard}</div>
                    </div>
                  </Link>
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
            </>
          ) : (
            <div className="lg:min-w-[18rem] flex justify-end">
              <Link
                href={{
                  pathname: currentPathName,
                  query: queryString({ ...query, login: "show", register: undefined }),
                }}
                replace={true}
              >
                <Button
                  variant="secondary"
                  style="w-[102px] lg:w-[130px] h-[41px] lg:h-[55px] mt-2 lg:mt-0"
                >
                  <div className="flex items-center gap-[12px]">
                    {dict.common.login}
                    <LockIcon />
                  </div>
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center justify-between w-[100%] lg:w-[520px] gap-[10px] lg:gap-[0px]">
        <Link href="/" className="nabar-items text-[18px] lg:text-[24px]">
          {dict.navbar.home}
        </Link>
        <Link
          href={userInfo?.id ? APP_ROUTE.LISTING : `${currentPathName}?login=show`}
          className="nabar-items text-[18px] lg:text-[24px]"
        >
          {dict.navbar.buyBusiness}
        </Link>
        <Link
          href={userInfo?.id ? APP_ROUTE.USER_ADD_BUSINESS : `${currentPathName}?login=show`}
          className="nabar-items text-[18px] lg:text-[24px]"
        >
          {dict.navbar.sellBusiness}
        </Link>
        <Link
          href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Hello, I'm interested in your business services and would like to get more information.`}
          className="nabar-items text-[18px] lg:text-[24px]"
          target="_blank"
          rel="noopener noreferrer"
        >
          {dict.navbar.consultation}
        </Link>
        {/* <Link
          href={userInfo?.id ? APP_ROUTE.LISTING : `${currentPathName}?login=show`}
          className="nabar-items text-[18px] lg:text-[24px]"
        >
          {dict.navbar.contactUs}
        </Link> */}
      </div>
      {/* Desktop Version */}
      <div className="hidden lg:flex items-center gap-4">
        {userInfo?.id ? (
          <>
            {userInfo?.type !== "ADMIN" ? (
              <Link
                href={{
                  pathname: "/user/add-business",
                }}
              >
                <Button variant="primary" style="w-[185px] h-[55px]">
                  <div className="flex items-center gap-[34px]">
                    <div>{dict.common.addBusiness}</div>
                    <ArrowBusiness />
                  </div>
                </Button>
              </Link>
            ) : (
              <></>
            )}
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
                <Link
                  href={{
                    pathname: toDashboard,
                  }}
                >
                  <div className="flex items-center gap-[12px] mb-2">
                    <div className="bg-blue-950 text-white rounded-full pl-[10px] pr-[10px] py-[8px]">
                      <DashboardIcon className="stroke-white" />
                    </div>
                    <div>{dict.sidebar.dashboard}</div>
                  </div>
                </Link>
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
          </>
        ) : (
          <div className="min-w-[18rem] flex justify-end">
            <Link
              href={{
                pathname: currentPathName,
                query: queryString({ ...query, login: "show", register: undefined }),
              }}
              replace={true}
            >
              <Button variant="secondary" style="w-[130px] h-[55px]">
                <div className="flex items-center gap-[12px]">
                  {dict.common.login}
                  <LockIcon />
                </div>
              </Button>
            </Link>
            {/* <Button variant="primary" style="w-[185px] h-[55px]">
              <div className="flex items-center gap-[34px]">
                <div>{dict.common.addBusiness}</div>
                <ArrowBusiness />
              </div>
            </Button> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarListingClient;
