import BusinessValuationDetailPage from "@/components/pages/admin/business-valuation-detail";
import AdminDashboardTemplate from "@/components/templates/admin-dashboard";
import { getDictionary } from "@/dictionaries";
import {
  BusinessValuationDetail as BusinessValuation,
  BusinessValuationDetailResponse,
} from "@/types/business";
import { ServerPageProps } from "@/types/server_page";
import { getBusinessValuationByID } from "@/utils/api/server/business";
import React from "react";

const BusinessValuationDetail = async (props: ServerPageProps) => {
  const params = await props.params;
  const dict = await getDictionary(params.lang);
  let data: BusinessValuationDetailResponse = {
    data: {} as BusinessValuation,
    message: "",
    status: "",
  };
  if (params.id) {
    data = await getBusinessValuationByID(params.id);
  }
  return (
    <AdminDashboardTemplate dict={dict}>
      <BusinessValuationDetailPage dict={dict} businessValuation={data?.data} />
    </AdminDashboardTemplate>
  );
};

export default BusinessValuationDetail;
