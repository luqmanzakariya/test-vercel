import { COOKIE_KEYS } from "@/constant";
import { IProfilePayload } from "@/types/authentication";
import { postProfileServer } from "@/utils/api/server/authentication-server";
import { cookieUtils } from "@/utils/cookie";
import { encrypt } from "@/utils/crypto";
import { ErrorHandler } from "@/utils/errorHandler";

export async function POST(request: Request) {
  const payload: IProfilePayload = await request.json();
  try {
    const result = await postProfileServer(payload);
    const userStringEncrypted = encrypt(JSON.stringify(result.data?.data));

    await cookieUtils.set(COOKIE_KEYS.USER_INFO, userStringEncrypted);

    return Response.json(result.data);
  } catch (err) {
    return ErrorHandler(err as Error);
  }
}
