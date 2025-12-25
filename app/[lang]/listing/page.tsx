import { getDictionary } from "@/dictionaries";
import { ServerPageProps } from "@/types/server_page";
import ListingTemplate from "@/components/templates/listing.tsx";
import ListingPage from "@/components/pages/listing";
import { getBusinessListingPublic } from "@/utils/api/server/business";
import { getCountries, getStateByCountry } from "@/utils/api/server/location";
import { CountriesResponse, StateResponse } from "@/types/location";
import { BusinessListingResponse } from "@/types/business";
import { cookieUtils } from "@/utils/cookie";
import { decrypt } from "@/utils/crypto";
import { COOKIE_KEYS } from "@/constant";
import { UserProps } from "@/types/userInfo";

const Listing = async (props: ServerPageProps) => {
  try {
    const params = await props.params;
    const dict = await getDictionary(params.lang);
    const businessListData: BusinessListingResponse = await getBusinessListingPublic();
    const countries: CountriesResponse = await getCountries();
    const selectedCountry = countries.data.find((country) => country.country === "Indonesia");
    const states: StateResponse = selectedCountry?.id
      ? await getStateByCountry(selectedCountry.id)
      : { data: [], message: "", status: "" };

    const userHash = await cookieUtils.get(COOKIE_KEYS.USER_INFO);
    let userInfo = {} as UserProps;
    if (userHash) {
      userInfo = JSON.parse(decrypt(userHash as string));
    }
    return (
      <ListingTemplate dict={dict}>
        <ListingPage
          dict={dict}
          businessListData={businessListData}
          userInfo={userInfo}
          states={states?.data}
        />
      </ListingTemplate>
    );
  } catch (error) {
    console.log(error);
  }
};

export default Listing;
