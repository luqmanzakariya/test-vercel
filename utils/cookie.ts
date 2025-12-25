import { cookies } from "next/headers";

export const cookieUtils = {
  get: async (name: string): Promise<string | undefined> => {
    const cookieStore = await cookies();
    const value = cookieStore.get(name)?.value;
    return value;
  },

  set: async (name: string, value: string, options?: CookieSetOptions): Promise<void> => {
    const cookieStore = await cookies();
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);

    const cookieOptions: CookieSetOptions = {
      path: "/",
      expires,
      ...options,
    };
    cookieStore.set({
      name,
      value,
      ...cookieOptions,
    });
  },

  remove: async (name: string): Promise<void> => {
    const cookieStore = await cookies();
    cookieStore.delete(name);
  },
};

// Optional: define CookieSetOptions type if you want to type `options`
type CookieSetOptions = {
  path?: string;
  httpOnly?: boolean;
  secure?: boolean;
  sameSite?: "lax" | "strict" | "none";
  maxAge?: number;
  expires?: Date;
};
