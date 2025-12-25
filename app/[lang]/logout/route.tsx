import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { cookieUtils } from "@/utils/cookie";
import { COOKIE_KEYS } from "@/constant";

export async function GET(req: NextRequest) {
  const header = headers();
  const url = req.nextUrl.clone();
  const host = (await header).get("host");
  const proto = (await header).get("x-forwarded-proto") ?? "http";
  let targetUrl = new URL("/", url);

  if (host && proto) {
    targetUrl = new URL("/", `${proto}://${host}`);
  }

  try {
    await cookieUtils.remove(COOKIE_KEYS.USER_INFO);
    await cookieUtils.remove(COOKIE_KEYS.USER_TOKEN);

    return NextResponse.redirect(targetUrl);
  } catch (error) {
    console.error("Logout error:", error);
    await cookieUtils.remove(COOKIE_KEYS.USER_INFO);
    await cookieUtils.remove(COOKIE_KEYS.USER_TOKEN);

    return NextResponse.redirect(targetUrl);
  }
}
