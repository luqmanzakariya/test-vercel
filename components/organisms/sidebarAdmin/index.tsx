"use client";
import BelibizIcon from "@/components/atoms/icons/belibiz";
// import DashboardIcon from "@/components/atoms/icons/dashboard";
// import MessageIcon from "@/components/atoms/icons/message";
import ProfileIcon from "@/components/atoms/icons/profile";
import SettingIcon from "@/components/atoms/icons/setting";
import MyPropertiesIcon from "@/components/atoms/icons/myproperties";
import LogoutIcon from "@/components/atoms/icons/logout";
import { DictProps } from "@/types/dict";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { APP_ROUTE } from "@/constant/route";
import SavedsearchIcon from "@/components/atoms/icons/savedsearch";

const SidebarAdmin = ({ dict }: { dict: DictProps }) => {
  const pathname = usePathname();
  const splitPathname = pathname.substring(3);
  return (
    <div className="w-[280px] h-full justify-items-center">
      <Link href="/">
        <div className="px-[45px] py-[35px] w-full border-b border-gray-300">
          <BelibizIcon className="w-[180px] h-fit" />
        </div>
      </Link>
      {/* <div className="px-[30px] py-[35px] w-full border-b border-gray-300">
        <Link
          href="/admin/dashboard"
          className={`flex items-center ${splitPathname === "/admin/dashboard" ? "sidebar-selected" : "sidebar-button"}`}
        >
          <DashboardIcon
            className={`w-[20px] h-[20px] mx-[15px] ${splitPathname === "/admin/dashboard" ? "stroke-white" : ""}`}
          />
          <div>{dict.sidebar.dashboard}</div>
        </Link>
        <Link
          href="/admin/message"
          className={`flex items-center ${splitPathname === "/admin/message" ? "sidebar-selected" : "sidebar-button"}`}
        >
          <MessageIcon
            className={`w-[20px] h-[20px] mx-[15px] ${splitPathname === "/admin/message" ? "stroke-white" : ""}`}
          />
          <div>{dict.sidebar.message}</div>
        </Link>
      </div> */}
      <div className="px-[30px] py-[35px] w-full border-b border-gray-300">
        <div className="ml-[15px] text-[13px] text-gray-500 mb-2">
          {dict.sidebar.profile.toUpperCase()}
        </div>
        <Link
          href="/admin/profile"
          className={`flex items-center ${splitPathname === "/admin/profile" ? "sidebar-selected" : "sidebar-button"}`}
        >
          <ProfileIcon
            className={`w-[20px] h-[20px] mx-[15px] ${splitPathname === "/admin/profile" ? "stroke-white" : ""}`}
          />
          <div>{dict.sidebar.profile}</div>
        </Link>
        <Link
          href="/admin/change-password"
          className={`flex items-center ${splitPathname === "/admin/change-password" ? "sidebar-selected" : "sidebar-button"}`}
        >
          <SettingIcon
            className={`w-[20px] h-[20px] mx-[15px] ${splitPathname === "/admin/change-password" ? "stroke-white" : ""}`}
          />
          <div>{dict.sidebar.changePassword}</div>
        </Link>
      </div>
      <div className="px-[30px] py-[35px] w-full border-b border-gray-300">
        <div className="ml-[15px] text-[13px] text-gray-500 mb-2">
          {dict.sidebar.listing.toUpperCase()}
        </div>
        <Link
          href="/admin/list-user"
          className={`flex items-center ${splitPathname === "/admin/list-user" ? "sidebar-selected" : "sidebar-button"}`}
        >
          <ProfileIcon
            className={`w-[20px] h-[20px] mx-[15px] ${splitPathname === "/admin/list-user" ? "stroke-white" : ""}`}
          />
          <div>{dict.sidebar.listUser}</div>
        </Link>
        <Link
          href="/admin/list-business"
          className={`flex items-center ${splitPathname === "/admin/list-business" ? "sidebar-selected" : "sidebar-button"}`}
        >
          <MyPropertiesIcon
            className={`w-[20px] h-[20px] mx-[15px] ${splitPathname === "/admin/list-business" ? "stroke-white" : ""}`}
          />
          <div>{dict.sidebar.listBusiness}</div>
        </Link>
        <Link
          href="/admin/business-valuation"
          className={`flex items-center ${splitPathname === "/admin/business-valuation" ? "sidebar-selected" : "sidebar-button"}`}
        >
          <SavedsearchIcon
            className={`w-[20px] h-[20px] mx-[15px] ${splitPathname === "/admin/business-valuation" ? "stroke-white" : ""}`}
          />
          <div>{dict.sidebar.businessValuation}</div>
        </Link>
      </div>
      <div className="px-[30px] py-[35px] w-full">
        <Link
          href={`${APP_ROUTE.LOGOUT}`}
          replace={true}
          prefetch={false}
          className="cursor-pointer"
        >
          <div className="flex items-center">
            <div className="bg-blue-950 text-white rounded-full pl-[7px] pr-[11px] py-[8px] mr-2">
              <LogoutIcon />
            </div>
            <div>{dict.sidebar.logout}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SidebarAdmin;
