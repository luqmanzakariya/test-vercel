import React from "react";
import AddPropertyUserPage from "@/components/pages/user/add-property";
import DashboardTemplate from "@/components/templates/dashboard";
import { getDictionary } from "@/dictionaries";
import { BusinessListingEditResponse } from "@/types/business";
import { ServerPageProps } from "@/types/server_page";
import { getBusinessListingByID } from "@/utils/api/server/business";
import { CountriesResponse } from "@/types/location";
import { getCountries } from "@/utils/api/server/location";

const MyBusinessUpdatePage = async (props: ServerPageProps) => {
  const params = await props.params;
  const dict = await getDictionary(params.lang);
  let id = "";
  if (props?.searchParams) {
    id = (await props?.searchParams).id;
  }
  const businessListData: BusinessListingEditResponse = await getBusinessListingByID(id as string);
  const countries: CountriesResponse = await getCountries();

  return (
    <DashboardTemplate dict={dict}>
      <AddPropertyUserPage
        dict={dict}
        businessListData={businessListData}
        countries={countries?.data}
      />
    </DashboardTemplate>
  );
};

export default MyBusinessUpdatePage;
