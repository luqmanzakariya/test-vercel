import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest, NextResponse } from "next/server";

import { i18n } from "./i18n-config";

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales = [...i18n.locales];

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(locales);
  if (!languages.includes("id")) {
    languages.unshift("id");
  }

  const locale = matchLocale(languages, locales, i18n.defaultLocale);
  return locale;
}

export async function middleware(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl;

  // Check if the pathname already has a locale
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If the pathname doesn't have a locale, redirect to add it
  if (!pathnameHasLocale) {
    const locale = getLocale(req);
    const nextUrl = new URL(`/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`, req.url);
    nextUrl.search = searchParams.toString();
    return NextResponse.redirect(nextUrl);
  }

  // If the pathname already has a locale, let the request continue
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|assets).*)"],
};
