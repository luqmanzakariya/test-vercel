import { ISearchParamPayload } from "@/types/authentication";
import { getBusinessListingPublicWithFilter } from "@/utils/api/server/business";
import { ErrorHandler } from "@/utils/errorHandler";

export async function POST(request: Request) {
  const payload: ISearchParamPayload = await request.json();
  try {
    const result = await getBusinessListingPublicWithFilter(payload?.searchParams);
    return Response.json(result.data);
  } catch (err) {
    return ErrorHandler(err as Error);
  }
}
