import { CLIENT_API_ROUTE } from "@/constant/api";
import publicService from "@/service/public";
import {
  IAccountSettingPayload,
  IAdminUpdateBusinessPayload,
  IBusinessListingPayload,
  IChangePasswordAdminPayload,
  ILoginPayload,
  IMessagePayload,
  IProfilePayload,
  IRegisterPayload,
  ISearchParamPayload,
  IWishlistPayload,
} from "@/types/authentication";

export const postLoginClient = async ({ email, password }: ILoginPayload) => {
  const res = await publicService.post(CLIENT_API_ROUTE.LOGIN, { email, password });
  return res;
};

export const postRegisterClient = async ({
  name,
  email,
  password,
  phone_number,
}: IRegisterPayload) => {
  const res = await publicService.post(CLIENT_API_ROUTE.REGISTER, {
    name,
    email,
    password,
    phone_number,
  });
  return res;
};

export const postProfileClient = async (input: IProfilePayload) => {
  const res = await publicService.post(CLIENT_API_ROUTE.PROFILE, input);
  return res;
};

export const postAccountSettingClient = async (input: IAccountSettingPayload) => {
  const res = await publicService.post(CLIENT_API_ROUTE.ACCOUNT_SETTING, input);
  return res;
};

export const postBusinessListingCreateClient = async (input: IBusinessListingPayload) => {
  const res = await publicService.post(CLIENT_API_ROUTE.BUSINESS_LISTING_CREATE, input);
  return res;
};

export const postBusinessListingUpdateClient = async (input: IBusinessListingPayload) => {
  const res = await publicService.post(CLIENT_API_ROUTE.BUSINESS_LISTING_UPDATE, input);
  return res;
};

export const postAdminUpdateBusinessClient = async (input: IAdminUpdateBusinessPayload) => {
  const res = await publicService.post(CLIENT_API_ROUTE.BUSINESS_LISTING_UPDATE_ADMIN, input);
  return res;
};

export const postMessageClient = async (input: IMessagePayload) => {
  const res = await publicService.post(CLIENT_API_ROUTE.MESSAGE_CREATE, input);
  return res;
};

export const postBusinessListingWithFilterClient = async (input: ISearchParamPayload) => {
  const res = await publicService.post(CLIENT_API_ROUTE.BUSINESS_LISTING_WITH_FILTER, input);
  return res;
};

export const postBusinessListingRefetchClient = async () => {
  const res = await publicService.post(CLIENT_API_ROUTE.BUSINESS_LISTING_REFETCH);
  return res;
};

export const postUploadImageClient = async (input: FormData) => {
  const res = await publicService.post(CLIENT_API_ROUTE.UPLOAD_IMAGE, input);
  return res;
};

export const postWishlistClient = async (input: IWishlistPayload) => {
  const res = await publicService.post(CLIENT_API_ROUTE.WISHLIST_CREATE, input);
  return res;
};

export const postUpdatePasswordAdminClient = async (input: IChangePasswordAdminPayload) => {
  const res = await publicService.post(CLIENT_API_ROUTE.UPDATE_PASSWORD_ADMIN, input);
  return res;
};
