import { ErrorHandler } from "@/utils/errorHandler";
import { cookieUtils } from "@/utils/cookie";
import { COOKIE_KEYS } from "@/constant";
import { getStorePageCounterCookie } from "@/utils/api/server/decrypt-data";
import { NextRequest } from "next/server";
import { postCountBusinessListingView } from "@/utils/api/server/page-view";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (!id) return Response.json({ message: "No ID provided" }, { status: 200 });

    const storedPage = await getStorePageCounterCookie();
    if (!storedPage) {
      await postCountBusinessListingView(id);
      await cookieUtils.set(COOKIE_KEYS.PAGE_COUNTER, JSON.stringify([id]));
      return Response.json({ message: "Page view counted" }, { status: 200 });
    } else {
      const parsedStoredPage = JSON.parse(storedPage as string);
      if (id && !parsedStoredPage.includes(id)) {
        await postCountBusinessListingView(id);
        parsedStoredPage.push(id);
        await cookieUtils.set(COOKIE_KEYS.PAGE_COUNTER, JSON.stringify(parsedStoredPage));
        return Response.json({ message: "Page view counted" }, { status: 200 });
      }
    }

    return Response.json({ message: "Page already counted" }, { status: 200 });
  } catch (err) {
    return ErrorHandler(err as Error);
  }
}
