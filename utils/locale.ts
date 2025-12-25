import { Locale, i18n } from "@/i18n-config";

export function getLocale(request: Request): Locale {
  let currentLocale: Locale = i18n.defaultLocale;

  i18n.locales.every((locale) => {
    const match = request?.headers?.get("Accept-Language") !== locale;
    if (!match) {
      currentLocale = locale;
    }
    return match;
  });

  return currentLocale;
}

export function getLocaleFromHeader(acceptLanguage?: string | null): Locale {
  let currentLocale: Locale = i18n.defaultLocale;

  i18n.locales.every((locale) => {
    const match = acceptLanguage !== locale;
    if (!match) {
      currentLocale = locale;
    }
    return match;
  });

  return currentLocale;
}

export function getLocaleFromRoutePrefix(request: Request): Locale {
  let currentLocale: Locale = i18n.defaultLocale;
  const prefix = request?.headers
    ?.get("Referer")
    ?.split(`${request?.headers?.get("Origin")}`)[1]
    .slice(1, 3);

  i18n.locales.every((locale) => {
    const match = prefix !== locale;
    if (!match) {
      currentLocale = locale;
    }
    return match;
  });

  return currentLocale;
}
