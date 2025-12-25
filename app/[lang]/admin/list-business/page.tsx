import ListBusinessPage from "@/components/pages/admin/list-business";
import AdminDashboardTemplate from "@/components/templates/admin-dashboard";
import { getDictionary } from "@/dictionaries";
import { BusinessListingResponse } from "@/types/business";
import { ServerPageProps } from "@/types/server_page";
import { getBusinessListingAdmin } from "@/utils/api/server/business";
import React from "react";

const MyBusiness = async (props: ServerPageProps) => {
  const params = await props.params;
  const dict = await getDictionary(params.lang);
  const businessListData: BusinessListingResponse = await getBusinessListingAdmin();

  return (
    <AdminDashboardTemplate dict={dict}>
      <ListBusinessPage dict={dict} businessListData={businessListData} />
    </AdminDashboardTemplate>
  );
};

export default MyBusiness;
