import { ILoginPayload } from "@/types/authentication";
import { postLoginServer } from "@/utils/api/server/authentication-server";
import { ErrorHandler } from "@/utils/errorHandler";
import { cookieUtils } from "@/utils/cookie";
import { COOKIE_KEYS } from "@/constant";
import { encrypt } from "@/utils/crypto";

export async function POST(request: Request) {
  const payload: ILoginPayload = await request.json();

  try {
    const result = await postLoginServer(payload);
    const tokenEncrypted = encrypt(result.data?.data?.token);
    const userStringEncrypted = encrypt(JSON.stringify(result.data?.data?.user));

    await cookieUtils.set(COOKIE_KEYS.USER_TOKEN, tokenEncrypted);
    await cookieUtils.set(COOKIE_KEYS.USER_INFO, userStringEncrypted);

    return Response.json(result.data);
  } catch (err) {
    return ErrorHandler(err as Error);
  }
}
