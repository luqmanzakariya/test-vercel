import ChangePasswordUserPage from "@/components/pages/user/change-password";
import DashboardTemplate from "@/components/templates/dashboard";
import { getDictionary } from "@/dictionaries";
import { ServerPageProps } from "@/types/server_page";
import React from "react";

const AccountSetting = async (props: ServerPageProps) => {
  const params = await props.params;
  const dict = await getDictionary(params.lang);

  return (
    <DashboardTemplate dict={dict}>
      <ChangePasswordUserPage dict={dict} />
    </DashboardTemplate>
  );
};

export default AccountSetting;
