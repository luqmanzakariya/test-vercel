import ComingSoonPage from "@/components/pages/user/coming-soon";
import AdminDashboardTemplate from "@/components/templates/admin-dashboard";
import { getDictionary } from "@/dictionaries";
import { ServerPageProps } from "@/types/server_page";
import React from "react";

const Dashboard = async (props: ServerPageProps) => {
  const params = await props.params;
  const dict = await getDictionary(params.lang);
  return (
    <AdminDashboardTemplate dict={dict}>
      <ComingSoonPage />
    </AdminDashboardTemplate>
  );
};

export default Dashboard;
