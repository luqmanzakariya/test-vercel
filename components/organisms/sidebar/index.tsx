"use client";
import BelibizIcon from "@/components/atoms/icons/belibiz";
import DashboardIcon from "@/components/atoms/icons/dashboard";
import MessageIcon from "@/components/atoms/icons/message";
import ProfileIcon from "@/components/atoms/icons/profile";
import SettingIcon from "@/components/atoms/icons/setting";
// import MembershipIcon from "@/components/atoms/icons/membership";
import MyPropertiesIcon from "@/components/atoms/icons/myproperties";
import AddNewIcon from "@/components/atoms/icons/add-new";
import FavoritesIcon from "@/components/atoms/icons/favorites";
// import SavedsearchIcon from "@/components/atoms/icons/savedsearch";
// import ReviewIcon from "@/components/atoms/icons/review";
import LogoutIcon from "@/components/atoms/icons/logout";
import { DictProps } from "@/types/dict";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { APP_ROUTE } from "@/constant/route";

const Sidebar = ({ dict }: { dict: DictProps }) => {
  const pathname = usePathname();
  const splitPathname = pathname.substring(3);
  return (
    <div className="w-[280px] h-full justify-items-center">
      <Link href="/">
        <div className="px-[45px] py-[35px] w-full border-b border-gray-300">
          <BelibizIcon className="w-[180px] h-fit" />
        </div>
      </Link>
      <div className="px-[30px] py-[35px] w-full border-b border-gray-300">
        <Link
          href="/user/dashboard"
          className={`flex items-center ${splitPathname === "/user/dashboard" ? "sidebar-selected" : "sidebar-button"}`}
        >
          <DashboardIcon
            className={`w-[20px] h-[20px] mx-[15px] ${splitPathname === "/user/dashboard" ? "stroke-white" : ""}`}
          />
          <div>{dict.sidebar.dashboard}</div>
        </Link>
        <Link
          href="/user/message"
          className={`flex items-center ${splitPathname === "/user/message" ? "sidebar-selected" : "sidebar-button"}`}
        >
          <MessageIcon
            className={`w-[20px] h-[20px] mx-[15px] ${splitPathname === "/user/message" ? "stroke-white" : ""}`}
          />
          <div>{dict.sidebar.message}</div>
        </Link>
      </div>
      <div className="px-[30px] py-[35px] w-full border-b border-gray-300">
        <div className="ml-[15px] text-[13px] text-gray-500 mb-2">
          {dict.sidebar.profile.toUpperCase()}
        </div>
        <Link
          href="/user/profile"
          className={`flex items-center ${splitPathname === "/user/profile" ? "sidebar-selected" : "sidebar-button"}`}
        >
          <ProfileIcon
            className={`w-[20px] h-[20px] mx-[15px] ${splitPathname === "/user/profile" ? "stroke-white" : ""}`}
          />
          <div>{dict.sidebar.profile}</div>
        </Link>
        <Link
          href="/user/change-password"
          className={`flex items-center ${splitPathname === "/user/change-password" ? "sidebar-selected" : "sidebar-button"}`}
        >
          <SettingIcon
            className={`w-[20px] h-[20px] mx-[15px] ${splitPathname === "/user/change-password" ? "stroke-white" : ""}`}
          />
          <div>{dict.sidebar.changePassword}</div>
        </Link>
        {/* <Link
          href="/user/membership"
          className={`flex items-center ${splitPathname === "/user/membership" ? "sidebar-selected" : "sidebar-button"}`}
        >
          <MembershipIcon
            className={`w-[20px] h-[20px] mx-[15px] ${splitPathname === "/user/membership" ? "stroke-white" : ""}`}
          />
          <div>{dict.sidebar.membership}</div>
        </Link> */}
      </div>
      <div className="px-[30px] py-[35px] w-full border-b border-gray-300">
        <div className="ml-[15px] text-[13px] text-gray-500 mb-2">
          {dict.sidebar.listing.toUpperCase()}
        </div>
        <Link
          href="/user/my-business"
          className={`flex items-center ${splitPathname === "/user/my-business" ? "sidebar-selected" : "sidebar-button"}`}
        >
          <MyPropertiesIcon
            className={`w-[20px] h-[20px] mx-[15px] ${splitPathname === "/user/my-business" ? "stroke-white" : ""}`}
          />
          <div>{dict.sidebar.myProperties}</div>
        </Link>
        <Link
          href="/user/add-business"
          className={`flex items-center ${splitPathname === "/user/add-business" ? "sidebar-selected" : "sidebar-button"}`}
        >
          <AddNewIcon
            className={`w-[20px] h-[20px] mx-[15px] ${splitPathname === "/user/add-business" ? "stroke-white" : ""}`}
          />
          <div>{dict.sidebar.addNewProperty}</div>
        </Link>
        <Link
          href="/user/favorites"
          className={`flex items-center ${splitPathname === "/user/favorites" ? "sidebar-selected" : "sidebar-button"}`}
        >
          <FavoritesIcon
            className={`w-[20px] h-[20px] mx-[15px] ${splitPathname === "/user/favorites" ? "stroke-white" : ""}`}
          />
          <div>{dict.sidebar.favorites}</div>
        </Link>
        {/* <Link
          href="/user/saved-search"
          className={`flex items-center ${splitPathname === "/user/saved-search" ? "sidebar-selected" : "sidebar-button"}`}
        >
          <SavedsearchIcon
            className={`w-[20px] h-[20px] mx-[15px] ${splitPathname === "/user/saved-search" ? "stroke-white" : ""}`}
          />
          <div>{dict.sidebar.savedSearch}</div>
        </Link>
        <Link
          href="/user/review"
          className={`flex items-center ${splitPathname === "/user/review" ? "sidebar-selected" : "sidebar-button"}`}
        >
          <ReviewIcon
            className={`w-[20px] h-[20px] mx-[15px] ${splitPathname === "/user/review" ? "stroke-white" : ""}`}
          />
          <div>{dict.sidebar.review}</div>
        </Link> */}
      </div>
      {/* <div className="px-[30px] py-[35px] w-full border-b border-gray-300">
        <div className="mb-2">82%</div>
        <div className="w-full h-2 bg-gray-300 rounded-full mb-2">
          <div className="w-2/3 h-full text-center text-xs text-white bg-red-800 rounded-full"></div>
        </div>
        <div className="text-[11px] text-gray-500">{dict.sidebar.profileCompleted}</div>
      </div> */}
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

export default Sidebar;
