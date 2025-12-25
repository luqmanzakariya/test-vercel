import { CLIENT_API_ROUTE } from "@/constant/api";
import publicService from "@/service/public";
import { BusinessValuationDetail } from "@/types/business";

export const postBusinessValuationClient = async (input: BusinessValuationDetail) => {
  const res = await publicService.post(CLIENT_API_ROUTE.BUSINESS_VALUATION, input);
  return res;
};
