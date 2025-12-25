import { IWishlistPayload } from "@/types/authentication";
import { postWishlistServer } from "@/utils/api/server/authentication-server";
import { ErrorHandler } from "@/utils/errorHandler";

export async function POST(request: Request) {
  const payload: IWishlistPayload = await request.json();
  try {
    const result = await postWishlistServer(payload);
    return Response.json(result.data);
  } catch (err) {
    return ErrorHandler(err as Error);
  }
}
