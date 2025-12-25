import axios from "axios";

const publicService = axios.create({
  timeout: 30000,
});

publicService.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

publicService.interceptors.response.use(
  (response) => response,
  async (error) => {
    // const originalRequest = error.config;
    // if (error.response.status === 401 && !originalRequest._retry) {
    //   originalRequest._retry = true;
    //   const refreshToken = localStorage.getItem('refreshToken');
    //   try {
    //     const { data } = await publicService.post('/auth/refresh-token', { token: refreshToken });
    //     localStorage.setItem('accessToken', data.accessToken);
    //     publicService.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;
    //     return publicService(originalRequest);
    //   } catch (refreshError) {
    //     console.log('refreshError', refreshError)
    //     // Handle token refresh error (e.g., redirect to login)
    //   }
    // }
    return Promise.reject(error);
  }
);
export default publicService;
