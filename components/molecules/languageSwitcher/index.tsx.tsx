"use client";

import { LIST_LANGUAGE } from "@/constant";
import { Locale } from "@/i18n-config";
import { usePathname, useRouter } from "next/navigation";

const LanguageSwitcher = () => {
  const router = useRouter();
  const currentPathName = usePathname();

  const handleChangeLang = (lang: Locale) => {
    const segments = currentPathName.split("/").filter(Boolean);
    segments[0] = lang;
    router.replace("/" + segments.join("/"));
  };

  const currentLocale = currentPathName.split("/")[1] as Locale;

  return (
    <div>
      <select
        value={currentLocale}
        onChange={(e) => handleChangeLang(e.target.value as Locale)}
        className="rounded-[10px] bg-transparent text-white pr-[8px] outline-none focus:outline-none focus:ring-0 focus:border-none"
      >
        {LIST_LANGUAGE.map((lang) => (
          <option key={lang.code} value={lang.code} className="bg-transparent">
            {lang.flag}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
