import { CLIENT_API_ROUTE } from "@/constant/api";
import publicService from "@/service/public";

export const postGetStatesClient = async (countryId: number) => {
  const res = await publicService.post(CLIENT_API_ROUTE.GET_STATES, { countryId });
  return res;
};
