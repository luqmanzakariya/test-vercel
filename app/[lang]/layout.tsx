import type { Metadata } from "next";
import localFont from "next/font/local";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/dictionaries";
import { ToastProvider } from "@/components/templates/toast";
import Script from "next/script";
import "../globals.css";

// Afacad as the primary font
const afacad = localFont({
  src: [
    {
      path: "../fonts/Afacad-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Afacad-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-afacad",
  display: "swap",
});

// ABeeZee as the secondary
const abeezee = localFont({
  src: [
    {
      path: "../fonts/ABeeZee-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/ABeeZee-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-abeezee",
  display: "swap",
});

// Abril as additional font
const abrilFatface = localFont({
  src: [
    {
      path: "../fonts/AbrilFatface-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-abril-fatface",
  display: "swap",
});

export const metadata: Metadata = {};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);
  metadata.title = dict.metadata?.home?.title;
  metadata.description = dict.metadata?.home?.description;

  return (
    <html lang={locale}>
      {/* Google Tag (gtag.js) */}
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_TAG_ID}`}
      />
      <Script id="gtag-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.GOOGLE_TAG_ID}');
        `}
      </Script>
      <body
        className={`${afacad.variable} ${abeezee.variable} ${abrilFatface.variable} font-primary text-black`}
      >
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
