import { COOKIE_KEYS } from "@/constant";
import { cookieUtils } from "@/utils/cookie";
import axios from "axios";
import { decrypt } from "@/utils/crypto";
import { redirect } from "next/navigation";
import { APP_ROUTE } from "@/constant/route";

const belibizService = axios.create({
  baseURL: process.env.BELIBIZ_API_URL,
  timeout: 30000,
});

belibizService.interceptors.request.use(
  async (config) => {
    const accessTokenEncrypted = await cookieUtils.get(COOKIE_KEYS.USER_TOKEN);
    if (accessTokenEncrypted) {
      const accessToken = decrypt(accessTokenEncrypted);
      config.headers["Authorization"] = `${accessToken}`;
    }

    // const language = localStorage.getItem('language') || 'en';
    // config.headers['Accept-Language'] = language;
    return config;
  },
  (error) => Promise.reject(error)
);

belibizService.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      const userInfoHash = await cookieUtils.get(COOKIE_KEYS.USER_INFO);
      const userTokeHash = await cookieUtils.get(COOKIE_KEYS.USER_TOKEN);

      if (userInfoHash) {
        await cookieUtils.remove(COOKIE_KEYS.USER_INFO);
      }

      if (userTokeHash) {
        await cookieUtils.remove(COOKIE_KEYS.USER_TOKEN);
      }
      redirect(APP_ROUTE.HOME);
    }
    // const originalRequest = error.config;
    // if (error.response.status === 401 && !originalRequest._retry) {
    //   originalRequest._retry = true;
    //   const refreshToken = localStorage.getItem('refreshToken');
    //   try {
    //     const { data } = await belibizService.post('/auth/refresh-token', { token: refreshToken });
    //     localStorage.setItem('accessToken', data.accessToken);
    //     belibizService.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;
    //     return belibizService(originalRequest);
    //   } catch (refreshError) {
    //     console.log('refreshError', refreshError)
    //     // Handle token refresh error (e.g., redirect to login)
    //   }
    // }
    return Promise.reject(error);
  }
);
export default belibizService;
