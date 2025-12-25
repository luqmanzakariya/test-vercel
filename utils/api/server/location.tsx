import { BELIBIZ_SERVICE_ROUTE } from "@/constant/api";
import belibizService from "@/service/belibiz";
import { CountriesResponse, StateResponse } from "@/types/location";
// import {
//   ILoginPayload,
// } from "@/types/authentication";

export const getCountries = async (): Promise<CountriesResponse> => {
  const res = await belibizService.get(BELIBIZ_SERVICE_ROUTE.GET_COUNTRIES);
  return res?.data;
};

export const getStateByCountry = async (countryId: string): Promise<StateResponse> => {
  const res = await belibizService.get(
    `${BELIBIZ_SERVICE_ROUTE.GET_STATES}?country_id=${countryId}`
  );
  return res?.data;
};
