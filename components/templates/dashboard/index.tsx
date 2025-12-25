import React from "react";
import Sidebar from "@/components/organisms/sidebar";
import NavbarDashboard from "@/components/organisms/navbarDashboard";
import { DictProps } from "@/types/dict";
import { UserProps } from "@/types/userInfo";
import { cookieUtils } from "@/utils/cookie";
import { COOKIE_KEYS } from "@/constant";
import { decrypt } from "@/utils/crypto";
import { headers } from "next/headers";
import LanguageSwitcher from "@/components/molecules/languageSwitcher/index.tsx";

const DashboardTemplate = async ({
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
        {!isMobile && <Sidebar dict={dict} />}
        <div className="background-dashboard w-full min-h-screen">
          <NavbarDashboard dict={dict} userInfo={userInfo} isMobile={isMobile} />
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardTemplate;
