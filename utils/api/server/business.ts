import belibizService from "@/service/belibiz";
import { BELIBIZ_SERVICE_ROUTE } from "@/constant/api";
import {
  BusinessListingResponse,
  BusinessListingEditResponse,
  UserResponse,
  WishlistResponse,
  UsersResponse,
  BusinessValuationResponse,
  BusinessValuationDetailResponse,
  BusinessValuationDetail,
  MessageResponse,
  DashboardSummaryResponse,
  ListingViewStatResponse,
} from "@/types/business";
import moment from "moment";

export const getBusinessListingPublic = async (): Promise<BusinessListingResponse> => {
  const res = await belibizService.get(BELIBIZ_SERVICE_ROUTE.BUSINESS_LISTING_PUBLIC);
  return res?.data;
};

export const getBusinessListingPublicLandingPage = async (): Promise<BusinessListingResponse> => {
  const res = await belibizService.get(`${BELIBIZ_SERVICE_ROUTE.BUSINESS_LISTING_PUBLIC}?limit=6`);
  return res?.data;
};

export const getBusinessListingPublicWithFilter = async (
  params: string
): Promise<BusinessListingResponse> => {
  const res = await belibizService.get(`${BELIBIZ_SERVICE_ROUTE.BUSINESS_LISTING_PUBLIC}${params}`);
  return res?.data;
};

export const getBusinessListingUSER = async (): Promise<BusinessListingResponse> => {
  const res = await belibizService.get(BELIBIZ_SERVICE_ROUTE.BUSINESS_LISTING_USER);
  return res?.data;
};

export const getBusinessListingAdmin = async (): Promise<BusinessListingResponse> => {
  const res = await belibizService.get(BELIBIZ_SERVICE_ROUTE.BUSINESS_LISTING_ADMIN);
  return res?.data;
};

export const getBusinessListingByIDHome = async (
  id: string
): Promise<BusinessListingEditResponse> => {
  const res = await belibizService.get(`${BELIBIZ_SERVICE_ROUTE.BUSINESS_LISTING_BYID}?id=${id}`);
  return res?.data;
};

export const getBusinessListingByID = async (id: string): Promise<BusinessListingEditResponse> => {
  const res = await belibizService.get(`${BELIBIZ_SERVICE_ROUTE.BUSINESS_LISTING_BYID}?id=${id}`);
  return res?.data;
};

export const getUserById = async (id: string): Promise<UserResponse> => {
  const res = await belibizService.get(`${BELIBIZ_SERVICE_ROUTE.USER_BY_ID}?id=${id}`);
  return res?.data;
};

export const getWishlist = async (): Promise<WishlistResponse> => {
  const res = await belibizService.get(BELIBIZ_SERVICE_ROUTE.WISHLIST);
  return res?.data;
};

export const getUserAdmin = async (): Promise<UsersResponse> => {
  const res = await belibizService.get(`${BELIBIZ_SERVICE_ROUTE.GET_USER_ADMIN}`);
  return res?.data;
};

export const getBusinessValuation = async (): Promise<BusinessValuationResponse> => {
  const res = await belibizService.get(`${BELIBIZ_SERVICE_ROUTE.BUSINESS_VALUATION}`);
  return res?.data;
};

export const getBusinessValuationByID = async (
  id: string
): Promise<BusinessValuationDetailResponse> => {
  const res = await belibizService.get(`${BELIBIZ_SERVICE_ROUTE.BUSINESS_VALUATION_BYID}?id=${id}`);
  return res?.data;
};

export const postBusinessValuation = async (
  payload: BusinessValuationDetail
): Promise<BusinessValuationDetailResponse> => {
  const res = await belibizService.post(
    `${BELIBIZ_SERVICE_ROUTE.BUSINESS_VALUATION_POST}`,
    payload
  );
  return res?.data;
};

export const getMessage = async (limit?: number): Promise<MessageResponse> => {
  const res = await belibizService.get(
    `${BELIBIZ_SERVICE_ROUTE.GET_MESSAGE}${limit ? `?limit=${limit}` : ""}`
  );
  return res?.data;
};

export const getDashboardSummary = async (): Promise<DashboardSummaryResponse> => {
  const res = await belibizService.get(BELIBIZ_SERVICE_ROUTE.SUMMARY);
  return res?.data;
};

export const getListingViewStat = async (): Promise<ListingViewStatResponse> => {
  const currentDate = moment(new Date()).format("YYYY-MM-DD");
  const currentDateMinus7 = moment(new Date()).subtract(7, "days").format("YYYY-MM-DD");
  const res = await belibizService.get(
    `${BELIBIZ_SERVICE_ROUTE.BUSINESS_LISTING_VIEW_STAT}?start_date=${currentDateMinus7}&end_date=${currentDate}`
  );
  return res?.data;
};
