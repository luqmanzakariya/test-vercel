import { BELIBIZ_SERVICE_ROUTE } from "@/constant/api";
import belibizService from "@/service/belibiz";

export const postCountBusinessListingView = async (
  id: string
): Promise<{ data: null; message: string; status: string }> => {
  const res = await belibizService.get(
    `${BELIBIZ_SERVICE_ROUTE.BUSINESS_LISTING_VIEW}?business_listing_id=${id}`
  );
  return res?.data;
};
