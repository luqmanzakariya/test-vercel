import { Locale } from "@/i18n-config";

export type ServerPageProps = {
  params: Promise<{ lang: Locale; id?: string }>;
  searchParams?: Promise<{ [key: string]: string }>;
};
