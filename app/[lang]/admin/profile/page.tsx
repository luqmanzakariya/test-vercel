import ProfileAdminPage from "@/components/pages/admin/profile";
import AdminDashboardTemplate from "@/components/templates/admin-dashboard";
import { getDictionary } from "@/dictionaries";
import { ServerPageProps } from "@/types/server_page";
import { decryptData } from "@/utils/api/server/decrypt-data";
import React from "react";

const ProfilePage = async (props: ServerPageProps) => {
  const params = await props.params;
  const dict = await getDictionary(params.lang);
  const getCookies = await decryptData();

  return (
    <AdminDashboardTemplate dict={dict}>
      <ProfileAdminPage dict={dict} userInfo={getCookies} />
    </AdminDashboardTemplate>
  );
};

export default ProfilePage;
