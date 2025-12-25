import { postBusinessValuation } from "@/utils/api/server/business";
import { ErrorHandler } from "@/utils/errorHandler";
import { BusinessValuationDetail } from "@/types/business";

export async function POST(request: Request) {
  const payload: BusinessValuationDetail = await request.json();
  try {
    const result = await postBusinessValuation(payload);
    return Response.json(result.data);
  } catch (err) {
    return ErrorHandler(err as Error);
  }
}
