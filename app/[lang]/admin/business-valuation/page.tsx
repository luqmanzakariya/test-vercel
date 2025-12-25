import BusinessValuationPage from "@/components/pages/admin/business-valuation";
import AdminDashboardTemplate from "@/components/templates/admin-dashboard";
import { getDictionary } from "@/dictionaries";
import { BusinessValuationResponse } from "@/types/business";
import { ServerPageProps } from "@/types/server_page";
import { getBusinessValuation } from "@/utils/api/server/business";
import React from "react";

const BusinessValuation = async (props: ServerPageProps) => {
  const params = await props.params;
  const dict = await getDictionary(params.lang);
  const businessValuationData: BusinessValuationResponse = await getBusinessValuation();
  return (
    <AdminDashboardTemplate dict={dict}>
      <BusinessValuationPage dict={dict} businessValuationData={businessValuationData} />
    </AdminDashboardTemplate>
  );
};

export default BusinessValuation;
