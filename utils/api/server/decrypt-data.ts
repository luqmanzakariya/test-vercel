import { COOKIE_KEYS } from "@/constant";
import { cookieUtils } from "@/utils/cookie";
import { decrypt } from "@/utils/crypto";

export const decryptData = async () => {
  const getCookies = await cookieUtils.get(COOKIE_KEYS.USER_INFO);
  const decryptCookies = decrypt(getCookies as string);
  // console.log(decryptCookies);
  return JSON.parse(decryptCookies) || {};
};

export const getStorePageCounterCookie = async () => {
  const counterCookies = await cookieUtils.get(COOKIE_KEYS.PAGE_COUNTER);
  return counterCookies;
};
