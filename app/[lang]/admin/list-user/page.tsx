import ListUserPage from "@/components/pages/admin/list-user";
import AdminDashboardTemplate from "@/components/templates/admin-dashboard";
import { getDictionary } from "@/dictionaries";
import { UsersResponse } from "@/types/business";
import { ServerPageProps } from "@/types/server_page";
import { getUserAdmin } from "@/utils/api/server/business";
import React from "react";

const ListUser = async (props: ServerPageProps) => {
  const params = await props.params;
  const dict = await getDictionary(params.lang);
  const userListData: UsersResponse = await getUserAdmin();
  return (
    <AdminDashboardTemplate dict={dict}>
      <ListUserPage dict={dict} userListData={userListData} />
    </AdminDashboardTemplate>
  );
};

export default ListUser;
