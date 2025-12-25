import { CLIENT_API_ROUTE } from "@/constant/api";
import publicService from "@/service/public";

export const postWishlistDeleteClient = async (input: number) => {
  const res = await publicService.post(CLIENT_API_ROUTE.WISHLIST_DELETE, input);
  return res;
};
