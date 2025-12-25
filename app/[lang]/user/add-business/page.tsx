import React from "react";
import AddPropertyUserPage from "@/components/pages/user/add-property";
import DashboardTemplate from "@/components/templates/dashboard";
import { getDictionary } from "@/dictionaries";
import { ServerPageProps } from "@/types/server_page";
import { CountriesResponse } from "@/types/location";
import { getCountries } from "@/utils/api/server/location";

const AddProperty = async (props: ServerPageProps) => {
  const params = await props.params;
  const dict = await getDictionary(params.lang);
  const countries: CountriesResponse = await getCountries();

  return (
    <DashboardTemplate dict={dict}>
      <AddPropertyUserPage dict={dict} countries={countries?.data} />
    </DashboardTemplate>
  );
};

export default AddProperty;
