import ComingSoonPage from "@/components/pages/user/coming-soon";
import DashboardTemplate from "@/components/templates/dashboard";
import { getDictionary } from "@/dictionaries";
import { ServerPageProps } from "@/types/server_page";
import React from "react";

const Membership = async (props: ServerPageProps) => {
  const params = await props.params;
  const dict = await getDictionary(params.lang);
  return (
    <DashboardTemplate dict={dict}>
      <ComingSoonPage />
    </DashboardTemplate>
  );
};

export default Membership;
