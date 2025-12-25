import ChangePasswordAdminPage from "@/components/pages/admin/change-password";
import AdminDashboardTemplate from "@/components/templates/admin-dashboard";
import { getDictionary } from "@/dictionaries";
import { ServerPageProps } from "@/types/server_page";
import React from "react";

const ChangePassword = async (props: ServerPageProps) => {
  const params = await props.params;
  const dict = await getDictionary(params.lang);

  return (
    <AdminDashboardTemplate dict={dict}>
      <ChangePasswordAdminPage dict={dict} />
    </AdminDashboardTemplate>
  );
};

export default ChangePassword;
