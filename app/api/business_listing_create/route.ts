import { IBusinessListingPayload } from "@/types/authentication";
import { postBusinessListingCreateServer } from "@/utils/api/server/authentication-server";
import { ErrorHandler } from "@/utils/errorHandler";

export async function POST(request: Request) {
  const payload: IBusinessListingPayload = await request.json();
  try {
    const result = await postBusinessListingCreateServer(payload);
    return Response.json(result.data);
  } catch (err) {
    return ErrorHandler(err as Error);
  }
}
