import React from "react";
import { DictProps } from "@/types/dict";
import SidebarAdmin from "@/components/organisms/sidebarAdmin";
import { cookieUtils } from "@/utils/cookie";
import { COOKIE_KEYS } from "@/constant";
import { UserProps } from "@/types/userInfo";
import { decrypt } from "@/utils/crypto";
import { headers } from "next/headers";
import LanguageSwitcher from "@/components/molecules/languageSwitcher/index.tsx";
import NavbarAdminDashboard from "@/components/organisms/navbarAdminDashboard";

const AdminDashboardTemplate = async ({
  children,
  dict,
}: {
  children: React.ReactNode;
  dict: DictProps;
}) => {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "";
  const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);

  const userHash = await cookieUtils.get(COOKIE_KEYS.USER_INFO);
  const userInfo: UserProps = JSON.parse(decrypt(userHash as string));
  return (
    <div className="min-h-dvh h-full w-full">
      <div className="bg-bluePrimary flex items-center justify-end text-right pr-4 lg:pr-[47px] lg:h-[45px]">
        <LanguageSwitcher />
      </div>
      <div className="flex font-secondary">
        {!isMobile && <SidebarAdmin dict={dict} />}
        <div className="background-dashboard w-full min-h-screen">
          <NavbarAdminDashboard dict={dict} userInfo={userInfo} isMobile={isMobile} />
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardTemplate;
