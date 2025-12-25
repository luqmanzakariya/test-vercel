import ProfileUserPage from "@/components/pages/user/profile";
import DashboardTemplate from "@/components/templates/dashboard";
import { getDictionary } from "@/dictionaries";
import { ServerPageProps } from "@/types/server_page";
import { decryptData } from "@/utils/api/server/decrypt-data";
import React from "react";
import { CountriesResponse } from "@/types/location";
import { getCountries } from "@/utils/api/server/location";

const Profile = async (props: ServerPageProps) => {
  const params = await props.params;
  const dict = await getDictionary(params.lang);
  const getCookies = await decryptData();
  const countries: CountriesResponse = await getCountries();

  return (
    <DashboardTemplate dict={dict}>
      <ProfileUserPage dict={dict} userInfo={getCookies} countries={countries?.data} />
    </DashboardTemplate>
  );
};

export default Profile;
