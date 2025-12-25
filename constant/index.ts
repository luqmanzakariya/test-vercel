import { Locale } from "@/i18n-config";

export const COOKIE_KEYS: Record<string, string> = {
  USER_TOKEN: "_authorization",
  USER_INFO: "_user",
  PAGE_COUNTER: "_page_counter",
};

export const LIST_LANGUAGE = [
  {
    code: "id" as Locale,
    name: "Indonesia",
    label: "Bahasa Indonesia",
    flag: "🇮🇩",
  },
  {
    code: "en" as Locale,
    name: "English",
    label: "English",
    flag: "🇺🇸",
  },
];

export const LIST_CURRENT_ASSETS = [
  {
    label: "Cash and Cash Equivalents",
    code: "CASH_AND_EQUIVALENTS",
  },
  {
    label: "Accounts Receivable",
    code: "ACCOUNTS_RECEIVEABLE",
  },
  {
    label: "Inventory",
    code: "INVENTORY",
  },
  {
    label: "Short Term Investment",
    code: "SHORT_TERM_INVESMENT",
  },
];

export const LIST_CURRENT_LIABILITIES = [
  {
    label: "Accounts Payable",
    code: "ACCOUNTS_PAYABLE",
  },
  {
    label: "Unearned Revenue / Other Payable",
    code: "UNEARNED_REVENUE_OR_OTHER_PAYABLE",
  },
  {
    label: "Accrued Expense",
    code: "ACCRUED_EXPENSE",
  },
];
