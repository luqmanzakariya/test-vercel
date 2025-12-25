import { CLIENT_API_ROUTE } from "@/constant/api";
import publicService from "@/service/public";

export const checkPageCounterClient = async (id: string) => {
  const res = await publicService.get(`${CLIENT_API_ROUTE.PAGE_COUNTER}?id=${id}`);
  return res;
};
