import "server-only";

import type { Locale } from "../i18n-config";
import type { DictProps } from "@/types/dict";

const dictionaries: Record<string, () => Promise<DictProps>> = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  id: () => import("@/dictionaries/id.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale): Promise<DictProps> =>
  dictionaries?.[locale]?.() ?? dictionaries.en();
