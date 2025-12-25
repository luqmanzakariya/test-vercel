import { BELIBIZ_SERVICE_ROUTE } from "@/constant/api";
import belibizService from "@/service/belibiz";
import {
  IAccountSettingPayload,
  IBusinessListingPayload,
  IChangePasswordAdminPayload,
  ILoginPayload,
  IMessagePayload,
  IProfilePayload,
  IRegisterPayload,
  IWishlistPayload,
} from "@/types/authentication";

export const postLoginServer = async ({ email, password }: ILoginPayload) => {
  const res = await belibizService.post(BELIBIZ_SERVICE_ROUTE.LOGIN, { email, password });
  return res;
};

export const postRegisterServer = async ({
  name,
  email,
  password,
  phone_number,
}: IRegisterPayload) => {
  const res = await belibizService.post(BELIBIZ_SERVICE_ROUTE.REGISTER, {
    name,
    email,
    password,
    phone_number,
  });
  return res;
};

export const postProfileServer = async (input: IProfilePayload) => {
  const res = await belibizService.put(BELIBIZ_SERVICE_ROUTE.PROFILE, input);
  return res;
};

export const postAccountSettingServer = async (input: IAccountSettingPayload) => {
  const res = await belibizService.put(BELIBIZ_SERVICE_ROUTE.ACCOUNT_SETTING, input);
  return res;
};

export const postBusinessListingCreateServer = async (input: IBusinessListingPayload) => {
  const res = await belibizService.post(BELIBIZ_SERVICE_ROUTE.BUSINESS_LISTING_CREATE, input);
  return res;
};

export const postBusinessListingUpdateServer = async (input: IBusinessListingPayload) => {
  const res = await belibizService.put(BELIBIZ_SERVICE_ROUTE.BUSINESS_LISTING_UPDATE, input);
  return res;
};

export const postBusinessListingUpdateAdminServer = async (input: IBusinessListingPayload) => {
  const res = await belibizService.put(BELIBIZ_SERVICE_ROUTE.BUSINESS_LISTING_UPDATE_ADMIN, input);
  return res;
};

export const postMessageServer = async (input: IMessagePayload) => {
  const res = await belibizService.post(BELIBIZ_SERVICE_ROUTE.MESSAGE_CREATE, input);
  return res;
};

export const postUploadImageServer = async (input: FormData) => {
  const res = await belibizService.post(BELIBIZ_SERVICE_ROUTE.UPLOAD_IMAGE, input);
  return res;
};

export const postWishlistServer = async (input: IWishlistPayload) => {
  const res = await belibizService.post(BELIBIZ_SERVICE_ROUTE.WISHLIST_CREATE, input);
  return res;
};

export const deleteWishlistServer = async (input: number) => {
  const res = await belibizService.delete(
    `${BELIBIZ_SERVICE_ROUTE.WISHLIST_DELETE}?business_listing_id=${input}`
  );
  return res;
};

export const postUpdatePasswordAdminServer = async (input: IChangePasswordAdminPayload) => {
  const res = await belibizService.post(BELIBIZ_SERVICE_ROUTE.UPDATE_PASSWORD_ADMIN, input);
  return res;
};
